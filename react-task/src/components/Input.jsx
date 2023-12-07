import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type,
  id,
  placeholder,
  helpText,
  value,
  onChange,
  warningText,
}) => {
  const handleChange = (event) => {
    const target = event.target.name;
    const value = event.target.value;
    onChange((prevValue) => ({ ...prevValue, [target]: value }));
  };

  return (
    <div class="form-floating mb-3">
      <input
        type={type}
        class="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        name={id}
        onChange={handleChange}
        aria-describedby={helpText && "help"}
      ></input>
      <label for={id}>{placeholder}</label>
      {helpText && (
        <div id="help" class="form-text">
          {helpText}
        </div>
      )}
      {warningText && (
        <div id="warning" class="form-text text-danger">
          {warningText}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  warningText: PropTypes.string,
};

export default Input;
