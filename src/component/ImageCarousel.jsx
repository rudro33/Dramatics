import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import slider1 from "../assets/Banner.jpg";
import slider2 from "../assets/Utsob.webp";
import slider3 from "../assets/Banner3.jpg";
import slider4 from "../assets/JSK.jpg";
import slider5 from "../assets/Wednesday.webp";

export default function ImageCarousel() {
  const images = [slider1, slider2, slider3, slider4, slider5];

  return (
    <div className="w-full">
      <Swiper

        modules={[Autoplay, Pagination]}
        pagination={{ dynamicBullets: true ,clickable: true}}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="mySwiper w-full h-[60vh] md: h-[70vh] lg:h-[80vh]"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
