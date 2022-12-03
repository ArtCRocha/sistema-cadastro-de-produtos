import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 10px #e1e1e1;

  ul {
    margin: 0;
    display: flex;
    gap: 30px;

    li {
      list-style: none;
      cursor: pointer;
    }
  }
`;
