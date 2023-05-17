import camera from "../../pages/Assets/Icons/Button camera.svg";
import keyboard from "../../pages/Assets/Icons/Keyboard.svg"
import heroimg from "../../pages/Assets/Images/image 3.png"

export default function () {
  return (
    <section id="Hero" className="px-20 pt-24 pb-48 flex justify-between h-min">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold text-slate-700 leading-[76px] mb-8">
          We connect people, We create links
          <span className="text-blue-700">_</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Easily schedule and join meetings, share your screen, and collaborate
          with your team.
        </p>
        <div className="flex gap-2">
          <button className="button-solid">
            <img
              className="inline mx-2 w-4 fill-slate-50"
              src={camera}
              alt="camera icon"
            />{" "}
            Create a space
          </button>
          <button className="button-outlined"> <img className="inline mx-2" src={keyboard} alt="" /> Enter the space code</button>
          <button className="button-invisible">Join</button>
        </div>
      </div>
      <div className=" w-1/2">
        <img className="hero-img | ml-auto h-full aspect-auto" src={heroimg} alt="" />
      </div>
    </section>
  );
}
