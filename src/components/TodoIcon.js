import React from "react";
import { TodoIconCompleted } from "./TodoIconCompleted";
import { TodoIconDelete } from "./TodoIconDelete";
import { TodoIconToDo } from "./TodoIconToDo";

function TodoIcon({ text }) {
  if (text === "completed") {
    return <TodoIconCompleted />;
  } else if (text === "deleted") {
    return <TodoIconDelete />;
  } else {
    return <TodoIconToDo />;
  }
}

export { TodoIcon };
