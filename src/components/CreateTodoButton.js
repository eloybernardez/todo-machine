import React from "react";
import { TodoContext } from "../context/Context";
import { AddButton } from "./AddButton";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <AddButton
      openModal={openModal}
      onClickButton={onClickButton}
      active={true}
      size="5rem"
      font="4rem"
    />
  );
};

export { CreateTodoButton };
