import clockIcon from "../../Assets/Icons/clock.svg";
import recordIcon from "../../Assets/Icons/record-circle-fill.svg";
import peopleIcon from "../../Assets/Icons/people.svg";
import hamburgerIcon from "../../Assets/Icons/menu-burger.svg";
import { API_URL } from "../../constants";
import { useEffect, useState } from "react";

export default function ({ fullscreen, setSideMenuOpen, roomTitle, roomId, participantsCount }) {
  const [meetingTime, setMeetingTime] = useState(new Date(0));
  let createdAt;
  const seconds = meetingTime.getSeconds().toString();
  const minutes = meetingTime.getMinutes().toString();
  const hours = meetingTime.getHours().toString();

  useEffect(() => {
    async function requestStartingTime() {
      const res = await fetch(`${API_URL}/api/v1/rooms/${roomId}`, {
        method: "GET",
      });
      const json = await res.json();

      createdAt = new Date(json.room.createdAt);
      const difference = Date.now() - createdAt.getTime();
      setMeetingTime(new Date(difference));
    }
    requestStartingTime();
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      setMeetingTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <header
      className={`relative pb-6 transition-all ${
        fullscreen ? "-top-full" : "top-0"
      }`}
    >
      <div className="flex items-start justify-between">
        <h1 className="mb-8 text-4xl font-bold text-slate-900">
          {roomTitle}
          <span className="text-blue-700">_</span>
        </h1>
        <button onClick={() => setSideMenuOpen(() => true)}>
          <img className="mt-2 w-6" src={hamburgerIcon} alt="" />
        </button>
      </div>
      {/* PARAMETERS */}
      <div className="flex flex-wrap items-center justify-between">
        <div className="mb-2 mr-2 flex flex-wrap items-center gap-2 sm:gap-8">
          <div className="flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1 w-36">
            <img src={clockIcon} alt="" />
            <p className="text-xs text-slate-900">
              Meet &nbsp;
              {!hours.length ? "" : hours.length == 1 ? "0" + hours : hours}:
              {minutes.length > 1 ? minutes : "0" + minutes}:
              {seconds.length > 1 ? seconds : "0" + seconds}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-red-200 px-4 py-1">
            <img src={recordIcon} alt="" />
            <p className="text-xs text-red-700">Recording 10:12</p>
          </div>
        </div>
        <div className="mb-2 flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1">
          <img src={peopleIcon} alt="" />
          <p className="text-xs text-slate-900">{participantsCount}</p>
        </div>
      </div>
    </header>
  );
}
