import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: text,
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    saveTodos(newTodos); // para re-renderizar el array de todos
  };

  const searchTodos = (value) => {
    return todos.filter((todo) => todo.text.toLowerCase().includes(value));
  };

  // Separamos los estados de las funciones que los actualizan
  const states = {
    loading,
    error,
    todos,
    totalTodos,
    completedTodos,
    searchValue,
    searchTodos,
    sincronizeTodos,
    openModal,
  };

  const actions = {
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    setOpenModal,
  };
  ///////////////////////////////////

  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return { states, actions };
}
// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { useTodos };
