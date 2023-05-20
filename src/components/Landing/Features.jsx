import featuresImg1 from "../../pages/Assets/Images/image 4.png";
import featuresImg2 from "../../pages/Assets/Images/image 3.png";
import featuresImg3 from "../../pages/Assets/Images/image 2.png";

import screenIcon from "../../pages/Assets/Icons/Desktop.svg";
import penIcon from "../../pages/Assets/Icons/Pen.svg";
import codeIcon from "../../pages/Assets/Icons/Code.svg";
import cameraIcon from "../../pages/Assets/Icons/Camera.svg";
import recordIcon from "../../pages/Assets/Icons/Record.svg";
import pollIcon from "../../pages/Assets/Icons/Poll.svg";
import notesIcon from "../../pages/Assets/Icons/Notes.svg";

export default function () {
  return (
    <section id="Features" className="px-20 pt-24 pb-48">
      <div className="w-max mx-auto">
        <p className="text-center text-blue-700 text-2xl font-light">
          Our features
        </p>
        <div className="bg-blue-700 h-[2px] rounded-3xl mx-auto w-1/3"></div>
      </div>
      <h2 className="h2 | text-center">All you need in one place</h2>
      <div className="flex flex-col gap-14 mt-24">
        <div className="flex justify-between py-8">
          <img className="" src={featuresImg1} alt="" />
          <div className="ml-6">
            <h3 className="h3">Total security</h3>
            <p className="max-w-xl text-xl font-light ">
            The Total Security feature of our project, TheComet, 
            ensures that your video conferencing experience is protected
             at every level. We understand the importance of maintaining
              the privacy and confidentiality of your meetings,
               discussions, and data, and have implemented comprehensive 
               security measures to provide you with peace of mind.


            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between py-8">
          <img className="" src={featuresImg2} alt="" />
          <div className="mr-6">
            <h3 className="h3">Accessible Everywhere</h3>
            <p className="max-w-xl text-xl font-light">
            It enables seamless access to our video conferencing platform
             from any device and location. Whether on a desktop, laptop,
              tablet, or smartphone, users can connect and collaborate
               effortlessly. With web-based access and dedicated mobile
                apps, participation is possible without software 
                installation. Cloud storage ensures secure access to 
                meeting recordings and documents. Multi-device 
                synchronization allows for easy switching during meetings. 
                Real-time updates keep users informed, promoting a 
                smooth and accessible experience for all.
            </p>
          </div>
        </div>
        <div className="flex justify-between py-8">
          <img className="" src={featuresImg3} alt="" />
          <div className="ml-6">
            <h3 className="h3">Adapted To All situations</h3>
            <p className="max-w-xl text-xl font-light">
            ensures that our video conferencing platform is 
            versatile and capable of meeting diverse needs.
             From small team meetings to large-scale webinars, 
             our platform can accommodate any situation. With 
             customizable settings, users can tailor their virtual
              meeting environment to suit their preferences and
               requirements. Advanced features such as screen sharing,
                recording, and interactive chat enhance collaboration
                 and engagement. Our platform is designed to seamlessly
                  integrate with existing workflows, providing a flexible
                   solution for businesses, educational institutions, 
                   and individuals alike.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-12 pt-48 w-full">
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={screenIcon} alt="" />
          <h4 className="h4 | text-blue-700">Share Your Screen</h4>
          <p>
          you can easily share your screen during video conferences, allowing participants
           to view your presentations, documents, or any other content in real-time.Enhance
            collaboration and engage your audience by showcasing information and visuals directly from your device.
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={penIcon} alt="" />
          <h4 className="h4 | text-blue-700">Draw On Board</h4>
          <p>
          It empowers you to sketch, annotate, and highlight key points directly on a shared virtual whiteboard.
           Collaborate seamlessly with others by illustrating ideas, brainstorming, 
           or visually demonstrating concepts..
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={codeIcon} alt="" />
          <h4 className="h4 | text-blue-700">Write Code</h4>
          <p>
          you can effortlessly write, edit, and share code in real-time during the call. Whether you're
           discussing programming concepts, troubleshooting issues, or conducting live coding sessions, 
           this feature provides a convenient and collaborative coding environment. 
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={recordIcon} alt="" />
          <h4 className="h4 | text-blue-700">Record Your Call</h4>
          <p>
          It allows you to easily capture and save your call for future reference.
            you can effortlessly record your calls with a single click. Preserve
             valuable insights, ensure accurate information retention, and enhance productivity
              by having the ability to review and share recorded calls whenever needed. 
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={notesIcon} alt="" />
          <h4 className="h4 | text-blue-700">Take Notes</h4>
          <p>
          It empowers you to stay organized and capture important information during the call.
           With the ability to easily jot down notes directly within the platform, you can
            effortlessly keep track of key discussions, action items, and ideas. Stay engaged 
            in the conversation while simultaneously documenting critical details for future reference. 
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={pollIcon} alt="" />
          <h4 className="h4 | text-blue-700">Create Polls</h4>
          <p>
          you can create customized polls and share them with your attendees,
           allowing them to vote and express their opinions in real-time.
            Whether you need to make group decisions, gather opinions, or
             conduct quick surveys, our polling feature simplifies the process 
             and enhances collaboration. Get valuable insights, promote active participation.
          </p>
        </div>
      </div>
    </section>
  );
}
