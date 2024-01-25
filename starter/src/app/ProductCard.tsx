import Image from "next/image";

import { Product } from "./products";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <div>
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};
