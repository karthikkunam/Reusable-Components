import React from 'react';
import _ from 'lodash';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const CustomModal = props => {
  const {
    showModal,
    modalTitle,
    secondaryButton,
    primaryButton,
    onConfirm,
    animation,
    autoFocus,
    centered,
    dialogClassName,
    enforceFocus,
    keyboard,
    restoreFocus,
    scrollable,
    size,
    children,
    className,
    alert,
    alertButton,
    alertIcon,
  } = props;

  const onClose = () => {
    const { onModalClose } = props;
    onModalClose && onModalClose(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={onClose}
      animation={animation}
      autoFocus={autoFocus}
      centered={centered}
      dialogClassName={dialogClassName}
      enforceFocus={enforceFocus}
      keyboard={keyboard}
      restoreFocus={restoreFocus}
      scrollable={scrollable}
      size={size}>
      <div className={`modal-content ${className}`}>
        <div className={alert ? `alert alert-dismissible ${alertIcon}` : ''}>
          <h5 className={alert ? 'alert-heading' : 'modal-header'}>
            <span className={alert ? 'alert-heading-text' : 'modal-title'}>{modalTitle}</span>
            {alert ? (
              <span className="icon icon-status-info-reversed"></span>
            ) : (
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            )}
          </h5>
          <div className={alert ? 'alert-body' : 'modal-body'}>{children}</div>
          {alert ? (
            <button
              type="button"
              className={`btn ${alertButton.className}`}
              onClick={onConfirm}
              autoFocus={alertButton.autoFocus}
              onEnter={onConfirm}>
              {alertButton.buttonLabel}
            </button>
          ) : (
            <div className="modal-footer">
              <div className="modal-footer-inner btn-right">
                {!_.isEmpty(secondaryButton) && (
                  <button
                    type="button"
                    className={`btn ${secondaryButton.className}`}
                    data-dismiss="modal"
                    onClick={onClose}
                    onEnter={onClose}
                    autoFocus={secondaryButton.autoFocus}>
                    {secondaryButton.buttonLabel}
                  </button>
                )}
                {!_.isEmpty(primaryButton) && (
                  <button
                    type="button"
                    className={`btn ${primaryButton.className}`}
                    onClick={onConfirm}
                    autoFocus={primaryButton.autoFocus}
                    onEnter={onConfirm}>
                    {primaryButton.buttonLabel}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

CustomModal.displayName = 'Modal';

CustomModal.defaultProps = {
  modalTitle: 'Modal Title',
  animation: true,
  autoFocus: false,
  enforceFocus: false,
  keyboard: false,
  restoreFocus: false,
  className: '',
};

CustomModal.propTypes = {
  showModal: PropTypes.bool,
  onModalClose: PropTypes.func,
  onConfirm: PropTypes.func,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.string,
  secondaryButton: PropTypes.objectOf({
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,
  }),
  primaryButton: PropTypes.objectOf({
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,
  }),
  alertButton: PropTypes.objectOf({
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,
  }),
  scrollable: PropTypes.bool,
  animation: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  enforceFocus: PropTypes.bool,
  keyboard: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  size: PropTypes.string,
  dialogClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  alert: PropTypes.bool,
  alertIcon: PropTypes.string,
};

export default CustomModal;
