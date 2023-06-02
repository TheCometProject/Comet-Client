import { useState } from "react";
import camera from "../../Assets/Icons/Button camera.svg";
import keyboard from "../../Assets/Icons/Keyboard.svg";
import heroimg from "../../Assets/Images/image 3.png";

export default function () {

  const [roomID, setRoomId] = useState("");

  function handleChange(e){
    setRoomId(()=>e.target.value);
  }

  return (
    <section id="Hero" className="flex h-min justify-between px-20 pb-48 pt-36">
      <div className="w-1/2">
        <h1 className="mb-8 text-6xl font-bold leading-[76px] text-slate-700">
          We connect people, We create links
          <span className="text-blue-700">_</span>
        </h1>
        <p className="mb-8 text-xl text-slate-600">
          Easily schedule and join meetings, share your screen, and collaborate
          with your team.
        </p>
        <div className="flex gap-2">
          <button className="button-solid">
            <img
              className="mx-2 inline w-4 fill-slate-50"
              src={camera}
              alt="camera icon"
            />
            Create a space
          </button>
          <div className="relative">
            <img className="absolute w-6 top-1/2 -translate-y-1/2 left-4" src={keyboard} alt="" />
            <input
              onChange={handleChange}
              type="text"
              className="button-outlined placeholder:text-blue-700 !pl-12 !pr-0"
              placeholder="Enter the space code"
              value={roomID}
            />
          </div>
          <button className="button-invisible">Join</button>
        </div>
      </div>
      <div className=" w-1/2">
        <img
          className="hero-img | ml-auto aspect-auto h-full"
          src={heroimg}
          alt=""
        />
      </div>
    </section>
  );
}
