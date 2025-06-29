import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./EffectCube.css";
import { EffectCube, Pagination } from "swiper/modules";
import { images } from "../constants/photodata";

const EffetCube = () => {
  return (
    <div className="cube-container">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="swipercube"
      >
        {images?.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`nature-${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EffetCube;
