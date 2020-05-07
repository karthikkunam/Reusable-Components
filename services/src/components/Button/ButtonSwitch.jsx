import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ButtonSwitch = props => {
  const [value, setValue] = useState(props.defaultView ? props.defaultView : props.buttonOptions[0].value);
  const { buttonOptions, onClick, className, size } = props;

  const onButtonSwitch = value => {
    setValue(value);
    onClick && onClick(value);
  };
  return (
    <div className={`component-example mb-3 ${className}`}>
      <div
        className={`btn-group btn-group-toggle ${size === 'lg' ? 'btn-group-lg' : 'btn-group-sm'}`}
        data-toggle="buttons">
        {buttonOptions &&
          buttonOptions.length > 0 &&
          buttonOptions.map((option, index) => {
            return (
              <label key={index} className={`btn btn-secondary ${option.value === value ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="options"
                  id={option.id}
                  autoComplete="off"
                  checked={option.value === value}
                  onClick={() => {
                    onButtonSwitch(option.value);
                  }}
                />
                {option.label}
              </label>
            );
          })}
      </div>
    </div>
  );
};

ButtonSwitch.displayName = 'ButtonSwitch';
ButtonSwitch.defaultProps = {
  onClick: () => {},
  className: '',
};

ButtonSwitch.propTypes = {
  buttonOptions: PropTypes.arrayOf({
    id: PropTypes.string, 
    label: PropTypes.string, 
    value: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  defaultView: PropTypes.string,
  size: PropTypes.oneOf(['lg']),
};

export default ButtonSwitch;
