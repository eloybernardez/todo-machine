import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  font-size: 4rem;
  border-radius: 50%;
  background-color: orange;
  border: none;
  color: black;
  padding: 0.4rem 1rem 2.3rem;
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
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <StyledButton onClick={() => onClickButton("Aquí debería ir el modal")}>
      +
    </StyledButton>
  );
};

export { CreateTodoButton };
