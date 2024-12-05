import {
  About,
  CustomHero,
  OurGoals,
  WhyChooseUs,
} from "@/components/almereZaden";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-sunset-orange via-sunset-orange to-sunshine-yellow">
      <CustomHero prevPage="Home" currentPage="About" />
      <div className="flex flex-col gap-12 px-6 md:px-24 pb-16">
        <WhyChooseUs />
      </div>
      <About />
      <OurGoals />
    </div>
  );
};

export default AboutPage;
