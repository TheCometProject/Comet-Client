import React, { useState, useEffect, useRef } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSocketContext } from "../hooks/useSocketContext";
import Loading from "../components/MeetingRoom/Loading";
import { API_URL } from "../constants";

import Peer from "peerjs";

import ErrorComponent from "../components/Error";
import MeetingComponent from "../components/MeetingRoom/MeetingComponent";
import SetupComponent from "../components/MeetingRoom/SetupComponent";

const MeetingRoom = () => {
  const { user } = useAuthContext();
  const { socket, socketConnected, setSocketConnected } = useSocketContext();
  const [peerInstance, setPeerInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // CONTROLS+UI STATES:
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [fullscreen, setFullScreen] = useState(false);
  const [settingUp, setSettingUp] = useState(true);
  const [callEnded, setCallEnded] = useState(false);

  const { roomId } = useParams();
  const [roomExists, setRoomExists] = useState(false);
  const [roomTitle, setRoomTitle] = useState("");
  const videoGrid = useRef();
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  let peers = {};
  let callStreams = [];
  const [permissionAllowed, setPermissionAllowed] = useState(false);
  const [localMediaStream, setLocalMediaStream] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [currentPeerId, setCurrentPeerId] = useState("");
  const [alreadySetup, setAlreadySetup] = useState(false);
  const [error, setError] = useState(false);
  const [messageArr, setMessageArr] = useState([]);
  const [participantArr, setParticipantArr] = useState([
    {
      userId: "",
      name: user.fullName,
      profilePic: user.profilePic,
    },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  function addParticipant(userId, name, profilePic) {
    setParticipantArr((prev) => {
      const temp = [...prev];
      temp.push({
        userId: userId,
        name: name,
        profilePic: profilePic,
      });
      return temp;
    });
  }

  useEffect(() => {
    if (localMediaStream) {
      localMediaStream.getTracks().forEach(function (track) {
        track.enabled = false;
        track.stop();
      });
    }

    if (socket) {
      socket.disconnect();
      socket.offAny();
      socket.offAnyOutgoing();
    }

    if (peerInstance) peerInstance.destroy();

    if (callEnded) {
      navigate(`/LeftMeeting/${roomId}`);
    }
  }, [error, callEnded]);

  useEffect(() => {
    if (roomExists) {
      async function requestTitle() {
        const res = await fetch(`${API_URL}/api/v1/rooms/${roomId}`, {
          method: "GET",
        });
        const json = await res.json();
        setRoomTitle(json.room.roomTitle);
      }
      requestTitle();
    }
  }, [roomExists]);

  // check if room exists
  useEffect(() => {
    async function checkRoomExists() {
      if (user) {
        const response = await fetch(`${API_URL}/api/v1/rooms/${roomId}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });

        const json = await response.json();
        if (json && json.message == "Room exists") {
          setRoomExists(true);
        }
      }
      setLoading(false);
    }
    checkRoomExists();
  }, []);

  // request user media
  useEffect(() => {
    if (roomExists) {
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
    }
  }, [roomExists]);

  // send "ready" event when peer finishes setting up
  useEffect(() => {
    if (socketConnected && isReady && !alreadySetup) {
      console.log(
        `peer connection opened with id ${currentPeerId}, going to emit join-room event now`
      );
      socket.emit("join-room", roomId, {
        userId: currentPeerId,
        fullName: user.fullName,
        profilePic: user.profilePic,
      });
      console.log("emitted join-room, only NOW can u send a ready event");
      socket.emit("ready");
      setAlreadySetup(true);
    }
  }, [isReady, socketConnected]);

  // fixes hot reload bug
  // FEATURE: now even if the socket connection is lost, existing peers will remain connected
  // and it will keep trying to connect to the socket untill it does sosuccessfully
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
    if (roomExists && permissionAllowed && !alreadySetup && !settingUp) {
      console.log(
        "ROOM EXISTS + GOT PERMISSION!!!, going to connect to our socket and create a peer"
      );

      socket.connect();
      const myPeer = new Peer({
        host: "/",
        port: "3001",
      });
      setPeerInstance(myPeer);

      myPeer.on("close", () => {
        console.error("peer closed!!!");
        setErrorMessage("Peer connection lost!");
        setError(true);
      });

      myPeer.on("disconnected", (currentId) => {
        console.error("peer disconnected!!!");
        setErrorMessage("Peer connection lost!");
        setError(true);
      });

      myPeer.on("error", (err) => {
        console.error(err);
        setErrorMessage("Peer connection lost!");
        setError(true);
      });

      myPeer.on("open", (id) => {
        // add my video stream to video grid
        addVideoStream(id, myVideo, localMediaStream);
        setCurrentPeerId(id);
        setIsReady(true);
      });

      myPeer.on("call", (call) => {
        peers[call.peer] = call;
        console.log("going to answer call from: ", call.peer);
        call.answer(localMediaStream);
        const video = document.createElement("video");

        addParticipant(call.peer, call.metadata.fullName, user.profilePic);

        call.on("error", (error) => {
          console.log(error);
          setErrorMessage("An unknown error has occured during call");
          setError(true);
        });

        call.on("stream", (userVideoStream) => {
          if (!callStreams[call.peer]) {
            addVideoStream(call.peer, video, userVideoStream);
            callStreams[call.peer] = userVideoStream;
          }
        });

        call.on("close", () => {
          video.remove();
        });

        peers[call.peer] = call;
      });

      socket.on("user-connected", (user) => {
        console.log("user connected to this room with userId:", user);
        addParticipant(user.userId, user.fullName, user.profilePic);
        connectToNewUser(user.userId, localMediaStream);
      });

      socket.on("user-disconnected", (userId) => {
        console.warn("user disconnected from this room with userId:", userId);
        setParticipantArr(participantArr.filter((user) => user != userId));
        if (peers[userId]) peers[userId].close();
        // TODO: also destroy the user from peers object?
        let videoToDelete = document.getElementById(userId);
        videoToDelete.parentElement.removeChild(videoToDelete);
      });

      socket.on("message", (msg, user) => {
        addMessage({
          sender: user.fullName,
          profilePic: user.profilePic,
          message: msg,
          self: false,
        });
      });

      function connectToNewUser(userId, stream) {
        console.log("going to call peer: ", userId);
        const call = myPeer.call(userId, stream, {
          metadata: {
            fullName: user.fullName,
            profilePic: user.profilePic,
          },
        });
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
        div.setAttribute("id", userId);
        div.addEventListener("click", ()=>{
          div.classList.toggle("enlarged");
        })
        div.append(video);
        videoGrid.current.append(div);
      }
    }
  }, [roomExists, permissionAllowed, settingUp]);

  const addMessage = (obj) => {
    setMessageArr((prev) => {
      const temp = [...prev];
      temp.push(obj);
      return temp;
    });
  };

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

  function getComponent() {
    if (error) {
      return <ErrorComponent message={errorMessage} />;
    } else if (loading || !localMediaStream) {
      return <Loading />;
    } else {
      if (!roomExists) {
        return (
          <ErrorComponent message="The link you entered does not lead to a valid room." />
        );
      } else {
        if (settingUp) {
          return (
            <SetupComponent
              setSettingUp={setSettingUp}
              roomTitle={roomTitle}
              localMediaStream={localMediaStream}
              toggleVideo={toggleVideo}
              toggleMic={toggleMic}
              videoEnabled={videoEnabled}
              audioEnabled={audioEnabled}
            />
          );
        } else {
          return (
            <MeetingComponent
              roomId={roomId}
              roomTitle={roomTitle}
              videoGrid={videoGrid}
              fullscreen={fullscreen}
              setFullScreen={setFullScreen}
              videoEnabled={videoEnabled}
              toggleVideo={toggleVideo}
              audioEnabled={audioEnabled}
              toggleMic={toggleMic}
              setCallEnded={setCallEnded}
              sideMenuOpen={sideMenuOpen}
              setSideMenuOpen={setSideMenuOpen}
              participantArr={participantArr}
              messageArr={messageArr}
              setMessageArr={setMessageArr}
            />
          );
        }
      }
    }
  }

  return getComponent();
};

export default MeetingRoom;
