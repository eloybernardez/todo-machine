import React from "react";

// import { TodoCounter } from "../components/TodoCounter";
// import { TodoSearch } from "../components/TodoSearch";

function TodoHeader({ children, loading }) {
  return (
    <>
      <header>
        {React.Children.toArray(children).map((child) =>
          React.cloneElement(child, { loading })
        )}
      </header>
      {/* para un único elemento, usamos React.CloneElement pero si hay más debemos usar React.Children.toArray pues el primero no puede usarse con más de un elemento */}
    </>
  );
}

export { TodoHeader };
