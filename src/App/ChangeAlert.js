import React from "react";
import styled from "styled-components";
import { useStorageListener } from "../hooks/useStorageListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const StyledSection = styled.section`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const StyledModified = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  top: 20%;
  z-index: 2;
  background-color: #14213d;
  height: 25rem;
  filter: drop-shadow(0.1rem 0.1rem 0.8rem white);
  border-radius: 1.4rem;
  opacity: 1;
  width: 70%;
  margin: 0 auto;
`;
const StyledText = styled.p`
  width: 80%;
  font-size: 1.8rem;
  margin: 1rem auto;
  color: white;
  text-align: center;
`;
const StyledButton = styled.button`
  width: 60%;
  font-size: 1.6rem;
  margin: 0 auto;
  margin-bottom: 1.2rem;
  padding: 0.7rem;
  border: 0.1rem solid #fca311;
  border-radius: 0.4rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: transparent;

  &:hover {
    background-color: #fca311;
  }
`;

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener({ sincronize });
  if (show) {
    return (
      <>
        <StyledSection>
          <StyledModified>
            <FontAwesomeIcon
              icon={faFileCircleExclamation}
              size="9x"
              color="#fca311"
            />
            <StyledText>Hubo cambios en sus TODO's</StyledText>
            <StyledButton
              onClick={() => {
                toggleShow();
              }}
            >
              Actualizar información
            </StyledButton>
          </StyledModified>
        </StyledSection>
      </>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
