import { Link } from "react-router-dom";

const CustomHero = ({
  prevPage,
  currentPage,
}: {
  prevPage: string;
  currentPage: string;
}) => {
  let linkTo = `/${prevPage.toLowerCase()}`;

  if (prevPage.toLocaleLowerCase() === "home") {
    linkTo = "/";
  }

  return (
    <div
      className="bg-[url('assets/images/single-product-page.webp')] bg-no-repeat bg-cover bg-center 
  text-center flex items-center justify-center
  h-[250px] overflow-hidden "
    >
      <div className="h-full flex items-center justify-center gap-4 text-4xl text-white ">
        <Link to={linkTo} className="">
          {prevPage}
        </Link>
        <span> / </span>
        <span className="text-sunset-orange font-bold ">{currentPage}</span>
      </div>
    </div>
  );
};
export default CustomHero;
