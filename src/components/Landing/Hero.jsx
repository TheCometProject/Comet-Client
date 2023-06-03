import { useState } from "react";
import camera from "../../Assets/Icons/Button camera.svg";
import keyboard from "../../Assets/Icons/Keyboard.svg";
import heroimg from "../../Assets/Images/image 3.png";

export default function () {
  const [roomID, setRoomId] = useState("");

  function handleChange(e) {
    setRoomId(() => e.target.value);
  }

  return (
    <section
      id="Hero"
      className="flex h-min justify-between px-8 pb-48 pt-36 md:px-20"
    >
      <div className="basis-full md:basis-1/2">
        <h1 className="mb-8 text-center text-6xl font-bold leading-[76px] text-slate-700 md:text-left">
          We connect people, We create links
          <span className="text-blue-700">_</span>
        </h1>
        <p className="mb-8 text-center text-xl text-slate-600 md:text-left">
          Easily schedule and join meetings, share your screen, and collaborate
          with your team.
        </p>
        <div className="flex flex-col gap-2 md:flex-row">
          <button className="button-solid">
            <img
              className="mx-2 inline w-4 fill-slate-50"
              src={camera}
              alt="camera icon"
            />
            Create a space
          </button>
          <div className="flex">
            <div className="relative">
              <img
                className="absolute left-4 top-1/2 w-6 -translate-y-1/2"
                src={keyboard}
                alt=""
              />
              <input
                onChange={handleChange}
                type="text"
                className="button-outlined !pl-12 !pr-0 placeholder:text-blue-700"
                placeholder="Enter the space code"
                value={roomID}
              />
            </div>
            <button className="button-invisible">Join</button>
          </div>
        </div>
      </div>
      <div className=" hidden w-1/2 md:block">
        <img
          className="hero-img | ml-auto aspect-auto h-full"
          src={heroimg}
          alt=""
        />
      </div>
    </section>
  );
}
