import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: 0.8rem;

  &:focus {
    outline: 0.1rem solid #ffc107;
  }
`;

const TodoSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (event) => {
    // ver si en props.text figura el valor del input
    setSearchValue(event.target.value);
  };

  return [
    <StyledInput
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={searchValue}
    />,
    <p>{searchValue}</p>,
  ];
};

export { TodoSearch };
