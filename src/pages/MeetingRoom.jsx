import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import { io } from "socket.io-client";
import Peer from "peerjs";

const MeetingRoom = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  // controls:
  // TODO: default state should be whatever the user accepted in permissions
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const { roomId } = useParams();
  const [roomExists, setRoomExists] = useState(false);
  const videoGrid = useRef();
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const peers = {};
  const [participants, setParticipants] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);

  const [localMediaStream, setLocalMediaStream] = useState(null);

  useEffect(() => {
    async function checkRoomExists() {
      const response = await fetch(
        `http://localhost:4000/api/v1/rooms/${roomId}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${user.accessToken}` },
        }
      );

      const json = await response.json();
      if (json && json.message == "Room exists") {
        setRoomExists(true);
      }
      setLoading(false);
    }
    checkRoomExists();
  }, []);

  function onConnect() {
    // TODO: for error handling, whenever our socket disconnects
    // we can for example reload the page to force a reconnect or redirect to /error ...etc
    console.log("socket connected");
    setSocketConnected(true);
  }

  function onDisconnect() {
    // TODO: for error handling, whenever our socket disconnects
    // we can for example reload the page to force a reconnect or redirect to /error ...etc
    console.log("socket disconnected");
    setSocketConnected(false);
  }

  useEffect(() => {
    if (roomExists && !socketConnected) {
      const socket = io("http://localhost:10000");
      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);

      // only create a peer once the navigator promise finishes (bcz of some race condition)
      // solution (maybe) found here: https://stackoverflow.com/questions/66937384/peer-oncalll-is-never-being-called
      

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true, echoCancellation: true })
        .then((stream) => {

          const myPeer = new Peer({
            host: "/",
            port: "3001",
          });

          // TODO: does this event even exist? (disconnect maybe?)
          myPeer.on("error", (err) => {
            console.log(err);
          });
    
          myPeer.on("open", (id) => {
            console.log("peer connection opened");
            console.log(roomId, id)
            socket.emit("join-room", roomId, id);
          });

          myPeer.on("call", (call) => {
            peers[call.peer] = call;
            setParticipants(peers);
            console.log("going to answer call from: ", call.peer);
            call.answer(stream);
            const video = document.createElement("video");

            call.on("error", (error) => {
              console.log(error);
            });

            call.on("stream", (userVideoStream) => {
              console.log("received stream from: ", call.peer, userVideoStream);
              addVideoStream(video, userVideoStream);
            });

            call.on("close", () => {
              video.remove();
            });

            // TODO: this is not tested but it should have fixed a bug
            peers[call.peer] = call;
            setParticipants(peers);
          });

          // used to toggle video/mic
          setLocalMediaStream(stream);

          // add my video stream to video grid
          addVideoStream(myVideo, stream);

          if (!videoEnabled) stream.getVideoTracks()[0].enabled = false;
          if (!audioEnabled) stream.getAudioTracks()[0].enabled = false;

          

          socket.emit("ready");

          socket.on("user-connected", (userId) => {
            console.log("user connected with userId:", userId);
            // TODO: if that problem occurs again just add a 1s delay
            // https://stackoverflow.com/questions/66937384/peer-oncalll-is-never-being-called
            // setTimeout(() => connectToNewUser(userId, stream), 1000);
            connectToNewUser(userId, stream);
          });

          socket.on("user-disconnected", (userId) => {
            if (peers[userId]) peers[userId].close();
            setParticipants(peers);
            // TODO: also destroy the user from peers object?
          });

          function connectToNewUser(userId, stream) {
            console.log("going to call peer: ", userId);
            const call = myPeer.call(userId, stream);
            console.log(
              userId,
              "called, waiting for him to send his stream",
              call.open
            );

            const video = document.createElement("video");

            call.on("stream", (userVideoStream) => {
              console.log("finally received stream", userVideoStream);
              addVideoStream(video, userVideoStream);
            });

            call.on("close", () => {
              video.remove();
            });

            call.on("error", () => {
              video.remove();
            });

            peers[userId] = call;
            setParticipants(peers);
          }

          function addVideoStream(video, stream) {
            // this is because sometimes we pass a react Ref
            // but sometimes we pass a normal HTMLVideoElement
            if (video.current) {
              video.current.srcObject = stream;
            } else {
              video.srcObject = stream;
            }
            video.addEventListener("loadedmetadata", () => {
              video.play();
            });
            videoGrid.current.append(video);
          }
        });
    }
  }, [roomExists]);

  const toggleVideo = () => {
    localMediaStream.getVideoTracks()[0].enabled = !videoEnabled;
    setVideoEnabled(!videoEnabled);
  };

  const toggleMic = () => {
    localMediaStream.getAudioTracks()[0].enabled = !audioEnabled;
    setAudioEnabled(!audioEnabled);
  };

  return loading ? (
    // TODO: style loading better? (optional)
    <div>Loading</div>
  ) : roomExists ? (
    <div id="video-grid" ref={videoGrid}>
      <ul>
        <li>first item</li>
        {Object.entries(participants).map(([key, value]) => {
          <li>lol: {key}</li>;
        })}
      </ul>
      <h6>{videoEnabled ? "enabled" : "disabled"}</h6>
      <h6>{audioEnabled ? "enabled" : "disabled"}</h6>
      <button onClick={toggleVideo}>Video</button>
      <button onClick={toggleMic}>Microphone</button>
    </div>
  ) : (
    <Navigate to="/error" />
  );
};

export default MeetingRoom;
