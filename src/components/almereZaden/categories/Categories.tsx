import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

import category_1 from "@assets/images/products/cucumber.webp";
import category_2 from "@assets/images/products/eggplant.webp";
import { Link } from "react-router-dom";

const Categories = () => {
  const swiperSettings = {
    slidesPerView: 4,
    spaceBetween: 30,
    modules: [FreeMode, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
    className: "w-full max-w-7xl py-8 px-2",
  };

  return (
    <div className=" -mt-[100px] px-6 md:px-24   ">
      <Swiper {...swiperSettings}>
        <SwiperSlide>
          <Link
            to="/"
            className="bg-white shadow-[0px_0px_10px_0px] rounded-lg p-4 flex flex-col group"
          >
            <div
              className="bg-[#F5F5F5] w-full h-full flex flex-col items-center justify-center gap-6 p-4
            relative z-10 before:absolute before:w-full before:h-0 before:-z-10 before:top-0 before:bg-[#CEDCC5]
            before:transition-all before:duration-500 group-hover:before:h-[50%]"
            >
              <div className="overflow-hidden h-[170px] w-[160px] flex items-center justify-center mx-auto">
                <img
                  src={category_1}
                  alt="category_1"
                  loading="lazy"
                  className="object-cover w-full h-auto transition-all duration-500 group-hover:scale-110"
                />
              </div>
              {/* info */}
              <div>
                <h2 className="text-2xl font-medium">Rose</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className="bg-white shadow-[0px_0px_10px_0px] rounded-lg p-4 flex flex-col group"
          >
            <div
              className="bg-[#F5F5F5] w-full h-full flex flex-col items-center justify-center gap-6 p-4
            relative z-10 before:absolute before:w-full before:h-0 before:-z-10 before:top-0 before:bg-[#CEDCC5]
            before:transition-all before:duration-500 group-hover:before:h-[50%]"
            >
              <div className="overflow-hidden h-[170px] w-[160px] flex items-center justify-center mx-auto">
                <img
                  src={category_2}
                  alt="category_1"
                  loading="lazy"
                  className="object-cover w-full h-auto transition-all duration-500 group-hover:scale-110"
                />
              </div>
              {/* info */}
              <div>
                <h2 className="text-2xl font-medium">Rose</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className="bg-white shadow-[0px_0px_10px_0px] rounded-lg p-4 flex flex-col group"
          >
            <div
              className="bg-[#F5F5F5] w-full h-full flex flex-col items-center justify-center gap-6 p-4
            relative z-10 before:absolute before:w-full before:h-0 before:-z-10 before:top-0 before:bg-[#CEDCC5]
            before:transition-all before:duration-500 group-hover:before:h-[50%]"
            >
              <div className="overflow-hidden h-[170px] w-[160px] flex items-center justify-center mx-auto">
                <img
                  src={category_1}
                  alt="category_1"
                  loading="lazy"
                  className="object-cover w-full h-auto transition-all duration-500 group-hover:scale-110"
                />
              </div>
              {/* info */}
              <div>
                <h2 className="text-2xl font-medium">Rose</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className="bg-white shadow-[0px_0px_10px_0px] rounded-lg p-4 flex flex-col group"
          >
            <div
              className="bg-[#F5F5F5] w-full h-full flex flex-col items-center justify-center gap-6 p-4
            relative z-10 before:absolute before:w-full before:h-0 before:-z-10 before:top-0 before:bg-[#CEDCC5]
            before:transition-all before:duration-500 group-hover:before:h-[50%]"
            >
              <div className="overflow-hidden h-[170px] w-[160px] flex items-center justify-center mx-auto">
                <img
                  src={category_2}
                  alt="category_1"
                  loading="lazy"
                  className="object-cover w-full h-auto transition-all duration-500 group-hover:scale-110"
                />
              </div>
              {/* info */}
              <div>
                <h2 className="text-2xl font-medium">Rose</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/"
            className="bg-white shadow-[0px_0px_10px_0px] rounded-lg p-4 flex flex-col group"
          >
            <div
              className="bg-[#F5F5F5] w-full h-full flex flex-col items-center justify-center gap-6 p-4
            relative z-10 before:absolute before:w-full before:h-0 before:-z-10 before:top-0 before:bg-[#CEDCC5]
            before:transition-all before:duration-500 group-hover:before:h-[50%]"
            >
              <div className="overflow-hidden h-[170px] w-[160px] flex items-center justify-center mx-auto">
                <img
                  src={category_1}
                  alt="category_1"
                  loading="lazy"
                  className="object-cover w-full h-auto transition-all duration-500 group-hover:scale-110"
                />
              </div>
              {/* info */}
              <div>
                <h2 className="text-2xl font-medium">Rose</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Categories;
