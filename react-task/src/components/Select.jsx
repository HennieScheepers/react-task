import React, { useMemo } from "react";

const Select = ({ options }) => {
  const optionElements = useMemo(
    () =>
      options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      )),
    [options]
  );

  return (
    <div class="form-input mb-3">
      <select class="form-select" aria-label="Select school">
        {optionElements}
      </select>
    </div>
  );
};

export default Select;
