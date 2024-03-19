import { styled, css } from "@pigment-css/react";
import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

const MOBILE = "@media screen and (max-width: 768px)";

const mainClass = css`
  margin: 0 auto;
  max-width: 960px;
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled("div")`
  padding: 0.2rem;
  width: 33%;
  max-width: 33%;
  ${() => MOBILE} {
    width: 100%;
    max-width: 100%;
  }
`;

export default function Home() {
  return (
    <main className={mainClass}>
      {PRODUCTS.map((product) => (
        <Card key={product.id}>
          <ProductCard product={product} />
        </Card>
      ))}
    </main>
  );
}
