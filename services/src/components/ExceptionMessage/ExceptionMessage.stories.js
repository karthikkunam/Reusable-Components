import React from 'react';
import ExceptionMessage from '.';

export default {
    title: 'ExceptionMessage',
    component: ExceptionMessage,
};

const successMessage = ['All deliveries have been checked-in. Good job!'];
const infoMessage = ['There are no deliveries available for check-in at this time'];
const errorMessage = ['There seems to be a problem with the network.', 'Please check your connection and try again.'];

export const SuccessMessage = () => (
    <ExceptionMessage
        messageType="success"
        messageHeader="All Available Deliveries Checked-in"
        messageInfo={successMessage}
    />
);

export const InfoMessage = () => (
    <ExceptionMessage
        messageType="info"
        messageHeader="No Deliveries"
        messageInfo={infoMessage}
    />
);
export const ErrorMessage = () => (
    <ExceptionMessage
        messageType="error"
        messageHeader="Connection Error"
        messageInfo={errorMessage}
    />
);
