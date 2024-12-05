import {
  About,
  Categories,
  Hero,
  Products,
  Vision,
} from "@/components/almereZaden";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-12  pb-16 ">
        <Categories />
        <Products />
        <About />
        <Vision />
      </div>
    </>
  );
};
export default Home;
