import Image from "next/image";

import { Product } from "./products";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>{product.price}</p>
        </div>
      </div>
    </div>
  );
};
