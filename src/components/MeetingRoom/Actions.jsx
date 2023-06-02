import cameraIcon from "../../Assets/Icons/camera-video.svg";
import cameraOffIcon from "../../Assets/Icons/camera-video-off.svg";
import micIcon from "../../Assets/Icons/mic.svg";
import micMutedIcon from "../../Assets/Icons/mic-mute.svg";
import fullScreenIcon from "../../Assets/Icons/fullscreen.svg";
import fullScreenExitIcon from "../../Assets/Icons/fullscreen-exit.svg";
import shareScreenIcon from "../../Assets/Icons/box-arrow-up.svg";
import hangUpIcon from "../../Assets/Icons/telephone-fill.svg";

export default function ({
  sideMenuOpen,
  fullScreen,
  setFullScreen,
  videoEnabled,
  toggleVideo,
  audioEnabled,
  toggleMic,
}) {
  function handleFullScreen() {
    setFullScreen(() => !fullScreen);
  }

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 pb-4 pt-12 transition-all ${
        sideMenuOpen
          ? "-bottom-full"
          : fullScreen
          ? "-bottom-32 hover:bottom-0"
          : "bottom-0"
      } `}
    >
      <div className="mx-auto flex w-fit gap-2 rounded-full bg-blue-900 bg-opacity-30 px-6 py-4">
        <div
          className=" flex h-12 w-12 items-center justify-center rounded-full bg-blue-300"
          onClick={toggleVideo}
        >
          <img
            className="w-4"
            src={videoEnabled ? cameraIcon :cameraOffIcon}
            alt=""
          />
        </div>
        <div
          className=" flex h-12 w-12 items-center justify-center rounded-full bg-blue-300"
          onClick={toggleMic}
        >
          <img className="w-4" src={audioEnabled ? micIcon : micMutedIcon} alt="" />
        </div>
        <div
          className=" flex h-12 w-12 items-center justify-center rounded-full bg-blue-300"
          onClick={handleFullScreen}
        >
          <img
            className="w-4"
            src={!fullScreen ? fullScreenIcon : fullScreenExitIcon}
            alt=""
          />
        </div>
        <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-blue-300">
          <img className="w-4" src={shareScreenIcon} alt="" />
        </div>
        <div className=" flex h-12 w-16 items-center justify-center rounded-full bg-red-300">
          <img className="w-6" src={hangUpIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
