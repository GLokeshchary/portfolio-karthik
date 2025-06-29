import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BigSwiperAuto.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { bigslides } from "../constants/photodata";

const BigSwiperAuto = ({ images }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bigswiperauto"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} className="bigswiperauto-slide">
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BigSwiperAuto;
