import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const StyledTitle = styled.h3`
  padding-top: 2.5rem;
  font-size: 2.2rem;
  text-align: center;
  color: black;
`;

const StyledText = styled.p`
  color: black;
  text-align: center;
`;

function ErrorState() {
  return (
    <>
      <FontAwesomeIcon
        icon={faCircleExclamation}
        size="5x"
        color="red"
        transform="down-4 right-50%"
      />
      <StyledTitle>We can't find your TODOS 😱</StyledTitle>

      <StyledText>💡 Try reloading the page or accesing later.</StyledText>
    </>
  );
}

export { ErrorState };
