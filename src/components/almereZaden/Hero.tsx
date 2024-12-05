import { Swiper, SwiperSlide } from "swiper/react";

import swiper1 from "@assets/images/hero.webp";

import "swiper/css";

const Hero = () => {
  return (
    <Swiper className="w-[100%] m-0 h-[calc(100vh-80px)]">
      <SwiperSlide>
        <SwiperSlice
          image={swiper1}
          text={`Almere Zaden`}
          desc={`From The Netherlands to the world`}
        />
        <p>From</p>
      </SwiperSlide>
    </Swiper>
  );
};
export default Hero;

const SwiperSlice = ({
  image,
  text,
  desc,
}: {
  image: string;
  text: string;
  desc: string;
}) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="swiper1"
        className="w-full h-[90vh] object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="p-4 rounded-md">
          <h2 className="text-[#ffa500] text-4xl font-bold text-center mb-2">
            {text}
          </h2>
          <p className="text-[#ffa500] text-2xl font-bold text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
