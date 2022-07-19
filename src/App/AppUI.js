import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../context/Context";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
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
    setOpenModal,
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

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export { AppUI };
