import Image from "next/image";
import { css, styled } from "@pigment-css/react";

import { Product } from "./products";

const VERTICAL = "@container (max-width: 450px)";
const HORIZONTAL = "@container (min-width: 450px)";

const Card = styled("div")({
  containerType: "inline-size",
  width: "100%",
});

const CardContainer = styled("div")({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  [VERTICAL]: {
    flexDirection: "column",
  },
});

const ImageContainer = styled("div")({
  width: "25%",
  [VERTICAL]: {
    width: "100%",
  },
});

const imageContainerImg = css({
  width: "100%",
  height: "auto",
  borderTopRightRadius: 0,
  [VERTICAL]: {
    borderTopRightRadius: "1rem",
  },
  borderTopLeftRadius: "1rem",
  borderBottomLeftRadius: 0,
  [HORIZONTAL]: {
    borderBottomLeftRadius: "1rem",
  },
});

const Title = styled("h1")({
  fontSize: "1.5rem",
  margin: "0",
  marginTop: "1rem",
});

const Price = styled("p")({
  fontSize: "1rem",
  marginBottom: "1rem",
  fontStyle: "italic",
});

const InfoContainer = styled("div")({
  width: "75%",
  paddingLeft: "1rem",

  borderColor: "#666",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",

  borderRightWidth: 1,
  borderRightStyle: "solid",

  borderBottomRightRadius: "1rem",
  borderBottomLeftRadius: 0,
  borderTopRightRadius: 0,

  [VERTICAL]: {
    width: "100%",
    borderBottomLeftRadius: "1rem",
    borderLeftWidth: 1,
    borderLeftStyle: "solid",
  },
  [HORIZONTAL]: {
    borderTopRightRadius: "1rem",
    borderTopWidth: 1,
    borderTopStyle: "solid",
  },
});

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CardContainer>
        <ImageContainer>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className={imageContainerImg}
          />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
        </InfoContainer>
      </CardContainer>
    </Card>
  );
};
