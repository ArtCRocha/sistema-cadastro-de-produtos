import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => {
    if (props.disabled) return "#678c99";
    else if (props.color === "green") return "#00c176";
    else if (props.color === "red") return "#da1a29";
    else return "#678c99";
  }};
  padding: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: ${(props) => (props.disabled ? "#ccc" : "#fff")};
  font-size: 18px;
  cursor: pointer;
`;
