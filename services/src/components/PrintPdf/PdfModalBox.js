import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './PdfModalBox.css';

const PdfModalBox = props =>  {
  const { contentType, showModal, base64pdf, onHide } = props;
  return (
    <div className="message-box">
      <Modal
        show={showModal}
        centered={true}
        className="modal-box-pdf"
        backdrop="static" 
        >
        <Modal.Body>
          <object className={contentType.replace(/\//, '-')} width="100%" height="100%" type={contentType} data={base64pdf}>
          </object>
          <button
            id="close"
            className="btn btn-msg-box d-sm-block msg-box-btn-align-center mg-close-align"
            onClick={onHide}>X</button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

PdfModalBox.defaultProps = {
  contentType: 'application/pdf',
};

PdfModalBox.propTypes = {
  contentType: PropTypes.string,
  showModal: PropTypes.bool,
  base64pdf:  PropTypes.string,
  onHide: PropTypes.func,
};

export default PdfModalBox;
