import goal from "@assets/images/goal.jpg";

const Vision = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-6 md:px-24">
      <div className="flex justify-center">
        <img
          src={goal}
          alt="Goal"
          loading="lazy"
          className="w-full max-w-md object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-col justify-center items-start space-y-6">
        <h2 className="text-[40px] font-bold mb-4 text-[#145333]">Our Goals</h2>

        <div className="flex gap-4 items-start">
          <h2 className="text-4xl  bg-gray-200 py-4 px-6 rounded-full text-[#145333]">
            1
          </h2>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-500 max-w-sm">
              Establish stringent quality control measures to ensure that every
              seed we deliver meets the highest standards of performance and
              reliability.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <h2 className="text-4xl  bg-gray-200 py-4 px-6 rounded-full text-[#145333] ">
            2
          </h2>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sustainability Practices
            </h3>
            <p className="text-gray-600 max-w-sm">
              Commit ourselves to sustainable breeding practices, focusing on
              the reduction of environmental impact and promoting biodiversity
              among seed varieties.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <h2 className="text-4xl  bg-gray-200 py-4 px-6 rounded-full text-[#145333]">
            3
          </h2>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Education and Support
            </h3>
            <p className="text-gray-600 max-w-sm">
              Provide comprehensive resources, tools, and expert consultations
              to help our customers understand the advantages of our seeds and
              maximize their agricultural potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
