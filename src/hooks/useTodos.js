import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
// const TodoContext = React.createContext();

function useTodos() {
  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
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
    const newTodos = todos.filter((_, index) => index !== todoIndex); // alternativa usar, todos.splice(todoIndex,1)
    saveTodos(newTodos); // para re-renderizar el array de todos
  };

  const searchTodos = (value) => {
    return todos.filter((todo) => todo.text.toLowerCase().includes(value));
  };

  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
    todos,
    addTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  };
}
// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { useTodos };
