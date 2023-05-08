import camera from "../../pages/Assets/Icons/Button camera.svg";

export default function () {
  return (
    <section className="px-20 pt-16 pb-32">
      <div>
        <h1 className="text-6xl font-bold text-slate-700 leading-[76px]">We connect people, We create links<span className="text-blue-700">_</span></h1>
        <p className="text-xl text-slate-600">Easily schedule and join meetings, share your screen, and collaborate with your team.</p>
        <div>
            <button className="button-solid"><img className="inline w-8 fill-slate-50" src={camera} alt="camera icon" /> Create a space</button>
            <button className="button-outlined">Enter the space code</button>
            <button className="button-invisible">Join</button>
        </div>
      </div>
    </section>
  );
}
