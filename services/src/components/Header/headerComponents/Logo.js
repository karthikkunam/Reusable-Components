import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => {
    const {logoClassName} = props;
    return (
        <div className="navbar-brand header-logo-container">
            <span id="header-logo" className={logoClassName} alt="Seven eleven logo"></span>
        </div>
    );
};

Logo.propTypes = {
    logoClassName: PropTypes.string,
};
export default Logo;