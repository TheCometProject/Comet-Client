import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import { io } from "socket.io-client";
import Peer from "peerjs";


const MeetingRoom = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  const { roomId } = useParams();
  const [roomExists, setRoomExists] = useState(false);
  const videoGrid = useRef();

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
      const socket = io("http://localhost:10000", {
        autoConnect: false
      });
      const myPeer = new Peer({
        // host: '/',
        // port: '3001',
      });
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      
      const myVideo = document.createElement("video");
      myVideo.muted = true;
      const peers = {};
      myPeer.on("open", (id) => {
        socket.emit("join-room", roomId, id);
      });

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          // add my video stream to video grid
          addVideoStream(myVideo, stream);
  
          myPeer.on("call", (call) => {
            call.answer(stream);
            const video = document.createElement("video");
            call.on("stream", (userVideoStream) => {
              addVideoStream(video, userVideoStream);
            });
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
        videoGrid.current.append(video);
      }
    }
  }, [roomExists])
  
  return loading ? (
    // TODO: style loading better? (optional)
    <div id="video-grid" ref={videoGrid}>Loading</div>
  ) : roomExists ? (
    <div id="video-grid" ref={videoGrid}></div>
  ) : (
    <Navigate to="/error" />
  );
};

export default MeetingRoom;
