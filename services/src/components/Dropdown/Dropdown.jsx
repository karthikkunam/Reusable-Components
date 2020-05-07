import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = props => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(
    props.value ? (props.value.label) : (props.placeHolder ? props.placeHolder : (props.options && props.options[0].label)),
  );
  const { id, options, ariaExpanded, ariaHaspopup, dataToggle, onClick, disabled, className } = props;

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const onDropdownSelect = option => {
    onClick && onClick(option);
    setDropdownValue(option.label);
    handleDropdown();
  };

  return (
    <div className={`component-example mb-3 col-sm-12 ${className}`}>
      <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
        <button
          className="btn btn-primary dropdown-toggle"
          onClick={handleDropdown}
          type="button"
          id={id}
          data-toggle={dataToggle}
          aria-haspopup={ariaHaspopup}
          disabled={disabled}
          aria-expanded={ariaExpanded}>
          {dropdownValue}
          {options && options.length > 0 && <span className="icon icon-angle-down"></span>}
        </button>
        <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
          {options &&
            options.length > 0 &&
            options.map((option, index) => {
              return (
                <a key={index} className="dropdown-item" onClick={() => onDropdownSelect(option)}>
                  {option.label}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};
Dropdown.defaultProps = {
  id: 'dropdownMenuButton',
  ariaExpanded: 'false',
  ariaHaspopup: 'true',
  dataToggle: 'dropdown',
};

Dropdown.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf({}).isRequired,
  value: PropTypes.string.isRequired,
  ariaExpanded: PropTypes.string,
  ariaHaspopup: PropTypes.string,
  dataToggle: PropTypes.string,
  placeHolder: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Dropdown;
