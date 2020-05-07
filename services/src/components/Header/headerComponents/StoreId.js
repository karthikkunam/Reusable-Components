import React from 'react';
import PropTypes from 'prop-types';

function StoreId(props) {
  const { storeID } = props;
  return <div>{storeID && <span className="navbar-text header-text">Store: {storeID}</span>}</div>;
}
StoreId.propTypes = {
  storeID: PropTypes.string,
};

StoreId.defaulProps = {
  storeID: '',
};

export default StoreId;
