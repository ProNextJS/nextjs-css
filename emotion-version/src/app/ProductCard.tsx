"use client";
import styled from "@emotion/styled";
import Image from "next/image";

import { Product } from "./products";

interface Props {
  product: Product;
}

const Card = styled.div`
  container-type: inline-size;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  color: white;
  @container (max-width: 450px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 25%;
  @container (max-width: 450px) {
    width: 100%;
  }
  & img {
    width: 100%;
    height: auto;
    @container (max-width: 450px) {
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
    }
    @container (min-width: 450px) {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
  }
`;

const InfoContainer = styled.div`
  @container (max-width: 450px) {
    width: 100%;
    border-bottom: 1px solid #666;
    border-top: none;
    border-left: 1px solid #666;
    border-right: 1px solid #666;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  @container (min-width: 450px) {
    width: 75%;
    border-bottom: 1px solid #666;
    border-top: 1px solid #666;
    border-right: 1px solid #666;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const Title = styled.h1`
  margin-left: 1rem;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Price = styled.p`
  margin-left: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  font-style: italic;
`;

export const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <CardContainer>
        <ImageContainer>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
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
