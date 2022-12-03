import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  padding: 20px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgb(235, 235, 235);
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;

  p {
    color: red;
    margin: 10px 0;
  }
`;

export const Label = styled.label`
  margin: 0;
  font-size: clamp(0.6em, 0.8em + 1vw, 1em);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e1e1e1;
  outline: none;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
