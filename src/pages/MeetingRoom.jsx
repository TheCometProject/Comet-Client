import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import { io } from "socket.io-client";
import Peer from "peerjs";

import SideMenu from "../components/MeetingRoom/SideMenu";
import Actions from "../components/MeetingRoom/Actions";
import Header from "../components/MeetingRoom/Header";

const socket = io("http://localhost:10000");

const MeetingRoom = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  // controls:
  // TODO: default state should be whatever the user accepted in permissions
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const { roomId } = useParams();
  const [roomExists, setRoomExists] = useState(false);
  const videoGrid = useRef();
  const myVideo = document.createElement("video");
  myVideo.muted = true;

  const [localMediaStream, setLocalMediaStream] = useState(null);

  async function createRoom() {
    const data = {
      author: "badie",
      roomId: 69,
    };
    const res = await fetch("http://localhost:4000/api/v1/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res2 = await res.json();
    console.log(res2);
  }

  createRoom();

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
  }

  function onDisconnect() {
    // TODO: for error handling, whenever our socket disconnects
    // we can for example reload the page to force a reconnect or redirect to /error ...etc
    console.log("socket disconnected");
  }

  useEffect(() => {
    if (roomExists) {
      const socket = io("http://localhost:10000");
      const myPeer = new Peer({
        host: "/",
        port: "3001",
      });
      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);

      const peers = {};
      myPeer.on("open", (id) => {
        console.log("peer connection opened");
        socket.emit("join-room", roomId, id);
      });

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true, echoCancellation: true })
        .then((stream) => {
          setLocalMediaStream(stream);

          // add my video stream to video grid
          addVideoStream(myVideo, stream);

          myPeer.on("call", (call) => {
            peers[call.peer] = call;
            call.answer(stream);
            const video = document.createElement("video");
            call.on("stream", (userVideoStream) => {
              addVideoStream(video, userVideoStream);
            });

            call.on("close", () => {
              video.remove();
            });
            // TODO: this is not tested but it should have fixed a bug
            peers[call.peer] = call;
          });

          socket.on("user-connected", (userId) => {
            connectToNewUser(userId, stream);
          });

          socket.on("user-disconnected", (userId) => {
            if (peers[userId]) peers[userId].close();
          });
        });

      function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream);
        const video = document.createElement("video");
        call.on("stream", (userVideoStream) => {
          addVideoStream(video, userVideoStream);
        });
        call.on("close", () => {
          video.remove();
        });

        peers[userId] = call;
      }

      function addVideoStream(video, stream) {
        if (video.current) {
          video.current.srcObject = stream;
        } else {
          video.srcObject = stream;
        }
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
        const div = document.createElement('div');
        div.append(video);
        videoGrid.current.append(div);
      }
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

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [fullscreen, setFullScreen] = useState(false);

  

  return loading ? (
    // TODO: style loading better? (optional)
    <div>Loading</div>
  ) : roomExists ? (
    <div className="relative h-screen overflow-hidden bg-zinc-900 px-6 pt-10 md:px-16">
      <Header fullscreen={fullscreen} setSideMenuOpen={setSideMenuOpen} />
      <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
      <div
        className={`overflow-auto pb-12 transition-all md:pb-[0vh] ${
          fullscreen ? "-mt-32 h-screen" : "mt-0 h-[calc(100%-12rem)]"
        }`}
      >
        <div
          id="video-grid"
          ref={videoGrid}
          className=" -mr-4 flex h-fit w-full flex-wrap place-content-start justify-start gap-4"
        ></div>
      </div>
      <Actions
        sideMenuOpen={sideMenuOpen}
        fullScreen={fullscreen}
        setFullScreen={setFullScreen}
        videoEnabled={videoEnabled}
        toggleVideo={toggleVideo}
        audioEnabled={audioEnabled}
        toggleMic={toggleMic}
      />
    </div>
  ) : (
    <Navigate to="/error" />
  );
};

export default MeetingRoom;
