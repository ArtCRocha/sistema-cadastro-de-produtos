import React from "react";
import { Button } from "./styles";

const FilledButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default FilledButton;
