import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { AddButton } from "../components/AddButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StyledH3 = styled.h3`
  color: black;
  font-size: 1.9rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

const StyledText = styled.p`
  color: black;
  margin-right: 1rem;
`;

function EmptyState() {
  return (
    <StyledDiv>
      <FontAwesomeIcon
        icon={faFolderPlus}
        transform="down-1"
        size="5x"
        color="#16c60c"
      />
      <StyledH3>Organize your TODOS here! 🤘</StyledH3>
      <StyledContainer>
        <StyledText>Add them using </StyledText>
        <AddButton active={false} size="3.5rem" font="3rem" />
      </StyledContainer>
    </StyledDiv>
  );
}

export { EmptyState };
