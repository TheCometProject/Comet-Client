import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import { io } from "socket.io-client";
import Peer from "peerjs";

import SideMenu from "../components/MeetingRoom/SideMenu";
import Actions from "../components/MeetingRoom/Actions";
import Header from "../components/MeetingRoom/Header";

const socket = io("http://localhost:10000");

const MeetingRoom = () => {
  const navigate = useNavigate();

  const { roomId } = useParams();
  const { user } = useAuthContext();
  // const [roomExists, setRoomExists] = useState(false);
  const [roomExists, setRoomExists] = useState(true); // just for u to test it, default should be false so in case the server doesn't respond then we assume the room doesn't exist

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
      console.log(json.success);

      if (!response.success) {
        // TODO: check json response attribute name with backend
        setRoomExists(true);
      }
    }
    checkRoomExists();
  }, []);

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
  const [fullscreen, setFullScreen] = useState(false);
  const [micMuted, setMicMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);

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
      <Header fullscreen={fullscreen} setSideMenuOpen={setSideMenuOpen} />
      <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
      <div
        className={`overflow-auto pb-12 transition-all md:pb-[0vh] ${
          fullscreen ? "-mt-32 h-screen" : "mt-0 h-[calc(100%-12rem)]"
        }`}
      >
        <div className=" -mr-4 flex h-screen w-full flex-wrap place-content-start justify-start gap-4">
          {callers.map((item) => (
            <div className="relative mb-0 h-0 w-[calc(50%-1rem)] border-2 border-slate-50 pb-[calc(50%-1rem)] md:w-[calc(33%-1rem)] md:pb-[calc(33%-1rem)] lg:w-[calc(25%-1rem)] lg:pb-[calc(25%-1rem)]">
              <p className="absolute bottom-0 right-0 m-4 rounded-full bg-slate-200 px-4">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div id="video-grid" ref={videoGrid}></div> */}
      <Actions
        sideMenuOpen={sideMenuOpen}
        fullScreen={fullscreen}
        setFullScreen={setFullScreen}
        videoOff={videoOff}
        setVideoOff={setVideoOff}
        micMuted={micMuted}
        setMicMuted={setMicMuted}
      />
    </div>
  );
};

export default MeetingRoom;