import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const ButtonComponent = ({ secondary, innerText }) => {
  const isSecondaryButtonClass = secondary
    ? "btn btn-light w-25 border"
    : "btn btn-primary w-25";
  return (
    <button type="submit" class={isSecondaryButtonClass}>
      {innerText}
    </button>
  );
};

export default ButtonComponent;
