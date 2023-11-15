import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Input = ({ type, id, placeholder, helpText }) => {
  return (
    <div class="form-floating mb-3">
      <input
        type={type}
        class="form-control"
        id={id}
        placeholder={placeholder}
        aria-describedby={helpText && "help"}
      ></input>
      <label for="firstName">{placeholder}</label>
      {helpText && (
        <div id="help" class="form-text">
          {helpText}
        </div>
      )}
    </div>
  );
};

export default Input;
