import React from "react";
import { useLocation } from "react-router-dom";
import { Container, ContainerImage } from "./styles";

const DetailsProduct = () => {
  const { state } = useLocation();
  return (
    <Container>
      <ContainerImage>
        <img src={state.image} />
      </ContainerImage>
      <div>
        <h2>{state.name}</h2>
        <h3>{state.price}</h3>
        <p>{state.description}</p>
      </div>
    </Container>
  );
};

export default DetailsProduct;
