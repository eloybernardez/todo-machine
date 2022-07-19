import React from "react";
import styled from "styled-components";
import { TodoIconCompleted } from "./TodoIconCompleted";
import { TodoIconDelete } from "./TodoIconDelete";
import { TodoIconToDo } from "./TodoIconToDo";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-weight: 400;
  padding: 1rem;
  border-bottom: 0.1rem solid #14213d;

  &:last-child {
    border: none;
  }
`;

const StyledChecked = styled.span`
  color: black;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 1rem;
  font-weight: bold;
`;

const StyledText = styled.p`
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
  font-size: 1.5rem;
  margin: 0 1rem;
  text-align: center;
`;

const StyledDelete = styled.span`
  cursor: pointer;
  padding: 1.2rem;
  font-weight: bold;
`;

const TodoItem = (props) => {
  return (
    <StyledItem>
      <StyledChecked
        completed={props.todo.completed}
        onClick={() => {
          props.onComplete();
        }}
      >
        {props.todo.completed ? <TodoIconCompleted /> : <TodoIconToDo />}
      </StyledChecked>
      <StyledText completed={props.todo.completed}>
        {props.todo.text}
      </StyledText>
      <StyledDelete
        onClick={() => {
          props.onDelete();
        }}
      >
        <TodoIconDelete />
      </StyledDelete>
    </StyledItem>
  );
};

export { TodoItem };
