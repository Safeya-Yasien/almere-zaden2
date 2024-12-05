import { CustomTitle } from "@/components/common";

import { useMemo, useState } from "react";
import Product from "./Product";
import { products } from "@/data/products";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filters = ["Featured", "Latest", "Bestseller"];

  const memoizedProducts = useMemo(() => {
    return products;
  }, []);

  return (
    <div className="py-8 px-6 md:px-24">
      {/* Custom Title */}
      <CustomTitle title="Trending Products" desc="Lorem ipsum dolor" />

      {/* Filter Buttons */}
      <ul className="flex items-center justify-center flex-wrap gap-4">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              onClick={() => setActiveFilter(filter)}
              className={`border-2 px-6 py-2 rounded-3xl transition-all duration-500 ${
                activeFilter === filter
                  ? "border-sunset-orange bg-custom-green text-white"
                  : "border-[#e0e0df] text-[#888888] hover:border-sunset-orange hover:bg-custom-green hover:text-white"
              }`}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>

      {/* Product Grid */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-12 gap-x-8 gap-y-12">
          {memoizedProducts.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
