import React, { useEffect, useState } from "react";
import { listaProdutos } from "../../services/productsServices";
import {
  Container,
  CardProduto,
  ContentProduto,
  Options,
  Button,
} from "./styles";
import { deletarProduto } from "../../services/productsServices";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    listaProdutos().then((data) => {
      setProdutos(data);
    });
  }, []);

  return (
    <Container>
      {produtos.map((produto, index) => {
        return (
          <CardProduto key={index}>
            <ContentProduto>
              <img src={produto.image} />
              <div>
                <h3>{produto.name}</h3>
                <p>{produto.price}</p>
              </div>
            </ContentProduto>
            <Options>
              <Button
                onClick={() =>
                  deletarProduto(produto.id).then(() => {
                    window.location.reload();
                  })
                }
                color="red"
              >
                Deletar
              </Button>
              <Button color="blue">Editar</Button>
            </Options>
          </CardProduto>
        );
      })}
    </Container>
  );
};

export default Produtos;
