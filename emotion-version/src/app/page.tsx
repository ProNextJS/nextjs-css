"use client";
import styled from "@emotion/styled";

import { ProductCard } from "./ProductCard";

import PRODUCTS from "./products";

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 33%;
  max-width: 33%;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const CardWrapper = styled.div`
  padding: 0.2rem;
`;

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
