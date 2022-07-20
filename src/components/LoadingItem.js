import React from "react";
import styled, { keyframes } from "styled-components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  opacity: 0.3;
`;

const swap = keyframes`
 0% {
  background-color:grey;
 }

 50%{
  background-color:lightgrey;
 }

 100%{
  background-color: grey;
 }
`;

const StyledDiv = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: grey;
  animation: ${swap} 1.5s linear infinite;
`;

const StyledText = styled.div`
  width: 40%;
  height: 2rem;
  background-color: grey;
  animation: ${swap} 1.5s linear infinite;
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
