import React, { useState } from "react";
import { useEffect } from "react";
import { listaProdutos } from "../../services/productsServices";
import CardProducts from "../../components/cardProduct";
import { Container, ContainerProdutos } from "./styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
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
    <>
      <Container>
        <ContainerProdutos>
          {produtos.map((produto, index) => {
            return (
              <CardProducts
                key={index}
                image={produto.image}
                name={produto.name}
                price={produto.price}
                detalhes={() => {
                  navigate(`/detalhes/${produto.id}`, {
                    state: produto,
                  });
                }}
              />
            );
          })}
        </ContainerProdutos>
      </Container>
    </>
  );
};

export default Home;
