import { Link } from "react-router-dom";

interface CustomHeroProps {
  prevPage: string;
  currentPage: string;
}

const CustomHero = ({ prevPage, currentPage }: CustomHeroProps) => {
  const linkTo =
    prevPage.toLowerCase() === "home" ? "/" : `/${prevPage.toLowerCase()}`;

  return (
    <div
      className="bg-[url('assets/images/custom.jpg')] bg-no-repeat bg-cover bg-center 
      text-center flex items-center justify-center h-[350px] overflow-hidden"
    >
      <div className="h-full flex items-end justify-center gap-4 text-4xl text-white">
        <Link to={linkTo} className="mb-12 hover:underline">
          {prevPage}
        </Link>
        <span className="mb-12">/</span>
        <span className="text-sunset-orange font-bold mb-12">
          {currentPage}
        </span>
      </div>
    </div>
  );
};

export default CustomHero;
