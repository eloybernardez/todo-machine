import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 4rem;
  height: 4rem;
  font-size: 1.3rem;
  border-radius: 50%;
  background-color: orange;
  border: none;
  color: black;
  justify-self: flex-end;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #ffc107;
    color: white;
  }
`;

const CreateTodoButton = (props) => {
  return <StyledButton>+</StyledButton>;
};

export { CreateTodoButton };
