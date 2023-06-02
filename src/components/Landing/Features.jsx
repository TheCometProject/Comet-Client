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
          <div>
            <h3 className="h3">Total security</h3>
            <p className="max-w-xl text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante, auctor ornare leo, non
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between py-8">
          <img className="" src={featuresImg2} alt="" />
          <div>
            <h3 className="h3">Accessible Everywhere</h3>
            <p className="max-w-xl text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante, auctor ornare leo, non
            </p>
          </div>
        </div>
        <div className="flex justify-between py-8">
          <img className="" src={featuresImg3} alt="" />
          <div>
            <h3 className="h3">Adapted To All situations</h3>
            <p className="max-w-xl text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante, auctor ornare leo, non
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-12 pt-48 w-full">
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={screenIcon} alt="" />
          <h4 className="h4 | text-blue-700">Share Your Screen</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={penIcon} alt="" />
          <h4 className="h4 | text-blue-700">Draw On Board</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={codeIcon} alt="" />
          <h4 className="h4 | text-blue-700">Write Code</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={recordIcon} alt="" />
          <h4 className="h4 | text-blue-700">Record Your Call</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={notesIcon} alt="" />
          <h4 className="h4 | text-blue-700">Take Notes</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>
        <div className="basis-[calc(33.33333%-3rem)] flex flex-col items-center gap-6 | px-9 pt-11 pb-10 rounded-2xl text-center | bg-slate-100">
          <img className="w-12" src={pollIcon} alt="" />
          <h4 className="h4 | text-blue-700">Create Polls</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>
      </div>
    </section>
  );
}
