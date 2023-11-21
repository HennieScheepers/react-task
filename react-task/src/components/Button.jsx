import React from "react";

const Button = ({ secondary, label }) => {
  const isSecondaryButtonClass = secondary
    ? "btn btn-light w-25 border"
    : "btn btn-primary w-25";
  return (
    <button type="submit" class={isSecondaryButtonClass}>
      {label}
    </button>
  );
};

export default Button;
