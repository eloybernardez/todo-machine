import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function TodoIconDelete() {
  return <FontAwesomeIcon icon={faCircleXmark} color="#f03a17" size="lg" />;
}

export { TodoIconDelete };
