import React, { useMemo } from "react";
import PropTypes from "prop-types";

const Select = ({ options, value, onChange, name, placeholder }) => {
  const optionElements = useMemo(
    () =>
      options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      )),
    [options]
  );

  const handleChange = (event) => {
    const target = event.target.name;
    const value = event.target.value;
    onChange((prevValue) => ({ ...prevValue, [target]: value }));
  };

  return (
    <div class="form-input mb-3">
      <select
        class="form-select"
        aria-label="Select school"
        value={value}
        name={name}
        onChange={handleChange}
      >
        <option>{placeholder}</option>
        {optionElements}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
