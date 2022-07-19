import React from "react";
import styled from "styled-components";
import { TodoContext } from "./context/Context";

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const TodoCounter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <StyledH2>
      Has completado {completedTodos} de {totalTodos} TODO's
    </StyledH2>
  );
};

export { TodoCounter }; // exportamos el componente para que pueda ser usado en otro archivo. Sin embargo, no lo exportamos por default sino que lo exportamos como un named export y obligarnos usemos los nombres específicos
