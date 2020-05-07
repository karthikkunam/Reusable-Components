import React from 'react';
import PropTypes from 'prop-types';

const OtherLinks = props => {
  const {
    link: { url, label },
  } = props;
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link header-name-text 7hub" href={url}>
          {label} <span className="sr-only">(current)</span>
        </a>
      </li>
    </ul>
  );
};



OtherLinks.propTypes = {
  link: PropTypes.objectOf({
    label: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default OtherLinks;
