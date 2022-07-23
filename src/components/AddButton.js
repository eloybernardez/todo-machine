import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  font-size: ${(props) => props.font};
  border-radius: 50%;
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  background-color: #16c60c;
  border: none;
  color: white;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) => {
    return props.openModal ? "#f03a17" : "#16c60c";
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.active) {
        return props.openModal ? "#f03a40" : "#69e962";
      } else {
        return "#16c60c";
      }
    }};
  }
`;

const PlusSign = styled.div`
  margin: 0 auto;
  transition: transform 1s;

  transform: ${(props) =>
    props.openModal && props.active ? "rotateZ(135deg)" : "rotateZ(0deg)"};
`;

function AddButton({ openModal, setOpenModal, active, size, font }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <StyledButton
      openModal={openModal}
      active={active}
      size={size}
      font={font}
      onClick={onClickButton}
    >
      <PlusSign openModal={openModal} active={active}>
        +
      </PlusSign>
    </StyledButton>
  );
}

export { AddButton };
