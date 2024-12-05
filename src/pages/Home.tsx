import { Categories, Hero } from "@/components/almereZaden";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-12  pb-16 ">
        <Categories />
      </div>
    </>
  );
};
export default Home;
