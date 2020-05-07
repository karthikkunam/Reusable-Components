import React from 'react';
import PropTypes from 'prop-types';
import {
  undefinedString,
} from './BreadCrumbConstants';

export default class BreadCrumb extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.routes,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.routes !== state.routes) {
      return {
        routes: props.routes,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }

  routeChange(href) {
    this.props.routeChangeFromBreadCrumb(href);
    // this.props.history.push(`${backSlashString}${href}`);
  }

  render() {
    const { routes } = this.state;
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {
            routes && routes.length > 0 && routes.map((route, index) => {
              return (
                <li key={route.name} className={index === (routes.length - 1) ? 'active breadcrumb-item ' : 'breadcrumb-item'}>
                  {index !== (routes.length - 1) ?
                    <a key={route.name} onClick={() => { this.routeChange(route.href); }} aria-current="page">
                      {route && route.name ? route.name : undefinedString}
                    </a> :
                    route && route.name ? route.name : undefinedString
                  }
                </li>
              );
            })
          }
        </ol>
      </nav>
    );
  }
}

BreadCrumb.displayName = 'BreadCrumb';

BreadCrumb.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  routeChangeFromBreadCrumb: PropTypes.func
};

BreadCrumb.defaultProps = {
  routes: [{name:'Home', href:'https://www.google.com'}],
};
