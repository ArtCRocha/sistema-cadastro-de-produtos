import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

const links = [
  { text: "Home", link: "/" },
  { text: "Cadastrar Produtos", link: "/cadastro-produto" },
  { text: "Produtos", link: "/produtos" },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <h2>Logo</h2>
      </div>
      <div>
        <ul>
          {links.map((item, index) => {
            return (
              <li key={index} onClick={() => navigate(item.link)}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Header;
