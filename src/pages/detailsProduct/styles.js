import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;
  margin: 0 auto;

  h2,
  h3 {
    margin: 0;
  }

  h2 {
    font-weight: 500;
  }
  h3 {
    font-weight: 400;
  }

  div {
    padding: 0 20px;
  }
`;

export const ContainerImage = styled.div`
  margin-top: 20px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    height: 100%;
  }

  @media (max-width: 800px) {
    img {
      width: 80%;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 100%;
    }
  }
`;
