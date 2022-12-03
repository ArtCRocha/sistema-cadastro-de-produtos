import React, { useState } from "react";
import { useEffect } from "react";
import { listaProdutos } from "../../services/productsServices";
import CardProducts from "../../components/cardProduct";
import { Container } from "./styles";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    listaProdutos()
      .then((res) => {
        setProdutos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {produtos.map((produto, index) => {
        return (
          <CardProducts
            key={index}
            image={produto.image}
            name={produto.name}
            price={produto.price}
          />
        );
      })}
    </Container>
  );
};

export default Home;
