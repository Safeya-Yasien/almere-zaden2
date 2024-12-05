import aboutBg from "@assets/images/about-bg.webp";
import {
  FaGlobe,
  FaCheckCircle,
  FaLeaf,
  FaFlask,
  FaUserGraduate,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

const Goals = [
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description:
      "Expand our market presence to all corners of the globe while maintaining our promise that every seed comes from the rich agricultural heritage of the Netherlands.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Assurance",
    description:
      "Establish stringent quality control measures to ensure that every seed we deliver meets the highest standards of performance and reliability.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability Practices",
    description:
      "Commit ourselves to sustainable breeding practices, focusing on the reduction of environmental impact and promoting biodiversity among seed varieties.",
  },
  {
    icon: <FaFlask />,
    title: "Research and Innovation",
    description:
      "Invest in continuous research and development to advance breeding techniques, leading to the creation of new and more resilient seed varieties suited to diverse climatic conditions worldwide.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Customer Education and Support",
    description:
      "Provide comprehensive resources, tools, and expert consultations to help our customers understand the advantages of our seeds and maximize their agricultural potential.",
  },
  {
    icon: <FaHandshake />,
    title: "Building Partnerships",
    description:
      "Collaborate strategically with local farmers, agricultural institutions, and environmental organizations worldwide to foster a community invested in sustainable practices and the utilization of high-quality seeds.",
  },
  {
    icon: <FaAward />,
    title: "Brand Recognition",
    description:
      "Establish Almere Zaden as a trusted brand in global agriculture through marketing campaigns highlighting our Dutch roots and commitment to quality.",
  },
];

const OurGoals = () => {
  return (
    <section
      className="py-10 bg-[#fdf7ee] mt-5"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-sunset-orange">Our Goals</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {Goals.map((Goal, index) => (
            <div
              key={index}
              className="bg-gray-200 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition flex flex-col justify-center items-center hover:translate-y-[-10px] hover:transition-all hover:duration-300"
            >
              <div className="flex mb-5 text-5xl text-sunset-orange">
                {Goal.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#09100f] mb-3">
                {Goal.title}
              </h3>
              <p className="text-gray-500 text-md">{Goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
