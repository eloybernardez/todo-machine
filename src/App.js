import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
// import "./App.css";

{
  /* a las components les pasamos PROPIEDADES (PROPS), no parametros. Los atributos que les damos a las etiquetas de HTML no pueden modificarse pero las propiedades sí*/
}

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];
const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background-color: rgb(40, 42, 62);
  border-radius: 1.3rem;
`;

function App() {
  return (
    <StyledMain>
      <GlobalStyle />
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </StyledMain>
  );
}

// Los keys que reciben los archivos de map son los que nos permiten identificar cada elemento de la lista y estos deben ser UNICOS

export default App;
