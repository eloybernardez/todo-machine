import React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-weight: 400;
  padding: 1rem;
`;

const StyledSpan = styled.span`
  background-color: #ffc107;
  color: black;
  padding: 0.5rem;
  border-radius: 1rem;
  font-weight: bold;
`;

const TodoItem = (props) => {
  return (
    <StyledItem>
      <StyledSpan>Checked!</StyledSpan>
      <p>{props.text}</p>
      <span>X</span>
    </StyledItem>
  );
};

export { TodoItem };
