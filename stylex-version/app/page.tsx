import * as stylex from "@stylexjs/stylex";

import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

export default function Home() {
  return (
    <main {...stylex.props(s.main)}>
      <div {...stylex.props(s.container)}>
        {PRODUCTS.map((product) => (
          <div key={product.id} {...stylex.props(s.card)}>
            <div {...stylex.props(s.cardWrapper)}>
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const MOBILE = "@media screen and (max-width: 768px)";

const s = stylex.create({
  main: {
    margin: "0 auto",
    maxWidth: 960,
    backgroundColor: "black",
    fontFamily: "sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: {
      default: "33%",
      [MOBILE]: "100%",
    },
    maxWidth: {
      default: "33%",
      [MOBILE]: "100%",
    },
  },
  cardWrapper: {
    padding: "0.2rem",
    width: "100%",
  },
});
