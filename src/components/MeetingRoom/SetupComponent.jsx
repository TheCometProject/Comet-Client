import { useRef, useEffect } from "react";
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
      myVideo.current.srcObject = localMediaStream;
      myVideo.current.addEventListener("loadedmetadata", () => {
        myVideo.current.play();
      });
    }
  }, [localMediaStream])
  
  return (
    <div>
      <div>
        <video ref={myVideo}></video>
      </div>
      <div>
        <button onClick={() => setSettingUp(false)} className="button-solid">
          Join space
        </button>
        <button onClick={toggleVideo}>
          <img src={videoEnabled ? cameraIcon : cameraOffIcon} alt="" />
        </button>
        <button onClick={toggleMic}>
          <img src={audioEnabled ? micIcon : micMutedIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
