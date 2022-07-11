import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  font-size: 1.7rem;
  padding: 0;
  list-style: none;
  border-radius: 1.3rem;
  background-color: #edeef0;
  color: white;
`;

const StyledSection = styled.section`
  width: 95%;
`;

const TodoList = (props) => {
  return (
    <>
      <StyledSection>
        <StyledUl>{props.children}</StyledUl>
      </StyledSection>
    </>
  );
};

export { TodoList };
