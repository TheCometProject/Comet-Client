import { useState } from "react";

// Swiper js imports:

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperNavigation from "./Swiper/SwiperNavigation.jsx";

import communityData from "./communityData.js";

export default function () {
  const [data, setData] = useState(communityData);
  return (
    <section id="Community" className="pb-48 pt-24">
      <div className="w-max mx-auto">
        <p className="text-center text-blue-700 text-2xl font-light">
          Our community
        </p>
        <div className="bg-blue-700 h-[2px] rounded-3xl mx-auto w-1/3"></div>
      </div>
      <h2 className="h2 | text-center mb-16">What they've said</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50} 
        slidesPerView={2.7}
      >
        {data.map((item) => (
          <SwiperSlide className="pt-16">
            <div className="pb relative rounded-3xl bg-slate-100 px-12 text-center">
              <img
                className="absolute left-1/2 w-28 -translate-x-1/2 -translate-y-1/2"
                src={item.image}
                alt=""
              />
              <div className="pb-8 pt-16">
                <p className="text-2xl font-bold">{item.name}</p>
                <p className="mb-4 text-blue-700">{item.title}</p>
                <p>{item.statement}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavigation />
      </Swiper>
    </section>
  );
}
