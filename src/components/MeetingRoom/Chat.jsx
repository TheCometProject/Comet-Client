import { useState, useEffect } from "react";
import { useSocketContext } from "../../hooks/useSocketContext";

import sendIcon from "../../Assets/Icons/send.png";
import profile from "../../Assets/Avatars/avatar02.png";

export default function ({alreadySetup}) {
  const { socket, socketConnected, setSocketConnected } = useSocketContext();

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
    });
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
        });
      });
    }
  }, [socketConnected, alreadySetup]);

  return (
    <div>
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
      <form
        onSubmit={sendMessage}
        className="absolute bottom-4 left-0 right-0 px-6"
      >
        <input
          className="mx-auto block h-12 w-full rounded-xl px-4"
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Write your message here..."
        />
        <button
          className="absolute right-[calc(5%+1rem)] top-1/2 -translate-y-1/2 cursor-pointer"
          type="submit"
        >
          <img src={sendIcon} />
        </button>
      </form>
    </div>
  );
}
