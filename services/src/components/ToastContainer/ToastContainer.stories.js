import React from 'react';
import ToastContainer from '.';

export default {
  title: 'ToastContainer',
  component: ToastContainer,
};

const toastHeader = (
  <div>
    <span className="icon icon-info"></span>
    Toast Header
  </div>
);

export const TopLeftToast = () => (
  <ToastContainer toastHeader={toastHeader} toastPosition="toast-top-left">
    Some text inside the toast body
  </ToastContainer>
);
export const TopRightToast = () => (
  <ToastContainer toastHeader={toastHeader} toastPosition="toast-top-right">
    Some text inside the toast body
  </ToastContainer>
);
export const BottomLeftToast = () => (
  <ToastContainer toastHeader={toastHeader} toastPosition="toast-bottom-left">
    Some text inside the toast body
  </ToastContainer>
);
export const BottomRightToast = () => (
  <ToastContainer toastHeader={toastHeader} toastPosition="toast-bottom-right">
    Some text inside the toast body
  </ToastContainer>
);
export const TopCenterToast = () => (
  <ToastContainer toastHeader={toastHeader} toastPosition="toast-top-center">
    Some text inside the toast body
  </ToastContainer>
);
export const BottomCenterToast = () => (
  <ToastContainer toastHeader={toastHeader} toastPosition="toast-bottom-center">
    Some text inside the toast body
  </ToastContainer>
);
export const ToastWithAutoClose = () => (
  <ToastContainer toastHeader={toastHeader} autoClose={8000} toastPosition="toast-bottom-center">
    It will autoClose in 8000 ms
  </ToastContainer>
);
