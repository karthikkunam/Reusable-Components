import React from 'react';
import { PDFDocument, SCREEN_VIEW } from './PDFDocument';
import PdfModalBox from './PdfModalBox';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

class PrintReportPDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportDetails: {},
      reportType: '',
      showModal: false,
      msgBoxBody: '',
      contentType: this.props.pdfOptions.type === SCREEN_VIEW ? 'image/png' : 'application/pdf',
    };
  }

  generatePdf = () => {
    const { init, completed, bodyRef, headerRef, tableHeaderRef, pdfOptions } = this.props;
    const { contentType } = this.state;
    if (init) {
      init();
    }
    const elem = this.getElement(bodyRef);
    const headerElem = this.getElement(headerRef);
    const tableHeaderElem = this.getElement(tableHeaderRef);
    const content_type = pdfOptions.type === SCREEN_VIEW ? 'image/png' : contentType;
    PDFDocument.printReport(elem, headerElem, tableHeaderElem, pdfOptions, base64pdf => {
      this.setState({ base64pdf, showModal: true, contentType: content_type });
      if (completed) {
        completed();
      }
    });
  };

  getElement = ref => {
    if (ref) {
      if (typeof ref === 'string') return document.getElementById(ref);
      return ref;
    }
    return null;
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    const { reportDetails, reportType } = this.props;
    this.setState({
      reportDetails,
      reportType,
      base64pdf: '',
    });
  }

  render() {
    const { showModal, base64pdf, contentType } = this.state;
    const { className, children } = this.props;
    return (
      <>
        <button
          id="print-pdf"
          type="button"
          role="button"
          className={classNames('print-pdf', className)}
          onClick={this.generatePdf}>
          {children}
        </button>
        <div>
          {' '}
          {showModal && (
            <PdfModalBox
              base64pdf={base64pdf}
              initialModalState={false}
              showModal={showModal}
              onHide={this.closeModal}
              contentType={contentType}
            />
          )}
        </div>
      </>
    );
  }
}

PrintReportPDF.defaultProps = {
  pdfOptions: { type: 'PRINT_VIEW', isAgGrid: false },
};

PrintReportPDF.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  bodyRef: PropTypes.string,
  headerRef: PropTypes.string,
  tableHeaderRef: PropTypes.string,
  init: PropTypes.func,
  completed: PropTypes.func,
  children: PropTypes.node,
  reportDetails: PropTypes.string,
  reportType: PropTypes.string,
  pdfOptions: PropTypes.objectOf({
    type: PropTypes.string,
    isAgGrid: PropTypes.bool,
  }),
};

export default PrintReportPDF;
