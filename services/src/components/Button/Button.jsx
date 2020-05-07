import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

function Button(props) {
  const { variant, className, onClick, disabled, outline, size, children, type } = props;
  const finalType = `btn-${outline ? 'outline-' : ''}${variant}`;
  const finalSize = `btn-${size}`;

  return (
    <button
      type={type}
      className={classNames('btn', finalType, { disabled }, { [finalSize]: size }, { ...className })}
      onClick={!disabled && onClick}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  outline: false,
  size: undefined,
  className: '',
  onClick: () => {},
  children: undefined,
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string
};

export default Button;
