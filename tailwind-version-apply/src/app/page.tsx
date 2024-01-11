import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-[960px]">
      <div className="flex flex-wrap">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="w-full md:w-1/3">
            <div className="w-full p-2">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
