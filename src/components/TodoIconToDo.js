import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";
import "../styles/iconAnimation.css";

function TodoIconToDo() {
  return (
    <FontAwesomeIcon
      icon={faHourglass}
      color="#fca311"
      size="lg"
      shake
      className="icon-repetition"
    />
  );
}

export { TodoIconToDo };
