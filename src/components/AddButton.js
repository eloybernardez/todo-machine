import React from "react";
import { TodoContext } from "../context/Context";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  font-size: 4rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #16c60c;
  border: none;
  color: white;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) =>
    props.openModal && props.active ? "#f03a17" : "#16c60c"};

  &:hover {
    background-color: ${(props) =>
      props.openModal && props.active ? "#f03a40" : "#69e962"};
  }
`;

const PlusSign = styled.div`
  margin: 0 auto;
  transition: transform 1s;

  transform: ${(props) =>
    props.openModal && props.active ? "rotateZ(135deg)" : "rotateZ(0deg)"};
`;

function AddButton({ active, onClickButton }) {
  const { openModal } = React.useContext(TodoContext);
  return (
    <StyledButton openModal={openModal} onClick={onClickButton} active={active}>
      <PlusSign openModal={openModal} active={active}>
        +
      </PlusSign>
    </StyledButton>
  );
}

export { AddButton };
