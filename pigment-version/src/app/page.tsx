import { styled } from "@pigment-css/react";
import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

const MOBILE = "@media screen and (max-width: 768px)";

const Main = styled("main")({
  margin: "0 auto",
  maxWidth: 960,
  fontFamily: "sans-serif",
});

const Container = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

const Card = styled("div")({
  width: "33%",
  maxWidth: "33%",
  [MOBILE]: {
    width: "100%",
    maxWidth: "100%",
  },
});

const CardWrapper = styled("div")({
  padding: "0.2rem",
  width: "100%",
});

export default function Home() {
  return (
    <Main>
      <Container>
        {PRODUCTS.map((product) => (
          <Card key={product.id}>
            <CardWrapper>
              <ProductCard product={product} />
            </CardWrapper>
          </Card>
        ))}
      </Container>
    </Main>
  );
}
