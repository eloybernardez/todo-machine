import React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  opacity: 0.3;
`;

const StyledDiv = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: grey;
`;

const StyledText = styled.div`
  width: 30rem;
  height: 2rem;
  background-color: grey;
`;

function LoadingItem() {
  return (
    <>
      <StyledItem>
        <StyledDiv></StyledDiv>
        <StyledText></StyledText>
        <StyledDiv></StyledDiv>
      </StyledItem>
    </>
  );
}

export { LoadingItem };
