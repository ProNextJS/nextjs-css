import Image from "next/image";
import * as stylex from "@stylexjs/stylex";

import { Product } from "./products";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div {...stylex.props(s.card)}>
      <div {...stylex.props(s.cardContainer)}>
        <div {...stylex.props(s.imageContainer)}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            {...stylex.props(s.imageContainerImg)}
          />
        </div>
        <div {...stylex.props(s.infoContainer)}>
          <h1 {...stylex.props(s.title)}>{product.title}</h1>
          <p {...stylex.props(s.price)}>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

const SMALL = "@container (max-width: 450px)";
const LARGE = "@container (min-width: 450px)";

const s = stylex.create({
  card: {
    containerType: "inline-size",
    width: "100%",
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    flexDirection: {
      default: "row",
      [SMALL]: "column",
    },
  },
  imageContainer: {
    width: {
      default: "25%",
      [SMALL]: "100%",
    },
  },
  imageContainerImg: {
    width: "100%",
    height: "auto",
    borderTopRightRadius: {
      default: 0,
      [SMALL]: "1rem",
    },
    borderTopLeftRadius: "1rem",
    borderBottomLeftRadius: {
      default: 0,
      [LARGE]: "1rem",
    },
  },
  infoContainer: {
    width: {
      default: "75%",
      [SMALL]: "100%",
    },

    paddingLeft: "1rem",

    borderBottomWidth: 1,
    borderBottomColor: "#666",
    borderBottomStyle: "solid",

    borderRightWidth: 1,
    borderRightColor: "#666",
    borderRightStyle: "solid",

    borderBottomRightRadius: "1rem",
    borderBottomLeftRadius: {
      default: 0,
      [SMALL]: "1rem",
    },
    borderTopRightRadius: {
      default: 0,
      [LARGE]: "1rem",
    },

    borderTopWidth: {
      default: "inherit",
      [LARGE]: 1,
    },
    borderTopColor: {
      default: "inherit",
      [LARGE]: "#666",
    },
    borderTopStyle: {
      default: "inherit",
      [LARGE]: "solid",
    },

    borderLeftWidth: {
      default: "inherit",
      [SMALL]: 1,
    },
    borderLeftColor: {
      default: "inherit",
      [SMALL]: "#666",
    },
    borderLeftStyle: {
      default: "inherit",
      [SMALL]: "solid",
    },
  },
  title: {
    fontSize: "1.5rem",
    margin: "0",
    marginTop: "1rem",
  },
  price: {
    fontSize: "1rem",
    marginBottom: "1rem",
    fontStyle: "italic",
  },
});
