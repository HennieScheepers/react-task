import React, { useMemo } from "react";
import PropTypes from "prop-types";

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

Select.propTypes = {
  options: PropTypes.array,
};

export default Select;
