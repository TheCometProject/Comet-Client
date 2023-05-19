import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "peerjs";
import { useParams } from "react-router-dom";

import clockIcon from "./Assets/Icons/clock.svg";
import recordIcon from "./Assets/Icons/record-circle-fill.svg";
import peopleIcon from "./Assets/Icons/people.svg";
import peopleFillIcon from "./Assets/Icons/people-fill.svg";
import chatIcon from "./Assets/Icons/chat-square.svg";
import chatFillIcon from "./Assets/Icons/chat-square-fill.svg";
import hamburgerIcon from "./Assets/Icons/menu-burger.svg";
import crossIcon from "./Assets/Icons/cross.svg";

// const socket = io("http://localhost:10000");

const MeetingRoom = () => {
  // const { roomId } = useParams();

  // //  if room exists:
  // //    render this page
  // //  else:
  // //    render room does not exist page

  // const videoGrid = useRef();
  // const myPeer = new Peer();
  // const myVideo = document.createElement("video");
  // myVideo.muted = true;
  // const peers = {};

  // // TODO: should we use an effect hook here?
  // // useEffect(() => {
  // // }, []);

  // navigator.mediaDevices
  //   .getUserMedia({ video: true, audio: true })
  //   .then((stream) => {
  //     // add my video stream to video grid
  //     addVideoStream(myVideo, stream);

  //     myPeer.on("call", (call) => {
  //       console.log("call received");
  //       call.answer(stream);
  //       const video = document.createElement("video");
  //       call.on("stream", (userVideoStream) => {
  //         addVideoStream(video, userVideoStream);
  //       });
  //     });

  //     socket.on("user-connected", (userId) => {
  //       console.log("user-connected received");
  //       connectToNewUser(userId, stream);
  //     });

  //     socket.on("user-disconnected", (userId) => {
  //       if (peers[userId]) peers[userId].close();
  //     });

  //     myPeer.on("open", (id) => {
  //       socket.emit("join-room", roomId, id);
  //     });
  //   });

  // function connectToNewUser(userId, stream) {
  //   const call = myPeer.call(userId, stream);
  //   const video = document.createElement("video");
  //   call.on("stream", (userVideoStream) => {
  //     addVideoStream(video, userVideoStream);
  //   });
  //   call.on("close", () => {
  //     video.remove();
  //   });

  //   peers[userId] = call;
  // }

  // function addVideoStream(video, stream) {
  //   if (video.current) {
  //     video.current.srcObject = stream;
  //   } else {
  //     video.srcObject = stream;
  //   }
  //   video.addEventListener("loadedmetadata", () => {
  //     video.play();
  //   });
  //   videoGrid.current.append(video);
  // }

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [chatDisplayed, setChatDisplayed] = useState(false);
  console.log(chatDisplayed);

  return (
    <div className="relative h-screen overflow-hidden px-6 pt-10 md:px-16">
      <div className="flex items-start justify-between">
        <h1 className="mb-8 text-2xl font-bold text-slate-700 md:text-4xl">
          UI UX Team meeting<span className="text-blue-700">_</span>
        </h1>
        <button onClick={() => setSideMenuOpen(() => true)}>
          <img className="mt-2 w-6" src={hamburgerIcon} alt="" />
        </button>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-8">
            <div className="flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1">
              <img src={clockIcon} alt="" />
              <p className="text-xs text-slate-900">Meet 13:49</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-red-200 px-4 py-1">
              <img src={recordIcon} alt="" />
              <p className="text-xs text-red-700">Recording 10:12</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1">
            <img src={peopleIcon} alt="" />
            <p className="text-xs text-slate-900">24</p>
          </div>
        </div>
      </div>
      {/* Side Menu  */}
      <div
        className={`${
          sideMenuOpen ? "right-0" : "-right-full"
        } absolute top-0 h-screen w-full rounded-l-2xl bg-slate-200 px-6 pt-10 transition-all sm:w-[400px]`}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
          <button onClick={() => setSideMenuOpen(() => false)}>
            <img className="w-5" src={crossIcon} alt="" />
          </button>
          <p className="text-2xl md:text-2xl font-semibold text-slate-700">{chatDisplayed?"Chat":"Participants"}</p>
          </div>
          <div className="relative flex h-8 w-32 justify-between rounded-full bg-slate-300">
            <div
              className={`absolute bottom-0 top-0 w-1/2 rounded-full bg-blue-300 transition-all duration-200 ${
                chatDisplayed ? "left-0" : "left-1/2"
              }`}
            ></div>
            <div
              className="z-10 flex basis-1/2 items-center justify-center"
              onClick={() => setChatDisplayed(() => true)}
            >
              <input
                className="hidden"
                type="radio"
                name="sideMenuToggle"
                id="chat"
                checked={chatDisplayed}
              />
              <label htmlFor="chat">
                <img src={chatDisplayed ? chatFillIcon : chatIcon} alt="" />
              </label>
            </div>
            <div
              className="z-10 flex basis-1/2 items-center justify-center"
              onClick={() => setChatDisplayed(() => false)}
            >
              <input
                className="hidden"
                type="radio"
                name="sideMenuToggle"
                id="participants"
                checked={!chatDisplayed}
              />
              <label htmlFor="participants">
                <img src={chatDisplayed ? peopleIcon : peopleFillIcon} alt="" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
