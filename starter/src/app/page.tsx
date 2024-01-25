import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

export default function Home() {
  return (
    <main>
      <div>
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <div>
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
