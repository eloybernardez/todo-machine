import React from "react";
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
  transition: transform 1s;

  transform: ${(props) =>
    props.openModal ? "rotateZ(135deg)" : "rotateZ(0deg)"};
  background-color: ${(props) => (props.openModal ? "#f03a17" : "#16c60c")};

  &:hover {
    background-color: ${(props) => (props.openModal ? "#f03a40" : "#69e962")};
  }
`;

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
    // saveTodos([...todos, { text: newTodo, completed: false }]);
  };

  return (
    <StyledButton openModal={props.openModal} onClick={onClickButton}>
      +
    </StyledButton>
  );
};

export { CreateTodoButton };
