import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import cameraIcon from "../Assets/Icons/camera-video.svg";
import cameraOffIcon from "../Assets/Icons/camera-video-off.svg";
import micIcon from "../Assets/Icons/mic.svg";
import micMutedIcon from "../Assets/Icons/mic-mute.svg";

export default function ({videoEnabled, audioEnabled, setAudioEnabled, setVideoEnabled, setReadyToJoin}) {
  const [permissionAllowed, setPermissionAllowed] = useState(false);
  const [localMediaStream, setLocalMediaStream] = useState(null);

  const localVideoRef = useRef();

  function handleClick() {
    setReadyToJoin(true);
  }

  const toggleVideo = () => {
    // TODO: (optional) sometimes toggle doesn't work when connection is lost to socket server idk why
    if (localMediaStream)
      localMediaStream.getVideoTracks()[0].enabled =
        !localMediaStream.getVideoTracks()[0].enabled;
    setVideoEnabled(localMediaStream.getVideoTracks()[0].enabled);
  };

  const toggleMic = () => {
    if (localMediaStream)
      localMediaStream.getAudioTracks()[0].enabled =
        !localMediaStream.getAudioTracks()[0].enabled;
    setAudioEnabled(localMediaStream.getAudioTracks()[0].enabled);
  };

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true, echoCancellation: true })
    .then((stream) => {
      if (!stream) console.warn("wtf bro? stream should never be null");

      stream.getVideoTracks()[0].enabled = videoEnabled;
      stream.getAudioTracks()[0].enabled = audioEnabled;

    addVideoStream(localVideoRef, stream);

      // used to toggle video/mic
      // setLocalMediaStream(stream);
      // setPermissionAllowed(true);
    })
    .catch((err) => {
      console.error("error while asking for video permission:", err);
      setPermissionAllowed(false);
    });

    function addVideoStream(video, stream) {
      // this is because sometimes we pass a react Ref
      // but sometimes we pass a normal HTMLVideoElement
      video.current.srcObject = stream;
      video.current.addEventListener("loadedmetadata", () => {
        video.current.play();
      });
      // const div = document.createElement("div");
      // div.setAttribute("id", userId);
      // div.append(video);
      // localVideoRef.current.append(div);
    }
  return (
    <div>
      <div>
        <video ref={localVideoRef} src=""></video>
      </div>
      <div>
        <button onClick={handleClick} className="button-solid">Join space</button>
        <button onClick={toggleVideo}>
          <img src={videoEnabled?cameraIcon:cameraOffIcon} alt="" />
        </button>
        <button onClick={toggleMic}>
          <img src={videoEnabled?micIcon:micMutedIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
