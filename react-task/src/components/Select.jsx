import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Select = ({ options }) => {
  console.log();
  const optionElements = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));
  return (
    <div class="form-input mb-3">
      <select class="form-select" aria-label="Select school">
        {optionElements}
      </select>
    </div>
  );
};

export default Select;
