import { Link } from "react-router-dom";

const Product = ({
  id,
  image,
  hoverImage,
  name,
}: {
  id: string;
  image: string;
  hoverImage: string;
  name: string;
}) => {
  return (
    <div
      key={id}
      className="border border-[#eeeeee] rounded-md p-3 flex flex-col gap-6 
     transition-all duration-500 hover:shadow-lg "
    >
      <Link
        to={`/products/${id}`}
        aria-label={`View details about ${name}`}
        className="flex flex-col gap-4 border rounded-md "
      >
        <div className="relative w-full h-60">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="object-cover hover:opacity-0 absolute z-10 transition-opacity duration-500 rounded-md w-full h-full"
          />
          <img
            src={hoverImage}
            alt={name}
            loading="lazy"
            className="absolute object-cover rounded-md w-full h-full"
          />
        </div>
      </Link>
      {/* bg-[#F7F7F7] */}
      <div className="flex flex-col items-center justify-between pb-4 ">
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
};
export default Product;
