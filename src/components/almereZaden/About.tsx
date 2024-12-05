import aboutBg from "@assets/images/about-bg.webp";
import about from "@assets/images/about.webp";
const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-100 "
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">
          <div className="p-4 sm:pl-24 py-8">
            <h2 className="text-sunset-orange text-[30px] font-bold mb-5">
              About Us
            </h2>
            <p className="text-gray-300  text-[20px] mb-3 ">
              At Almere Zaden, our mission is to revolutionize the global seed
              industry by providing high-quality seeds exclusively derived from
              Netherlands' agricultural excellence. We are dedicated to
              fostering sustainable farming practices worldwide, empowering
              growers to enhance productivity and resilience through superior
              seed genetics.
            </p>
            <p className="text-gray-300  text-[20px] ">
              Our vision at Almere Zaden is to be a leading name in the global
              seed market, recognized for our commitment to quality, innovation,
              and sustainability. We aspire to create a world where every
              farmer, regardless of their location, has access to the finest
              seeds enhancing biodiversity and food security. We envision a
              global agricultural landscape enriched by the unparalleled
              excellence of Dutch-bred varieties, contributing to healthier
              crops and thriving communities.
            </p>
            <button className="bg-transparent hover:bg-sunset-orange text-sunset-orange font-semibold hover:text-white py-2 px-4 border border-sunset-orange hover:border-transparent rounded mt-8">
              Read more
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={about}
              alt="About"
              loading="lazy"
              className="w-full max-w-md object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
