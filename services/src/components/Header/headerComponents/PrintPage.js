import React from 'react';

export default class PrintPage extends React.PureComponent {
  PrintPage = e => {
    e.preventDefault();
    window.print();
  };
  render() {
    return <a className="nav-item-icon icon icon-print" href="#" onClick={this.PrintPage} />;
  }
}
