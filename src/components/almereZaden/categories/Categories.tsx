import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Import category images dynamically
import category_1 from "@assets/images/categories/cucumber.webp";
import category_2 from "@assets/images/categories/eggplant.webp";
import category_3 from "@assets/images/categories/melon.webp";
import category_4 from "@assets/images/categories/pepper.webp";
import category_5 from "@assets/images/categories/zucchini.webp";

// Define the Category interface
interface ICategory {
  id: number;
  name: string;
  image: string;
}

// Category data array
const categories: ICategory[] = [
  { id: 1, name: "Cucumber", image: category_1 },
  { id: 2, name: "Eggplant", image: category_2 },
  { id: 3, name: "Melon", image: category_3 },
  { id: 4, name: "Pepper", image: category_4 },
  { id: 5, name: "Zucchini", image: category_5 },
];

// Reusable CategoryCard component
const CategoryCard = ({ category }: { category: ICategory }) => (
  <Link
    to={`/products/${category.id}`}
    // bg-gradient-to-l from-sunset-orange via-sunset-orange to-sunshine-yellow
    className="bg-white  shadow-[0px_0px_10px_0px]  rounded-lg p-4 flex flex-col group transition-transform transform hover:scale-105"
  >
    <div className="bg-[#F5F5F5]  w-full h-full flex flex-col items-center justify-center gap-6 p-4 relative z-10 before:absolute before:w-full before:h-0 before:-z-10 before:top-0 before:bg-[#CEDCC5] before:transition-all before:duration-500 group-hover:before:h-[50%]">
      <div className="overflow-hidden h-[170px] w-[160px] flex items-center justify-center mx-auto">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="object-cover w-full h-auto transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <h2 className="text-2xl font-medium text-center text-[#5C3100]">
        {category.name}
      </h2>
    </div>
  </Link>
);

// Swiper settings moved outside to avoid re-initialization on each render
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
    0: { slidesPerView: 1, spaceBetween: 10 },
    576: { slidesPerView: 2, spaceBetween: 20 },
    992: { slidesPerView: 3, spaceBetween: 20 },
    1200: { slidesPerView: 4, spaceBetween: 30 },
    1400: { slidesPerView: 5, spaceBetween: 40 },
  },
  className: "w-full max-w-7xl py-8 px-2",
};

const Categories = () => {
  return (
    // bg-gradient-to-r from-sunset-orange via-sunset-orange to-sunshine-yellow
    <div className="-mt-[100px] px-6 md:px-24 ">
      <Swiper {...swiperSettings}>
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
