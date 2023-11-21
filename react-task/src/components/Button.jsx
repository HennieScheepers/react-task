import React from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
  secondary: PropTypes.bool,
  label: PropTypes.string,
};

export default Button;
