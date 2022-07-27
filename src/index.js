import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// function App(props) {
//   return (
//     <h1>
//       ¡{props.saludo}, {props.nombre}!
//     </h1>
//   );
// }

// // HOC
// function withSaludo(saludo) {
//   return function WrapperComponentWithSaludo(WrappedComponent) {
//     return function ComponenteDeVerdad(props) {
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Estamos acompañando al WrappedComponent</p>
//         </>
//       );
//     };
//   };
// }

// Los return de la funcion que está retornando la HOC deben ser COMPONENTES DE REACT si o si

// const AppWithSaludo = withSaludo("Buenas")(App);
// debemos llamar a ambas funciones
// root.render(<AppWithSaludo nombre="Eloy" />);

// Aquí hacemos uso de la propiedad children para pasarle el texto que queramos a la etiqueta de HTML.
