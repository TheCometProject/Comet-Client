import { useState, useEffect } from "react";

import peopleIcon from "../../Assets/Icons/people.svg";
import peopleFillIcon from "../../Assets/Icons/people-fill.svg";
import chatIcon from "../../Assets/Icons/chat-square.svg";
import chatFillIcon from "../../Assets/Icons/chat-square-fill.svg";
import crossIcon from "../../Assets/Icons/cross.svg";
import { useSocketContext } from "../../hooks/useSocketContext";

export default function ({ sideMenuOpen, setSideMenuOpen, alreadySetup }) {
  const { socket, socketConnected, setSocketConnected } = useSocketContext();

  const [chatDisplayed, setChatDisplayed] = useState(false);
  const [msg, setMsg] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", msg);
    setMsg("");
  };

  useEffect(() => {
    if (alreadySetup && socketConnected) {
      socket.on("message", (msg) => {
        console.warn(`RECEIVED MSG ${msg}`);
      });
    }
  }, [socketConnected, alreadySetup]);

  return (
    <div
      className={`${
        sideMenuOpen ? "right-0" : "-right-full"
      } absolute top-0 z-10 h-screen w-full rounded-l-2xl bg-slate-200 px-6 pt-10 transition-all sm:w-[400px]`}
    >
      <div className="flex items-center justify-between border-b-[1px] border-slate-400 pb-4">
        <div className="flex gap-2">
          <button onClick={() => setSideMenuOpen(() => false)}>
            <img className="w-5" src={crossIcon} alt="" />
          </button>
          <p className="text-2xl font-semibold text-slate-700">
            {chatDisplayed ? "Chat" : "Participants"}
          </p>
        </div>
        <div className="relative flex h-8 w-32 justify-between rounded-full bg-slate-300">
          <div
            className={`absolute bottom-0 top-0 w-1/2 rounded-full bg-blue-300 transition-all duration-200 ${
              chatDisplayed ? "left-0" : "left-1/2"
            }`}
          ></div>
          <div
            className="z-10 flex basis-1/2 cursor-pointer items-center justify-center"
            onClick={() => setChatDisplayed(() => true)}
          >
            <input
              // TODO: handle onChange
              onChange={(e) => {}}
              className="hidden"
              type="radio"
              name="sideMenuToggle"
              id="chat"
              checked={chatDisplayed}
            />
            <label className="pointer-events-none" htmlFor="chat">
              <img src={chatDisplayed ? chatFillIcon : chatIcon} alt="" />
            </label>
          </div>
          <div
            className="z-10 flex basis-1/2 cursor-pointer items-center justify-center"
            onClick={() => setChatDisplayed(() => false)}
          >
            <input
              // TODO: handle onChange
              onChange={(e) => {}}
              className="hidden"
              type="radio"
              name="sideMenuToggle"
              id="participants"
              checked={!chatDisplayed}
            />
            <label className="pointer-events-none" htmlFor="participants">
              <img src={chatDisplayed ? peopleIcon : peopleFillIcon} alt="" />
            </label>
          </div>
        </div>
      </div>
      <div>
        {/* CHAT/PARTICIPANTS HERE */}
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button onClick={sendMessage}>SEND NUDES</button>
      </div>
    </div>
  );
}
