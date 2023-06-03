import { useState, useEffect } from "react";

import peopleIcon from "../../Assets/Icons/people.svg";
import peopleFillIcon from "../../Assets/Icons/people-fill.svg";
import chatIcon from "../../Assets/Icons/chat-square.svg";
import chatFillIcon from "../../Assets/Icons/chat-square-fill.svg";
import crossIcon from "../../Assets/Icons/cross.svg";
import sendIcon from "../../Assets/Icons/send.png";
import profile from "../../Assets/Avatars/avatar02.png";
import { useSocketContext } from "../../hooks/useSocketContext";

import Chat from "./Chat";
import Participants from "./Participants";

export default function ({
  sideMenuOpen,
  setSideMenuOpen,
  participantArr,
  messageArr,
  setMessageArr,
}) {
  const [chatDisplayed, setChatDisplayed] = useState(false);

  return (
    <div
      className={`${
        sideMenuOpen ? "right-0" : "-right-full"
      } absolute top-0 z-10 h-screen w-full rounded-l-lg border bg-slate-200 px-6 pt-10 transition-all sm:w-[400px]`}
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
        {chatDisplayed ? (
          <Chat messageArr={messageArr} setMessageArr={setMessageArr} />
        ) : (
          <Participants participantArr={participantArr} />
        )}
      </div>
    </div>
  );
}
