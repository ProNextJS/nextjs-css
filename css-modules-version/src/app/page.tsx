import { ProductCard } from "./ProductCard";
import styles from "./page.module.css";
import PRODUCTS from "./products";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {PRODUCTS.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.cardWrapper}>
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
