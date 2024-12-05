import { CustomTitle } from "@/components/common";
import newsImage1 from "@assets/images/news1.webp";
import newsImage2 from "@assets/images/news1.webp";

const LatestNews = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className=" px-6 md:px-24">
      <CustomTitle title="Latest News" desc="Our Plant House" />

      {/* News 1: Image beside the text */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={newsImage1}
            loading="lazy"
            alt="Latest News 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-custom-green">
            News Title 1
          </h3>
          <div className="mb-4">
            <p className="inline-block px-4 py-1 text-sm font-medium text-white bg-custom-green rounded-lg hover:bg-[#ff5722] transition duration-300 ease-in-out">
              {currentDate}
            </p>
          </div>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>

      {/* News 2: Text first, image beside it */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-12 gap-8 text-right">
        <div className="w-full md:w-1/2">
          <img
            src={newsImage2}
            loading="lazy"
            alt="Latest News 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-custom-green">
            News Title 1
          </h3>
          <div className="mb-4">
            <p className="inline-block px-4 py-1 text-sm font-medium text-white bg-custom-green rounded-lg hover:bg-[#ff5722] transition duration-300 ease-in-out">
              {currentDate}
            </p>
          </div>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
