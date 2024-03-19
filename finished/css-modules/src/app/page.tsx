import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {PRODUCTS.map((product) => (
        <div key={product.id} className={styles.card}>
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
}
