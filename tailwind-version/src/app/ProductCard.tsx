import Image from "next/image";

import { Product } from "./products";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="@container">
      <div className="flex flex-col @md:flex-row">
        <div className="w-fill @md:w-1/4">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-auto rounded-tl-2xl rounded-tr-2xl @md:rounded-tr-none rounded-bl-none @md:rounded-bl-2xl"
          />
        </div>
        <div className="w-full @md:w-3/4 pl-4 border-b-2 border-gray-400 rounded-br-2xl rounded-bl-2xl @md:rounded-bl-none border-l-2 @md:border-t-2 rounded-tr-none @md:rounded-tr-2xl border-r-2 @md:border-l-transparent">
          <h1 className="text-2xl mt-4">{product.title}</h1>
          <p className="text-md mt-4 italic">{product.price}</p>
        </div>
      </div>
    </div>
  );
};
