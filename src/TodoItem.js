import React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-weight: 400;
  padding: 1rem;
`;

const StyledChecked = styled.span`
  background-color: ${(props) => (props.completed ? "#ffc107" : "red")}
  color: black;
  cursor:pointer;
  padding: 0.5rem;
  border-radius: 1rem;
  font-weight: bold;
`;

const StyledText = styled.p`
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
  font-size: 1.5rem;
  margin: 0 1rem;
  text-align: center;
`;

const StyledDelete = styled.span`
  cursor: pointer;
  padding: 1.2rem;
  font-weight: bold;

  &:hover {
    color: #ffc107;
  }
`;

const TodoItem = (props) => {
  const [completed, setCompleted] = React.useState(props.completed);

  const onComplete = () => {
    setCompleted(!completed);
    alert("Ya completaste el todo" + " " + props.text);
  };

  const onDelete = () => {
    setCompleted(!completed);
    alert("Borraste el todo" + " " + props.text);
  };
  return (
    <StyledItem>
      <StyledChecked
        completed={completed}
        onClick={() => {
          if (completed === false) return onComplete();
        }}
      >
        {completed ? "✅" : "⏱"}
      </StyledChecked>
      <StyledText completed={completed}>{props.text}</StyledText>
      <StyledDelete
        onClick={() => {
          if (completed === true) return onDelete();
        }}
      >
        ❌
      </StyledDelete>
    </StyledItem>
  );
};

export { TodoItem };
