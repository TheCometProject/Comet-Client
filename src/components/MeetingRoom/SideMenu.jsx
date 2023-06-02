import { useState, useEffect } from "react";

import peopleIcon from "../../Assets/Icons/people.svg";
import peopleFillIcon from "../../Assets/Icons/people-fill.svg";
import chatIcon from "../../Assets/Icons/chat-square.svg";
import chatFillIcon from "../../Assets/Icons/chat-square-fill.svg";
import crossIcon from "../../Assets/Icons/cross.svg";
import sendIcon from "../../Assets/Icons/send.png";
import profile from "../../Assets/Avatars/avatar02.png";
import { useSocketContext } from "../../hooks/useSocketContext";

export default function ({ sideMenuOpen, setSideMenuOpen, alreadySetup }) {
  const { socket, socketConnected, setSocketConnected } = useSocketContext();

  const [chatDisplayed, setChatDisplayed] = useState(false);
  const [msg, setMsg] = useState("");

  const [messageArr, setMessageArr] = useState([
    {
      sender: "Badie alili",
      message: "Job",
      profilePic: profile,
      self: true,
    },
    {
      sender: "Ayoub salhi",
      message: "Wah",
      profilePic: profile,
      self: false,
    },
    {
      sender: "Badie alili",
      message: "Nikek?",
      profilePic: profile,
      self: true,
    },
    {
      sender: "Ayoub salhi",
      message: "Yes please",
      profilePic: profile,
      self: false,
    },
  ]);

  const addMessage = (obj) => {
    setMessageArr([...messageArr, obj]);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(msg);
    socket.emit("message", msg);
    addMessage({
      sender: "nemi",
      message: msg,
      profilePic: profile,
      self: true,
    })
    setMsg("");
  };

  useEffect(() => {
    if (alreadySetup && socketConnected) {
      socket.on("message", (msg) => {
        console.warn(`RECEIVED MSG ${msg}`);
        addMessage({
          sender: "LOL",
          message: msg,
          profilePic: profile,
          self: false,
        })
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
        <div className="absolute bottom-20 left-0 right-0 flex h-[calc(100vh-169px)] flex-col justify-end overflow-y-auto px-6">
          {messageArr.map(({ sender, self, message, profilePic }, i) => {
            return (
              <div
                key={i}
                className={`flex w-fit max-w-[80%] flex-row items-end gap-2 ${
                  self && "ml-auto"
                }`}
              >
                <img
                  className={`${self && "hidden"} w-8`}
                  src={profilePic}
                  alt=""
                />
                <div>
                  <div
                    className={`mb-1 ml-2 w-fit text-xs font-semibold text-slate-900 ${
                      self && "ml-auto mr-2"
                    }`}
                  >
                    {self ? "You" : sender}
                  </div>
                  <div
                    className={`${
                      self
                        ? "rounded-br-none bg-blue-700 text-slate-50"
                        : "rounded-bl-none bg-slate-50 text-slate-900"
                    } w-fit rounded-2xl px-3 py-2 `}
                  >
                    <p className="font-light">{message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEND MESSAGE INPUT */}
        <div className="absolute bottom-4 left-0 right-0 px-6">
          <input
            className="mx-auto block h-12 w-full rounded-xl px-4"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Write your message here..."
          />
          <button
            className="absolute right-[calc(5%+1rem)] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={sendMessage}
          >
            <img src={sendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
