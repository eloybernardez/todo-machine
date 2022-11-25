import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  font-size: 1.7rem;
  padding: 0;
  list-style: none;
  border-radius: 1.3rem;
  background-color: #e5e5e5;
  color: white;
`;

const StyledSection = styled.section`
  width: 95%;
`;

const TodoList = (props) => {
  const renderFunction = props.render || props.children;
  return (
    <>
      <StyledSection>
        <StyledUl>
          {props.error && props.onError()}
          {props.loading && props.onLoading()}
          {!props.loading &&
            props.todos.length &&
            props.todos.map(renderFunction)}
          {!props.loading &&
            !props.todos.length &&
            props.onEmptySearchResults()}
          {!props.loading && !props.todos.length && props.onEmptyTodos()}
        </StyledUl>
      </StyledSection>
    </>
  );
};

export { TodoList };
