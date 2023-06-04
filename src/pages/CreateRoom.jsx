import { useNavigate } from "react-router-dom";
import { generate as uuid } from "short-uuid";

import { useEffect, useState } from "react";
import Logo from "../Assets/Logo.png";
import micMuted from "../Assets/Icons/mic-mute.svg";
import mic from "../Assets/Icons/mic.svg";
import camera from "../Assets/Icons/camera-video.svg";
import cameraOff from "../Assets/Icons/camera-video-off.svg";
import copyIcon from "../Assets/Icons/copy.svg";

import { API_URL } from "../constants";

export default function () {
  const [roomName, setRoomName] = useState("");
  const [micEnabled, setMicEnabled] = useState(true);
  const [roomId, setRoomId] = useState("");
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
  setRoomId(()=>uuid());
  }, [])

  async function copyText() {
    try {
      await navigator.clipboard.writeText(roomId);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  }

  async function createRoom(e) {
    e.preventDefault();
    const data = {
      author: "badie",
      roomId: roomId,
      roomTitle: roomName,
    };
    const res = await fetch(`${API_URL}/api/v1/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    console.log(json);
    if (json.success) {
      navigate(`/meeting/${roomId}`);
    }
  }

  return (
    <form>
      <header className="px-8 pb-2 pt-4 sm:px-20">
        <img className="w-32" src={Logo} alt="" />
      </header>
      <main className="h-full">
        <div
          className={`${
            copied && "pb-6"
          } mx-auto mt-[15vh] w-[370px] rounded-md border-2 border-slate-900 px-8 pt-6 transition-all duration-100`}
        >
          <div className="mb-6">
            <p className="mb-4 text-xl font-semibold text-slate-900">
              Space name:
            </p>
            <input
              className="button-outlined !w-full !text-slate-900"
              type="text"
              placeholder="UI UX Team meeting"
              value={roomName}
              onChange={(e) => setRoomName(() => e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <p className=" text-xl font-semibold text-slate-900">
              roomId: <span className="text-blue-700">{roomId}</span>
            </p>
            <img
              onClick={copyText}
              className="w-6 cursor-pointer"
              src={copyIcon}
              alt=""
            />
          </div>
          <div className="py-4">
            <button
              onClick={createRoom}
              className="button-solid mx-auto whitespace-nowrap !w-full"
              type="submit"
            >
              Create space
            </button>
          </div>
          <p
            className={`${
              !copied && "opacity-0 "
            } text-center text-xl font-semibold text-blue-700 transition-opacity delay-100`}
          >
            Copied!
          </p>
        </div>
      </main>
    </form>
  );
}