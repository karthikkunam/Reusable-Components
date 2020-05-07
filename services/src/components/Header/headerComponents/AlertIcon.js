import React from 'react';

export default class AlertIcon extends React.PureComponent {
  render() {
    return (
      <a className="nav-item-icon alert-icon-container slide-out" id="sidebarCollapse" href="#">
        <span className="alert-icon">
          <span className="alert-icon-circle">
            <span className="alert-icon-count">3</span>
          </span>
        </span>
        <span className="icon icon-bell" />
      </a>
    );
  }
}
