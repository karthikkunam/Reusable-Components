import React from 'react';
import { action } from '@storybook/addon-actions';
import Modal from '.';
import ModalButton from './ModalButton';
import ExceptionMessage from '../ExceptionMessage';
import './styles.scss';

export default {
  title: 'Modal & Alert',
  component: Modal,
};

export const ModalWithButtons = () => (
  <ModalButton
    modalTitle="Unsaved Changes"
    primaryButton={{ buttonLabel: 'Save Changes', className: 'btn-success' }}
    secondaryButton={{ buttonLabel: 'Close', className: 'btn-secondary' }}
    onModalClose={action('Modal closed')}>
    You have unsaved changes which will be lost if you navigate away. Would you like to proceed?
  </ModalButton>
);
export const ModalWithCloseButton = () => (
  <ModalButton
    modalTitle="Unsaved Changes"
    secondaryButton={{ buttonLabel: 'Close', className: 'btn-secondary' }}
    onModalClose={action('Modal closed')}>
    You have unsaved changes which will be lost if you navigate away. Would you like to proceed?
  </ModalButton>
);
export const ModalWithNoButtons = () => (
  <ModalButton onModalClose={action('Modal closed')}>
    You have unsaved changes which will be lost if you navigate away. Would you like to proceed?
  </ModalButton>
);

export const ModalWithAutoFocus = () => (
  <ModalButton
    modalTitle="Unsaved Changes"
    primaryButton={{ buttonLabel: 'Save Changes', className: 'btn-success', autoFocus: true }}
    secondaryButton={{ buttonLabel: 'Close', className: 'btn-secondary' }}
    onModalClose={action('Modal closed')}>
    You have unsaved changes which will be lost if you navigate away. Would you like to proceed?
  </ModalButton>
);

export const ModalWithAutoScroll = () => (
  <ModalButton
    modalTitle="Unsaved Changes"
    scrollable={true}
    primaryButton={{ buttonLabel: 'Save Changes', className: 'btn-success', autoFocus: true }}
    secondaryButton={{ buttonLabel: 'Close', className: 'btn-secondary' }}
    onModalClose={action('Modal closed')}>
    <div>
      <ExceptionMessage />
      <ExceptionMessage />
      <ExceptionMessage />
      <ExceptionMessage />
      <ExceptionMessage />
    </div>
  </ModalButton>
);

export const ModalWithSize = () => (
  <ModalButton
    modalTitle="Print Screen"
    size="xl"
    scrollable={true}
    primaryButton={{ buttonLabel: 'PRINT', className: 'btn-lg btn-success' }}
    onModalClose={action('Modal closed')}>
    <ExceptionMessage />
    <ExceptionMessage />
    <ExceptionMessage />
  </ModalButton>
);

export const CustomWidthModal = () => (
  <ModalButton
    modalTitle="Unsaved Changes"
    centered={true}
    primaryButton={{ buttonLabel: 'YES', className: 'btn-success' }}
    secondaryButton={{ buttonLabel: 'NO', className: 'btn-secondary' }}
    onModalClose={action('Modal closed')}
    dialogClassName="customDialog">
    You have unsaved changes which will be lost if you navigate away. Would you like to proceed?
  </ModalButton>
);
export const RefreshAlert = () => (
  <ModalButton
    modalTitle="The 7MD was removed from the docking station."
    centered={true}
    alert={true}
    alertButton={{ buttonLabel: 'Refresh', className: 'btn-primary btn-lg btn-block' }}
    alertIcon="alert-warning"
    onConfirm={action('Alert button click')}
    dialogClassName="alert-wrapper">
    Would you like to exit the app?
  </ModalButton>
);
export const SuccessAlert = () => (
  <ModalButton
    modalTitle="Success Alert"
    centered={true}
    alert={true}
    alertButton={{ buttonLabel: 'Close', className: 'btn-primary btn-lg btn-block' }}
    alertIcon="alert-success"
    onConfirm={action('Alert button click')}
    dialogClassName="alert-wrapper">
    Would you like to exit the app?
  </ModalButton>
);
export const DangerAlert = () => (
  <ModalButton
    modalTitle="Danger Alert"
    centered={true}
    alert={true}
    alertButton={{ buttonLabel: 'Close', className: 'btn-primary btn-lg btn-block' }}
    alertIcon="alert-danger"
    onConfirm={action('Alert button click')}
    dialogClassName="alert-wrapper">
    Would you like to exit the app?
  </ModalButton>
);
export const InformationAlert = () => (
  <ModalButton
    modalTitle="Information Alert"
    centered={true}
    alert={true}
    alertButton={{ buttonLabel: 'Close', className: 'btn-primary btn-lg btn-block' }}
    alertIcon="alert-info"
    onConfirm={action('Alert button click')}
    dialogClassName="alert-wrapper">
    Would you like to exit the app?
  </ModalButton>
);
