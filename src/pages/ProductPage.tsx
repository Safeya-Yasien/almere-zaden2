import { CustomHero } from "@/components/almereZaden";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="">
      {/* Hero Section */}
      <CustomHero prevPage="Products" currentPage={`${product.name}`} />

      {/* Product Card */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 py-24">
        {/* Product Image */}
        <div className="w-full md:w-1/3">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-sunset-orange">
            {product.name}
          </h1>
          <p className="text-gray-700 text-lg leading-8">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
