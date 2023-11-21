import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, id, placeholder, helpText }) => (
  <div class="form-floating mb-3">
    <input
      type={type}
      class="form-control"
      id={id}
      placeholder={placeholder}
      aria-describedby={helpText && "help"}
    ></input>
    <label for={id}>{placeholder}</label>
    {helpText && (
      <div id="help" class="form-text">
        {helpText}
      </div>
    )}
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
};

export default Input;
