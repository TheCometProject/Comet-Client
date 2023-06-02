import { useSwiper } from "swiper/react";

import LeftArrow from "../../../Assets/Icons/Left arrow.svg"
import RightArrow from "../../../Assets/Icons/Right arrow.svg"

export default function () {
  const swiper = useSwiper();
  return (
    <div className="mx-auto w-fit flex gap-44 mt-14">
      <button className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-full" onClick={()=>swiper.slidePrev()}>
        <img src={LeftArrow} alt="" />
      </button>
      <button className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-full" onClick={()=>swiper.slideNext()}>
        <img src={RightArrow} alt="" />
      </button>
    </div>
  );
}
