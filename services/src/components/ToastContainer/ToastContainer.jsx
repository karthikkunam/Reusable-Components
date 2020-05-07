import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToastContainer = props => {
  const [showToast, setShowToast] = useState(true);
  const { toastHeader, hideClose, children, autoClose, toastPosition } = props;

  const onClose = () => {
    const { onToastClose } = props;
    setShowToast(false);
    onToastClose && onToastClose(false);
  };
  setTimeout(() => {
    if (autoClose) {
      setShowToast(false);
    }
  }, autoClose);

  return (
    <div
      className={`toast ${toastPosition} ${showToast ? 'show' : 'hide'}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-autohide="true"
      data-delay="3000">
      <div className="toast-header">
        <strong className="mr-auto">{toastHeader}</strong>
        {!hideClose && (
          <button type="button" className="close" data-dismiss="toast" onClick={onClose}>
            <span className="icon icon-close"></span>
          </button>
        )}
      </div>
      <div className="toast-body">{children}</div>
    </div>
  );
};

ToastContainer.defaultProps = {
  hideClose: false,
};

ToastContainer.propTypes = {
  toastHeader: PropTypes.node,
  children: PropTypes.node,
  hideClose: PropTypes.bool,
  onToastClose: PropTypes.func,
  showToast: PropTypes.func,
  autoClose: PropTypes.number,
  toastPosition: PropTypes.string,
};

export default ToastContainer;
