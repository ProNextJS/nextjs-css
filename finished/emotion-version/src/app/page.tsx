"use client";
import styled from "@emotion/styled";
import { ProductCard } from "./ProductCard";
import PRODUCTS from "./products";

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 33%;
  padding: 0.2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <Main>
      {PRODUCTS.map((product) => (
        <Card key={product.id}>
          <ProductCard product={product} />
        </Card>
      ))}
    </Main>
  );
}
