import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import { io } from "socket.io-client";
import Peer from "peerjs";

import SideMenu from "../components/MeetingRoom/SideMenu";

import clockIcon from "./Assets/Icons/clock.svg";
import recordIcon from "./Assets/Icons/record-circle-fill.svg";
import peopleIcon from "./Assets/Icons/people.svg";
import hamburgerIcon from "./Assets/Icons/menu-burger.svg";

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

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const callers = [
    {
      id: 1,
      name: "badie alili",
    },
    {
      id: 1,
      name: "badie alili",
    },
    {
      id: 1,
      name: "badie alili",
    },
    {
      id: 1,
      name: "badie alili",
    },
    {
      id: 1,
      name: "badie alili",
    },
    {
      id: 1,
      name: "badie alili",
    },
    {
      id: 1,
      name: "badie alili",
    },
    {
      id: 1,
      name: "badie alili",
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-zinc-900 px-6 pt-10 md:px-16">
      {/* TITLE + TOGGLE SIDE MENU */}
      <header className="pb-6">
        <div className="flex items-start justify-between">
          <h1 className="mb-8 text-2xl font-bold text-slate-50 md:text-4xl">
            UI UX Team meeting_
          </h1>
          <button onClick={() => setSideMenuOpen(() => true)}>
            <img className="mt-2 w-6" src={hamburgerIcon} alt="" />
          </button>
        </div>
        {/* PARAMETERS */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-2 flex items-center gap-2 sm:gap-8">
            <div className="flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1">
              <img src={clockIcon} alt="" />
              <p className="text-xs text-slate-900">Meet 13:49</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-red-200 px-4 py-1">
              <img src={recordIcon} alt="" />
              <p className="text-xs text-red-700">Recording 10:12</p>
            </div>
          </div>
          <div className="ml-2 flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1">
            <img src={peopleIcon} alt="" />
            <p className="text-xs text-slate-900">24</p>
          </div>
        </div>
      </header>
      {/* SIDE MENU  */}
      <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
      {/* CALLERS GRID */}
      <div className="-mr-4 flex h-full flex-wrap justify-start gap-4 overflow-y-scroll pb-32 pt-10">
        {/* <div id="video-grid" ref={videoGrid}></div> */}
        {callers.map((item) => (
          <div className="mb-2 aspect-square w-[calc(50%-1rem)] border-2 border-slate-50 md:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)]">
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingRoom;