import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToggleSwitch = props => {
  const [id, setId] = useState(props.defaultId ? props.defaultId : props.toggleOptions[0].id);
  const { toggleOptions, onClick, className } = props;

  const onToggleClick = (e, option) => {
    setId(option.id);
    onClick && onClick(e, option);
  };
  return (
    <div className={`switch round pill ${toggleOptions.length > 2 ? 'pill-md' : 'pill-sm'} ${className}`}>
      {toggleOptions &&
        toggleOptions.length > 0 &&
        toggleOptions.map((option, index) => {
          return (
            <>
              <input
                type="radio"
                className="toggle_option"
                id={option.id}
                name="toggle_option"
                onClick={e => onToggleClick(e, option)}
                checked={option.id === id}
              />
              <label key={index} htmlFor={option.id}>
                <p>{option.label}</p>
              </label>
            </>
          );
        })}
      <div className="switch_slider"></div>
    </div>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
ToggleSwitch.defaultProps = {
  onClick: () => {},
  className: '',
};

ToggleSwitch.propTypes = {
  toggleOptions: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.oneOf[('first_toggle_md', 'second_toggle_md', 'third_toggle_md')],
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  defaultId: PropTypes.oneOf(
    ['first_toggle_md', 'second_toggle_md', 'third_toggle_md'] || ['first_toggle', 'second_toggle'],
  ),
};

export default ToggleSwitch;
