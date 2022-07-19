import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryEmpty } from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  width: 4rem;
  height: 4rem;
  font-size: 2.5rem;
  font-weight: bold;
  border-radius: 50%;
  background-color: #16c60c;
  border: none;
  color: white;
  padding: 0.65rem 1rem 2.1rem;
  justify-self: flex-end;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;
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
  margin-bottom: 1rem;
`;

const StyledText = styled.p`
  color: black;
  margin-right: 1rem;
`;

function EmptyState() {
  return (
    <StyledDiv>
      <FontAwesomeIcon
        icon={faBatteryEmpty}
        transform="down-3"
        size="5x"
        color="grey"
      />
      <StyledH3>¡Organiza tus TODO's aquí mismo! 🤘</StyledH3>
      <StyledContainer>
        <StyledText>Agrégalos usando</StyledText>
        <StyledButton>+</StyledButton>
      </StyledContainer>
    </StyledDiv>
  );
}

export { EmptyState };
