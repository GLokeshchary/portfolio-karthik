import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./EffectCoverflow.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { images, imagesSpecific } from "../constants/photodata";

const EffectCoverFlow = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        rewind={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiperEffectCoverFlow"
      >
        {imagesSpecific?.map((image, index) => (
          <SwiperSlide className="swiperEffectCoverFlow-slide">
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EffectCoverFlow;
