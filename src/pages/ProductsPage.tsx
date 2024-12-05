import { useMemo } from "react";
import { products } from "@/data/products";
import { CustomHero, Product } from "@/components/almereZaden";

const ProductsPage = () => {
  const memoizedProducts = useMemo(() => {
    return products;
  }, []);

  return (
    <div className="">
      <CustomHero prevPage="Home" currentPage="Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-12 gap-x-8 gap-y-12">
        {memoizedProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
