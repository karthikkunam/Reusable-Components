/* istanbul ignore file */
import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from './Modal';

class ModalButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  onButtonClick = () => {
    this.setState({ showModal: true });
  };

  onModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const {
      modalTitle,
      primaryButton,
      secondaryButton,
      children,
      scrollable,
      size,
      centered,
      dialogClassName,
      className,
      alert,
      alertButton,
    } = this.props;

    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={this.onButtonClick}>
          {alert ? 'Show Alert' : 'Launch demo modal'}
        </button>
        <CustomModal
          modalTitle={modalTitle}
          animation={true}
          size={size}
          scrollable={scrollable}
          showModal={showModal}
          onModalClose={this.onModalClose}
          secondaryButton={secondaryButton}
          primaryButton={primaryButton}
          alert={alert}
          alertButton={alertButton}
          centered={centered}
          dialogClassName={dialogClassName}
          className={className}>
          {children}
        </CustomModal>
      </>
    );
  }
}
ModalButton.propTypes = {
  secondaryButton: PropTypes.objectOf({
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
  }),
  primaryButton: PropTypes.objectOf({
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
  }),
  alertButton: PropTypes.objectOf({
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  scrollable: PropTypes.string,
  size: PropTypes.string,
  dialogClassName: PropTypes.string,
  modalTitle: PropTypes.string,
  centered: PropTypes.bool,
  className: PropTypes.string,
  alert: PropTypes.bool,
};
export default ModalButton;
