import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModal = styled.div`
  background-color: #2d3047;
  color: white;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  box-shadow: -0.3rem 0.3rem 0.5rem black;
  z-index: 1;
  width: 45%;
  max-width: 40rem;
  min-width: 25rem;
  height: 25rem;
  border-radius: 0.6rem;
  border: 0.1rem solid white;
  margin: 0 auto;
`;

function Modal({ children }) {
  return ReactDOM.createPortal(
    <StyledModal>{children}</StyledModal>,
    document.getElementById("modal")
  );
}

export { Modal };
