import React from "react";

import { TodoCounter } from "../components/TodoCounter";
import { TodoContext } from "../context/Context";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../containers/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../containers/Modal";
import { TodoForm } from "../components/TodoForm";
import { LoadingState } from "./LoadingState";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";

const AppUI = () => {
  const {
    error,
    loading,
    searchValue,
    todos,
    completeTodo,
    deleteTodo,
    searchTodos,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
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
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </>
  );
};

export { AppUI };
