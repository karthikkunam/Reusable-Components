/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

export class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.activeKey,
      tabs: props.tabs,
    };
  }

  setKey=(k) => {
    this.setState({ activeKey: k });
    this.props.tabKey(k);
  }

  render() {
    const { activeKey, tabs } = this.state;
    return (
      <Tabs id="controlled-tab-example" activeKey={activeKey} onSelect={k => this.setKey(k)} >
        { tabs && tabs.length > 0 && tabs.map((tab) => {
          return (
            <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title} disabled={tab.disabled}/>
          );
        })
        }
      </Tabs>

    );
  }
}
TabsComponent.displayName = 'Tabs';

TabsComponent.propTypes = {
  activeKey: PropTypes.string,
  tabs: PropTypes.arrayOf( 
    PropTypes.shape({ 
      eventKey: PropTypes.string,
      title:  PropTypes.string,
      urlParam:  PropTypes.string,
      disabled: PropTypes.bool
    }) 
  ), 
  tabKey: PropTypes.func,
};

TabsComponent.defaultProps = {
  activeKey: 'DeliveryStatus',
  tabs: [
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
  ],
  tabKey: () => {}
};

export default TabsComponent;
