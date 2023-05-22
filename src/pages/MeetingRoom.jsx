import React, { useState, useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { API_URL, SOCKET_IO } from "../constants";

import { io } from "socket.io-client";
import Peer from "peerjs";

import SideMenu from "../components/MeetingRoom/SideMenu";
import Actions from "../components/MeetingRoom/Actions";
import Header from "../components/MeetingRoom/Header";

// initialize socket but dont connect
console.log("SOCKET INITIALIZATION SHOULD ONLY RUN ONCE");
const socket = io(SOCKET_IO, {
  autoConnect: false,
});

const MeetingRoom = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  // CONTROLS+UI STATES:
  // TODO: default state should be whatever the user accepted in permissions
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [fullscreen, setFullScreen] = useState(false);

  const { roomId } = useParams();
  const [roomExists, setRoomExists] = useState(false);
  const videoGrid = useRef();
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  let peers = {};
  let callStreams = []
  const [participants, setParticipants] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const [permissionAllowed, setPermissionAllowed] = useState(false);
  const [localMediaStream, setLocalMediaStream] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [currentPeerId, setCurrentPeerId] = useState("");
  const [alreadySetup, setAlreadySetup] = useState(false);

  useEffect(() => {
    async function createRoom() {
      const data = {
        author: "badie",
        roomId: 69,
      };
      const res = await fetch(`${API_URL}/meeting/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res2 = await res.json();
      console.log(res2);
    }

    // createRoom();
  }, []);

  // setup some socket events
  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    function onConnect() {
      // TODO: for error handling, whenever our socket disconnects
      // we can for example reload the page to force a reconnect or redirect to /error ...etc
      console.log("socket connected");
      setSocketConnected(true);
    }
    function onDisconnect() {
      console.log("socket disconnected");
      setSocketConnected(false);
    }
  }, []);

  // check if room exists
  useEffect(() => {
    async function checkRoomExists() {
      const response = await fetch(
        `${API_URL}/api/v1/rooms/${roomId}`,
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
    // TODO: testing
    checkRoomExists();
  }, []);

  // request user media
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true, echoCancellation: true })
      .then((stream) => {
        if (!stream) console.warn("wtf bro? stream should never be null");

        stream.getVideoTracks()[0].enabled = videoEnabled;
        stream.getAudioTracks()[0].enabled = audioEnabled;

        // used to toggle video/mic
        setLocalMediaStream(stream);
        setPermissionAllowed(true);
      })
      .catch((err) => {
        console.error("error while asking for video permission:", err);
        setPermissionAllowed(false);
      });
  }, []);

  // send "ready" event when peer finishes setting up
  useEffect(() => {
    if (socketConnected && isReady && !alreadySetup) {
      console.log(
        `peer connection opened with id ${currentPeerId}, going to emit join-room event now`
      );
      socket.emit("join-room", roomId, currentPeerId);
      console.log("emitted join-room, only NOW can u send a ready event");
      socket.emit("ready");
      setAlreadySetup(true);
    }
  }, [isReady, socketConnected]);

  // fixes hot reload bug
  // FEATURE: now even if the socket connection is lost, existing peers will remain connected
  // and it will keep trying to connect to the socket untill it does successfully
  // untill socket connection is restored, new peers cannot joined the meeting as it requires
  // a socket event to tell everyone a new user has joined
  useEffect(() => {
    if (alreadySetup) {
      console.log(
        `peer connection restored!!! with id ${currentPeerId}, going to emit join-room event now`
      );
      socket.emit("join-room", roomId, currentPeerId);
    }
  }, [socketConnected]);

  useEffect(() => {
    if (roomExists && permissionAllowed && !alreadySetup) {
      console.log(
        "ROOM EXISTS + GOT PERMISSION!!!, going to connect to our socket and create a peer"
      );


      socket.connect();
      const myPeer = new Peer({
        // host: "/",
        // port: "3001",
      });

      myPeer.on("close", () => {
        // TODO: show "connection lost" message to user
        console.error("peer closed!!!");
      });

      myPeer.on("disconnected", (currentId) => {
        // TODO: show "connection lost" message to user
        console.error("peer disconnected!!!");
      });

      myPeer.on("error", (err) => {
        // TODO: show "connection lost" message to user
        console.error(err);
      });

      myPeer.on("open", (id) => {
        // add my video stream to video grid
        addVideoStream(id, myVideo, localMediaStream);
        setCurrentPeerId(id);
        setIsReady(true);
      });

      myPeer.on("call", (call) => {
        peers[call.peer] = call;
        setParticipants(peers);
        console.log("going to answer call from: ", call.peer);
        call.answer(localMediaStream);
        const video = document.createElement("video");

        call.on("error", (error) => {
          console.log(error);
        });

        call.on("stream", (userVideoStream) => {
          console.log("received stream from: ", call.peer, userVideoStream);
          if (!callStreams[call.peer]) {
            addVideoStream(call.peer, video, userVideoStream);
            callStreams[call.peer] = userVideoStream;
          }
        });

        call.on("close", () => {
          video.remove();
        });

        // TODO: this is not tested but it should have fixed a bug
        peers[call.peer] = call;
        setParticipants(peers);
      });

      socket.on("user-connected", (userId) => {
        console.log("user connected to this room with userId:", userId);
        // TODO: if that problem occurs again just add a 1s delay
        // https://stackoverflow.com/questions/66937384/peer-oncalll-is-never-being-called
        // setTimeout(() => connectToNewUser(userId, localMediaStream), 1000);
        connectToNewUser(userId, localMediaStream);
      });

      socket.on("user-disconnected", (userId) => {
        console.warn("user disconnected from this room with userId:", userId);
        if (peers[userId]) peers[userId].close();
        setParticipants(peers);
        // TODO: also destroy the user from peers object?
        let videoToDelete = document.getElementById(userId);
        videoToDelete.parentElement.removeChild(videoToDelete);
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
          if (!callStreams[userId]) {
            addVideoStream(userId, video, userVideoStream);
            callStreams[userId] = userVideoStream;
          }
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

      function addVideoStream(userId, video, stream) {
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
        const div = document.createElement("div");
        div.setAttribute("id", userId)
        div.append(video);
        videoGrid.current.append(div);
      }
    }
  }, [roomExists, permissionAllowed]);

  const toggleVideo = () => {
    // TODO: (optional) sometimes toggle doesn't work when connection is lost to socket server idk why
    if (localMediaStream)
      localMediaStream.getVideoTracks()[0].enabled =
        !localMediaStream.getVideoTracks()[0].enabled;
    setVideoEnabled(localMediaStream.getVideoTracks()[0].enabled);
  };

  const toggleMic = () => {
    if (localMediaStream)
      localMediaStream.getAudioTracks()[0].enabled =
        !localMediaStream.getAudioTracks()[0].enabled;
    setAudioEnabled(localMediaStream.getAudioTracks()[0].enabled);
  };

  return loading ? (
    // TODO: style loading better? (optional)
    <div>Loading</div>
  ) : roomExists ? (
    <div className="relative h-screen overflow-hidden bg-zinc-900 px-6 pt-10 md:px-16">
      <Header fullscreen={fullscreen} setSideMenuOpen={setSideMenuOpen} />
      <SideMenu onChange={e => {console.log(e)}} sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
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
