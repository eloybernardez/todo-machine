import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  font-size: 4rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #16c60c;
  border: none;
  color: white;
  padding: 0.4rem 1rem 2.3rem;
  justify-self: flex-end;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;
  transition: transform 1s;

  transform: ${(props) => (props.openModal ? "rotateZ(135deg)" : "inherit")};
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
