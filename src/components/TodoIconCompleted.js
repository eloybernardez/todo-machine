import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "../styles/iconAnimation.css";

function TodoIconCompleted() {
  return (
    <FontAwesomeIcon
      icon={faCircleCheck}
      color="#16c60c"
      size="lg"
      beat
      className="icon-repetition"
    />
  );
}

export { TodoIconCompleted };
