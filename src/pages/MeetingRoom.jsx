import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import Peer from "peerjs";
import { useParams } from "react-router-dom";

const socket = io("http://localhost:10000");

const MeetingRoom = () => {
  const { roomId } = useParams();

  //  if room exists: 
  //    render this page
  //  else:
  //    render room does not exist page

  const videoGrid = useRef();
  const myPeer = new Peer();
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const peers = {};
  
  // TODO: should we use an effect hook here?
  // useEffect(() => {
  // }, []);
  
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
