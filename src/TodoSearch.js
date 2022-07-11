import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;

  &:focus {
    outline: 0.1rem solid #ffc107;
  }
`;

const TodoSearch = () => {
  return <StyledInput placeholder="Cebolla" />;
};

export { TodoSearch };
