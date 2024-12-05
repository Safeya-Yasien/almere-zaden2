import { CustomHero, OurGoals, WhyChooseUs } from "@/components/almereZaden";

const AboutPage = () => {
  return (
    <div>
      <CustomHero prevPage="Home" currentPage="About" />
      <div className="flex flex-col gap-12 px-6 md:px-24 pb-16 ">
        <WhyChooseUs />
      </div>
      <OurGoals />
      <div className="flex flex-col gap-12 px-6 md:px-24 pb-16 "></div>
    </div>
  );
};
export default AboutPage;
