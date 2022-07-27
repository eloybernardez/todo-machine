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

const StyledSearchValue = styled.span`
  color: #f03a17;
  font-weight: normal;
`;

function EmptySearchResults({ searchValue }) {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faBatteryEmpty} size="5x" color="#f03a17" />
      <StyledH3>
        Parece que no hay TODO's que encajen con "
        <StyledSearchValue>{searchValue}</StyledSearchValue>" 🤔
      </StyledH3>
      <StyledContainer>
        <StyledText>
          💡 Prueba buscando algo relacionado a tus TODO's
        </StyledText>
      </StyledContainer>
    </StyledDiv>
  );
}

export { EmptySearchResults };
