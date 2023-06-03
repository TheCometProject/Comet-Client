import SideMenu from "./SideMenu";
import Actions from "./Actions";
import Header from "./Header";

export default function ({
  roomId,
  roomTitle,
  videoGrid,

  fullscreen,
  setFullScreen,
  videoEnabled,
  toggleVideo,
  audioEnabled,
  toggleMic,
  setCallEnded,

  sideMenuOpen,
  setSideMenuOpen,

  participantArr,

  messageArr,
  setMessageArr,
}) {
  return (
    <div className="relative h-screen overflow-hidden bg-slate-50 px-6 pt-10 md:px-16">
      <Header
        roomId={roomId}
        fullscreen={fullscreen}
        setSideMenuOpen={setSideMenuOpen}
        roomTitle={roomTitle}
        participantsCount={participantArr.length}
      />
      <SideMenu
        onChange={(e) => {
          console.log(e);
        }}
        sideMenuOpen={sideMenuOpen}
        setSideMenuOpen={setSideMenuOpen}
        participantArr={participantArr}
        messageArr={messageArr}
        setMessageArr={setMessageArr}
      />
      <div
        className={`overflow-auto pb-12 transition-all md:pb-[0vh] ${
          fullscreen ? "-mt-32 h-screen" : "mt-0 h-[calc(100%-12rem)]"
        }`}
      >
        <div
          id="video-grid"
          ref={videoGrid}
          className=" -mr-4 flex h-fit w-full flex-wrap place-content-start justify-start gap-4"
        ></div>
      </div>
      <Actions
        sideMenuOpen={sideMenuOpen}
        fullScreen={fullscreen}
        setFullScreen={setFullScreen}
        videoEnabled={videoEnabled}
        toggleVideo={toggleVideo}
        audioEnabled={audioEnabled}
        toggleMic={toggleMic}
        setCallEnded={setCallEnded}
      />
    </div>
  );
}
