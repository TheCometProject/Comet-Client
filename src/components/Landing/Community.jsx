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
  const breakpoints = {
    520: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  };
  return (
    <section id="Community" className="pb-48 pt-24 overflow-x-hidden">
      <div className="mx-auto w-max">
        <p className="text-center text-2xl font-light text-blue-700">
          Our community
        </p>
        <div className="mx-auto h-[2px] w-1/3 rounded-3xl bg-blue-700"></div>
      </div>
      <h2 className="h2 | mb-16 text-center">What they've said</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        breakpoints={breakpoints}
        slidesPerView={1}
      >
        {data.map((item) => (
          <SwiperSlide className="pt-16" key={item.name + item.title}>
            <div className="relative rounded-3xl bg-slate-100 px-12 text-center">
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
