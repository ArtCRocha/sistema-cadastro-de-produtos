import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardProduto = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  margin: 20px;
`;

export const ContentProduto = styled.div`
  display: flex;
  gap: 10px;
  justify-content: left;
  align-items: left;
  border-right: 1px solid #e1e1e1;
  flex: 4;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  img {
    width: 150px;
    height: 100px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.color};
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;
