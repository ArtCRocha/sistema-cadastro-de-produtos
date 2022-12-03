import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 2px 2px 10px #e1e1e1;
  padding: 10px;
  border-radius: 5px;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 230px;

  img {
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  margin: 0;
`;

export const Preco = styled.h3`
  margin: 0;
`;
