import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RadioButton = props => {
  const [value, setValue] = useState(props.checked || props.defaultValue);
  const { radioOptions, onClick, className, checked } = props;

  const handleRadioClick = option => {
    if (option.disabled) {
      return;
    }
    onClick && onClick(option);
    setValue(option.value);
  };
  return (
    <fieldset className={`form-group radio mt-1 ${className}`}>
      {radioOptions &&
        radioOptions.length > 0 &&
        radioOptions.map((option, index) => {
          return (
            <label
              key={index}
              className={`radio-label ${option.disabled ? 'disabled' : ''}`}
              onClick={() => handleRadioClick(option)}>
              <span className="radio-text">{option.label}</span>
              <input type="radio" checked={option.value === value || checked ? 'checked' : ''} name="radio" />
              <span className="checkmark"></span>
            </label>
          );
        })}
    </fieldset>
  );
};
RadioButton.defaultProps = {
  className: '',
};

RadioButton.propTypes = {
  radioOptions: PropTypes.arrayOf({}).isRequired,
  defaultValue: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  checked: PropTypes.string,
};

export default RadioButton;
