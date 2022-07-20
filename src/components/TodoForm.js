import React from "react";
import styled from "styled-components";
import { TodoContext } from "../context/Context";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
`;

const StyledLabel = styled.label`
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  width: 80%;
  max-width: 90%;
  padding: 1.5rem 1rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
  margin: 1rem auto;
  font-size: 1.6rem;

  &:focus {
    outline: 0.2rem solid #fca311;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  padding: 1rem 2.6rem;
  background-color: ${(props) => (props.primary ? "#16c60c" : "#f03a17")};
  color: white;
  width: 45%;
  text-align: center;
  border-radius: 0.8rem;
  border: none;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin-right: 1rem;
  }
`;

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue !== "") {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>Añade tu nuevo TODO</StyledLabel>
      <StyledTextarea
        placeholder="Cortar la cebolla para el almuerzo"
        value={newTodoValue}
        onChange={(event) => onChange(event)}
      />
      <StyledButtonContainer>
        <StyledButton type="button" onClick={onCancel}>
          Cancelar
        </StyledButton>
        <StyledButton primary type="submit">
          Añadir
        </StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  );
}

export { TodoForm };
