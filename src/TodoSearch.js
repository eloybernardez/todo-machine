import React from "react";
import styled from "styled-components";
import { TodoContext } from "./context/Context";

const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;
  padding-left: 0.8rem;
  border-radius: 0.8rem;

  &:focus {
    outline: 0.2rem solid #ff9b71;
  }
`;

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    // ver si en props.text figura el valor del input
    setSearchValue(event.target.value);
  };

  return (
    <StyledInput
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
};

export { TodoSearch };
