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
import { EmptySearchResults } from "./EmptySearchResults";
import { useTodos } from "../hooks/useTodos";
import { ChangeAlert } from "./ChangeAlert";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translate(0, 25%);
  width: 50%;
  margin: 0 auto;
  background-color: #14213d;
  border-radius: 1.3rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function App() {
  const { states, actions } = useTodos();

  const {
    error,
    loading,
    todos,
    totalTodos,
    openModal,
    sincronizeTodos,
    completedTodos,
    searchTodos,
    searchValue,
  } = states;

  const { addTodo, completeTodo, deleteTodo, setOpenModal, setSearchValue } =
    actions;

  return (
    <StyledMain>
      <GlobalStyle />

      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        todos={searchValue ? searchTodos(searchValue) : todos}
        onError={() => <ErrorState />}
        onLoading={() => <LoadingState />}
        onEmptyTodos={() => !searchValue && <EmptyState />}
        onEmptySearchResults={() =>
          searchValue && <EmptySearchResults searchValue={searchValue} />
        }
      >
        {/* render function: */}
        {/*children*/}
        {(todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
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

      <ChangeAlert sincronize={sincronizeTodos} />
    </StyledMain>
  );
}

export default App;
