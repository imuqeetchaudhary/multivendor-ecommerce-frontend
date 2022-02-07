import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ children, handleClick }) => {
  return (
    <Button variant="primary" type="submit" onClick={handleClick}>
      {children.label}
    </Button>
  );
};

export default ButtonComponent;
