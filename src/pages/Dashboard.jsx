import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import heroimg from "../Assets/Images/image 3.png";
import img1 from "../Assets/Logo.png";
import prfl from "../Assets/profilsvg.svg";
import camera from "../Assets/Icons/Button camera.svg";
import keyboard from "../Assets/Icons/Keyboard.svg";
import { API_URL } from "../constants";

const Dashboard = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setRoomId(() => e.target.value);
  }

  async function handleJoinMeeting() {
    const res = await fetch(`${API_URL}/api/v1/rooms/${roomId}`);
    const json = await res.json();
    if(json.message == "Room exists"){
      navigate("/setup");
    } else {
      navigate("/error")
    }
  }

  return (
    <div className="h-full w-full bg-slate-50">
      <div
        id="navbar"
        className="fixed left-0 top-0 z-10 flex w-full items-center justify-between px-20 pb-2  pt-4"
      >
        <div className="">
          <Link to="/">
            <img className="w-32" src={img1} alt="Comet Logo" />
          </Link>
        </div>
        <div className="-mr-2 mt-4 flex justify-end">
          <img
            src={prfl}
            alt="Profile Picture"
            className="l -mt-2 mr-4 h-10 w-10 rounded-full"
          />
        </div>
      </div>
      <section id="hero2" className=" flex px-20 pb-48 pt-36">
        <div className=" w-1/2 items-center md:justify-center ">
          <h1 className=" mb-8  justify-normal text-5xl font-bold leading-[65px]  text-slate-700 sm:items-center sm:text-6xl sm:leading-[65px] md:justify-center md:leading-[76px] lg:text-6xl">
            Experience <br/>
            seamless virtual
            <br /> meetings<span className="text-blue-700">_</span>
          </h1>
          <p className=" mb-8 hidden text-xl leading-[30px] text-slate-600 lg:block">
            Schdule new meetings and manage your existing meetings
            <br /> in one place
          </p>
          <div className=" flex flex-col gap-3  sm:flex-row ">
            <div className=" flex flex-col sm:flex-row">
            <button className="rounded-sm w-auto h-[47px] sm:w-[165px] sm:h-[auto]  bg-blue-700 text-sm text-white">
            <img
              className="  mx-2 inline w-4 fill-slate-50"
              src={camera}
              alt="camera icon"
            />
            Create a space
          </button>
            </div>

            <div className="flex flex-row">
              <div className="relative">
                <img
                  className="sm:auto absolute left-4  top-1/2 w-4 -translate-y-1/2"
                  src={keyboard}
                  alt=""
                />
                <input
                  onChange={handleChange}
                  type="text"
                  className="button-outlined !pl-12  !pr-0 placeholder:text-blue-700"
                  placeholder="Enter the space code"
                  value={roomId}
                />
              </div>
              {/* <Link to="setup"> */}
                <button
                  onClick={handleJoinMeeting}
                  className="button-invisible"
                >
                  Join
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className=" w-1/2">
          <img
            className=" hero-img ml-auto hidden aspect-auto h-full md:block"
            src={heroimg}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
