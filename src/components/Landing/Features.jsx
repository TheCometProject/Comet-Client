import featuresImg1 from "../../Assets/Images/image 4.png";
import featuresImg2 from "../../Assets/Images/image 3.png";
import featuresImg3 from "../../Assets/Images/image 2.png";

import screenIcon from "../../Assets/Icons/Desktop.svg";
import penIcon from "../../Assets/Icons/Pen.svg";
import codeIcon from "../../Assets/Icons/Code.svg";
import cameraIcon from "../../Assets/Icons/Camera.svg";
import recordIcon from "../../Assets/Icons/Record.svg";
import pollIcon from "../../Assets/Icons/Poll.svg";
import notesIcon from "../../Assets/Icons/Notes.svg";

export default function () {
  return (
    <section id="Features" className="px-8 pb-48 pt-24 md:px-20">
      <div className="mx-auto w-max">
        <p className="text-center text-2xl font-light text-blue-700">
          Our features
        </p>
        <div className="mx-auto h-[2px] w-1/3 rounded-3xl bg-blue-700"></div>
      </div>
      <h2 className="h2 | text-center">All you need in one place</h2>
      <div className="md:mt24 mt-6 flex flex-col gap-14">
        <div className="flex justify-between flex-col py-4 md:flex-row  md:py-8">
          <img className="hidden md:basis-[calc(50%-2rem)] md:block" src={featuresImg1} alt="" />
          <div className="ml-0 md:ml-6">
            <h3 className="h3 text-center !text-blue-700 md:text-left">
              Total security
            </h3>
            <img className="mb-8 md:hidden" src={featuresImg1} alt="" />
            <p className="max-w-xl text-center text-xl font-light md:text-left">
              The Total Security feature of our project, TheComet, ensures that
              your video conferencing experience is protected at every level. We
              understand the importance of maintaining the privacy and
              confidentiality of your meetings, discussions, and data, and have
              implemented comprehensive security measures to provide you with
              peace of mind.
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4 md:flex-row  md:py-8">
          <img className="hidden md:basis-[calc(50%-2rem)] md:block" src={featuresImg2} alt="" />
          <div className="ml-0 md:ml-6">
            <h3 className="h3 text-center !text-blue-700 md:text-left">
              Accessible Everywhere
            </h3>
            <img className="mb-8 md:hidden" src={featuresImg2} alt="" />
            <p className="max-w-xl text-center text-xl font-light md:text-left">
              It enables seamless access to our video conferencing platform from
              any device and location. Whether on a desktop, laptop, tablet, or
              smartphone, users can connect and collaborate effortlessly. With
              web-based access and dedicated mobile apps, participation is
              possible without software installation. Cloud storage ensures
              secure access to meeting recordings and documents. Multi-device
              synchronization allows for easy switching during meetings.
              Real-time updates keep users informed, promoting a smooth and
              accessible experience for all.
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-col items-center py-4 md:flex-row  md:py-8">
          <img className="hidden md:basis-[calc(50%-2rem)] md:block" src={featuresImg3} alt="" />
          <div className="ml-0 md:ml-6 flex flex-col items-center">
            <h3 className="h3 text-center !text-blue-700 md:text-left">
              Adapted To All situations
            </h3>
            <img className="mb-8 md:hidden" src={featuresImg3} alt="" />
            <p className="max-w-xl text-center text-xl font-light md:text-left">
              ensures that our video conferencing platform is versatile and
              capable of meeting diverse needs. From small team meetings to
              large-scale webinars, our platform can accommodate any situation.
              With customizable settings, users can tailor their virtual meeting
              environment to suit their preferences and requirements. Advanced
              features such as screen sharing, recording, and interactive chat
              enhance collaboration and engagement. Our platform is designed to
              seamlessly integrate with existing workflows, providing a flexible
              solution for businesses, educational institutions, and individuals
              alike.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row flex-wrap gap-12 pt-48">
        <div className="| | flex basis-full flex-col items-center gap-6 rounded-2xl bg-slate-100 px-9 pb-10 pt-11 text-center md:basis-[calc(50%-2rem)] lg:basis-[calc(33.3333%-2rem)]">
          <img className="w-12" src={screenIcon} alt="" />
          <h4 className="h4 | text-blue-700">Share Your Screen</h4>
          <p>
            you can easily share your screen during video conferences, allowing
            participants to view your presentations, documents, or any other
            content in real-time.Enhance collaboration and engage your audience
            by showcasing information and visuals directly from your device.
          </p>
        </div>
        <div className="flex basis-full flex-col items-center gap-6 rounded-2xl bg-slate-100 px-9 pb-10 pt-11 text-center md:basis-[calc(50%-2rem)] lg:basis-[calc(33.3333%-2rem)]">
          <img className="w-12" src={penIcon} alt="" />
          <h4 className="h4 text-blue-700">Draw On Board</h4>
          <p>
            It empowers you to sketch, annotate, and highlight key points
            directly on a shared virtual whiteboard. Collaborate seamlessly with
            others by illustrating ideas, brainstorming, or visually
            demonstrating concepts..
          </p>
        </div>
        <div className="| | flex basis-full flex-col items-center gap-6 rounded-2xl bg-slate-100 px-9 pb-10 pt-11 text-center md:basis-[calc(50%-2rem)] lg:basis-[calc(33.3333%-2rem)]">
          <img className="w-12" src={codeIcon} alt="" />
          <h4 className="h4 | text-blue-700">Write Code</h4>
          <p>
            you can effortlessly write, edit, and share code in real-time during
            the call. Whether you're discussing programming concepts,
            troubleshooting issues, or conducting live coding sessions, this
            feature provides a convenient and collaborative coding environment.
          </p>
        </div>
        <div className="| | flex basis-full flex-col items-center gap-6 rounded-2xl bg-slate-100 px-9 pb-10 pt-11 text-center md:basis-[calc(50%-2rem)] lg:basis-[calc(33.3333%-2rem)]">
          <img className="w-12" src={recordIcon} alt="" />
          <h4 className="h4 | text-blue-700">Record Your Call</h4>
          <p>
            It allows you to easily capture and save your call for future
            reference. you can effortlessly record your calls with a single
            click. Preserve valuable insights, ensure accurate information
            retention, and enhance productivity by having the ability to review
            and share recorded calls whenever needed.
          </p>
        </div>
        <div className="| | flex basis-full flex-col items-center gap-6 rounded-2xl bg-slate-100 px-9 pb-10 pt-11 text-center md:basis-[calc(50%-2rem)] lg:basis-[calc(33.3333%-2rem)]">
          <img className="w-12" src={notesIcon} alt="" />
          <h4 className="h4 | text-blue-700">Take Notes</h4>
          <p>
            It empowers you to stay organized and capture important information
            during the call. With the ability to easily jot down notes directly
            within the platform, you can effortlessly keep track of key
            discussions, action items, and ideas. Stay engaged in the
            conversation while simultaneously documenting critical details for
            future reference.
          </p>
        </div>
        <div className="| | flex basis-full flex-col items-center gap-6 rounded-2xl bg-slate-100 px-9 pb-10 pt-11 text-center md:basis-[calc(50%-2rem)] lg:basis-[calc(33.3333%-2rem)]">
          <img className="w-12" src={pollIcon} alt="" />
          <h4 className="h4 | text-blue-700">Create Polls</h4>
          <p>
            you can create customized polls and share them with your attendees,
            allowing them to vote and express their opinions in real-time.
            Whether you need to make group decisions, gather opinions, or
            conduct quick surveys, our polling feature simplifies the process
            and enhances collaboration. Get valuable insights, promote active
            participation.
          </p>
        </div>
      </div>
    </section>
  );
}
