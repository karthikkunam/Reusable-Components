import React from 'react';
import ErrorPage from '.';

export default {
    title: 'ErrorPage',
    component: ErrorPage
};

export const ErrorFullPage = () => (
    <>
    <ErrorPage 
    header="Session Expired"
    content="Your 7BOSS session has expired. To reconnect, please reboot your browser and login again."
    />
    </>
);

