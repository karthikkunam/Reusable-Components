import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => {
  const [checked, setChecked] = useState(props.checked);
  const { id, disabled, className, label, onChange, value, children, checked: checkedProp } = props;

  useEffect(() => {
    setChecked(checkedProp);
  }, [checkedProp]);

  const handleCheckboxClick = e => {
    const {
      target: { checked },
    } = e;
    if (disabled) {
      return;
    }
    onChange && onChange(checked, value, e);
    setChecked(checked);
  };

  return (
    <fieldset className={`checkbox mt-1 ${className}`}>
      <label id={id} className={`checkbox-label ${disabled ? 'disabled' : ''}`}>
        <span className="checkbox-text">{label ? label : children}</span>
        <input type="checkbox" disabled={disabled} checked={checked ? 'checked' : ''} onChange={handleCheckboxClick} />
        <span className="checkmark"></span>
      </label>
    </fieldset>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  className: '',
  children: '',
};

export default Checkbox;
