import React from 'react';
import { action } from '@storybook/addon-actions';
import TabsComponent from '.';

export default {
    title: 'TabsComponent',
    component: TabsComponent,
};

const disableTab=[
    {
        eventKey: 'DeliveryStatus',
        title: 'Delivery Status',
        urlParam: 'delivery-status'
    },
    {
      eventKey: 'InvoiceSummary',
      title: 'Invoice Summary',
      urlParam: 'invoice-summary'
    },
    {
      eventKey: 'FinalExceptionReports',
      title: 'Final Exception Reports',
      urlParam: 'final-exception-reports',
      disabled: true
    }
];


const enableTab= [
    {
      eventKey: 'DeliveryStatus',
      title: 'Delivery Status',
      urlParam: 'delivery-status'
    },
    {
      eventKey: 'InvoiceSummary',
      title: 'Invoice Summary',
      urlParam: 'invoice-summary'
    },
    {
      eventKey: 'FinalExceptionReports',
      title: 'Final Exception Reports',
      urlParam: 'final-exception-reports'
    }
  ];

  export const ActiveTabs = () => (
    <TabsComponent
    activeKey= 'DeliveryStatus'
    tabs = {enableTab}
    tabKey = {action('Switched tab')}
    />
  );
  export const TabsWithOneDisableTab = () => (
    <>
    <TabsComponent
    activeKey= 'DeliveryStatus'
    tabs = {disableTab}
    tabKey = {action('Switched tab')}
    />
    </>
  );
