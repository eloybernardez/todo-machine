import React from "react";
import styled from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";
import { TodoHeader } from "../containers/TodoHeader";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../containers/TodoList";
import { TodoItem } from "../components/TodoItem";
import { AddButton } from "../components/AddButton";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../containers/Modal";
import { TodoForm } from "../containers/TodoForm";
import { LoadingState } from "./LoadingState";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";
import { useTodos } from "../context/Context";

{
  /* a las components les pasamos PROPIEDADES (PROPS), no parametros. Los atributos que les damos a las etiquetas de HTML no pueden modificarse pero las propiedades sí*/
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background-color: #14213d;
  border-radius: 1.3rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function App() {
  const {
    error,
    loading,
    todos,
    totalTodos,
    searchTodos,
    completeTodo,
    completedTodos,
    deleteTodo,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    addTodo,
  } = useTodos();
  return (
    <StyledMain>
      <GlobalStyle />

      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      {/* Podemos acceder a nuestro contexto con el consumer */}
      <TodoList>
        {error && <ErrorState />}

        {loading && <LoadingState />}

        {!loading && !searchTodos(searchValue).length && <EmptyState />}

        {(searchValue ? searchTodos(searchValue) : todos).map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton>
        <AddButton
          openModal={openModal}
          setOpenModal={setOpenModal}
          active={true}
          size="5rem"
          font="4rem"
        />
      </CreateTodoButton>
    </StyledMain>
  );
}

// Los keys que reciben los archivos de map son los que nos permiten identificar cada elemento de la lista y estos deben ser UNICOS

export default App;
