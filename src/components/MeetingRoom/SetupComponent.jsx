import { useRef, useEffect } from "react";
import {Link} from "react-router-dom"
import cameraIcon from "../../Assets/Icons/camera-video.svg";
import cameraOffIcon from "../../Assets/Icons/camera-video-off.svg";
import micIcon from "../../Assets/Icons/mic.svg";
import micMutedIcon from "../../Assets/Icons/mic-mute.svg";

export default function ({
  setSettingUp,
  localMediaStream,
  toggleVideo,
  toggleMic,
  videoEnabled,
  audioEnabled
}) {
  const myVideo = useRef();
  myVideo.muted = true;
  useEffect(() => {
    if (localMediaStream) {
      console.log("ndjend");
      myVideo.current.srcObject = localMediaStream;
      myVideo.current.addEventListener("loadedmetadata", () => {
        myVideo.current.play();
      });
    }
  }, [localMediaStream])
  
  return (
    <div className="flex items-center overflow-y-hidden px-8 min-h-screen">
      <div className="flex w-full">
        <div className="pb-1/2 relative basis-1/2 z h-fit -scale-x-100   rounded-md border border-blue-700 md:block">
          <video
            className="aspect-[16/9] h-full w-full object-cover"
            ref={myVideo}
            src=""
          ></video>
        </div>
        <div className="mx-auto flex flex-col items-center justify-between gap-4 lg:py-4 lg:pb-8">
          <div className="text-center">
            <h1 className="mb-4 text-3xl text-slate-900">Ready to join?</h1>
            <p>
              Space Name:{" "}
              <span className="text-blue-700">Front End Dev Is Cool</span>
            </p>
          </div>
          <div className="pb-1/2 relative h-fit w-[80vw] -scale-x-100 rounded-md border border-blue-700 md:hidden">
            <video
              className="aspect-[16/9] h-full w-full object-cover"
              ref={myVideo}
              src=""
            ></video>
          </div>
          <div className="mx-auto flex h-fit w-fit gap-4">
            <div className="flex gap-2">
              <button
                className=" flex items-center justify-center rounded-md border border-blue-700 bg-blue-100 p-4"
                onClick={toggleVideo}
              >
                <img
                  className="w-6"
                  src={videoEnabled ? cameraIcon : cameraOffIcon}
                  alt=""
                />
              </button>
              <button
                className="flex items-center justify-center rounded-md border border-blue-700 bg-blue-100 p-4"
                onClick={toggleMic}
              >
                <img
                  className="w-6"
                  src={audioEnabled ? micIcon : micMutedIcon}
                  alt=""
                />
              </button>
            </div>
            <button onClick={() => setSettingUp(false)} className="button-solid">
              Join space
            </button>
          </div>
          <Link to="/">
            <p className="text-xl text-blue-700">Go back to home page</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
