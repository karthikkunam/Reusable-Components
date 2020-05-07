import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../../../src/components/Tabs';

const props = {
  activeKey: 'DeliveryStatus',
  tabs: [
    {
      eventKey: 'DeliveryStatus',
      title: 'Delivery Status',
      urlParam: 'delivery-status',
    },
    {
      eventKey: 'InvoiceSummary',
      title: 'Invoice Summary',
      urlParam: 'invoice-summary',
    },
    {
      eventKey: 'FinalExceptionReports',
      title: 'Final Exception Reports',
      urlParam: 'final-exception-reports',
    },
  ],
  tabKey: () => {},
};
describe('Tabs Component', () => {
  it('renders correctly', () => {
    const component = shallow(<Tabs {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders setKey when onSelect is triggered', () => {
    const component = shallow(<Tabs {...props} />);
    component
      .find('#controlled-tab-example')
      .at(0)
      .simulate('select', {
        setKey: () => {},
      });
    expect(component).toMatchSnapshot();
  });
});
