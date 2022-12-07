import React from "react";
import { Card, ContainerImage, ContainerText, Title, Preco } from "./styles";

const CardProducts = (props) => {
  return (
    <Card onClick={props.detalhes}>
      <ContainerImage>
        <img src={props.image} alt="img product" />
      </ContainerImage>
      <ContainerText>
        <Title>{props.name}</Title>
        <Preco>R$ {props.price}</Preco>
      </ContainerText>
    </Card>
  );
};

export default CardProducts;
