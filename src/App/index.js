import React from "react";

import styled from "styled-components";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../context/Context";
import { GlobalStyle } from "../GlobalStyle";

{
  /* a las components les pasamos PROPIEDADES (PROPS), no parametros. Los atributos que les damos a las etiquetas de HTML no pueden modificarse pero las propiedades sí*/
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background-color: #2d3047;
  border-radius: 1.3rem;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

function App() {
  return (
    <StyledMain>
      <GlobalStyle />
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </StyledMain>
  );
}

// Los keys que reciben los archivos de map son los que nos permiten identificar cada elemento de la lista y estos deben ser UNICOS

export default App;
