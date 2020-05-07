import React from 'react';
import PropTypes from 'prop-types';

function EmployeeName(props) {
  const { employeeName } = props;
  return (
    <span className="navbar-nav header-info-container ml-auto">
      {employeeName && <span className="navbar-text header-name-text">Hi {employeeName}</span>}
    </span>
  );
}

EmployeeName.propTypes = {
  employeeName: PropTypes.string,
};

export default EmployeeName;
