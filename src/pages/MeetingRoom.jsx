import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import { io } from "socket.io-client";
import Peer from "peerjs";

const socket = io("http://localhost:10000");

const MeetingRoom = () => {
  const navigate = useNavigate();

  const { roomId } = useParams();
  const { user } = useAuthContext();
  const [roomExists, setRoomExists] = useState(false);

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
      console.log(json.message);

      if (response.ok) {
        // TODO: check json response attribute name with backend
        setRoomExists(true);
      }
    }
    checkRoomExists();
  }, []);

  if (roomExists) {
    // TODO: this doesn't work idk why, it's 1am so i'll fix it tomorrow
    return <div>Room Doesn't Exist</div>;
  }

  const videoGrid = useRef();
  const myPeer = new Peer();
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const peers = {};

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      // add my video stream to video grid
      addVideoStream(myVideo, stream);

      myPeer.on("call", (call) => {
        console.log("call received");
        call.answer(stream);
        const video = document.createElement("video");
        call.on("stream", (userVideoStream) => {
          addVideoStream(video, userVideoStream);
        });
      });

      socket.on("user-connected", (userId) => {
        console.log("user-connected received");
        connectToNewUser(userId, stream);
      });

      socket.on("user-disconnected", (userId) => {
        if (peers[userId]) peers[userId].close();
      });

      myPeer.on("open", (id) => {
        socket.emit("join-room", roomId, id);
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

  return <div id="video-grid" ref={videoGrid}></div>;
};

export default MeetingRoom;
