const formatToCurrency = x => {
  let value = x;
  if (value) {
    if (value === '-') {
      return value;
    }
    if (value === '0.0' || value === '-0.0') {
      return '';
    }
    //check for negative (-)
    const isNegativeNumber = value.indexOf('-') > -1 ? true : false;
    //strip the -ve sign
    if (isNegativeNumber) {
      value = value.replace(/-/g, '');
    }
    //strip the '.'
    const integer = value.replace(/\./g, '');
    const result = integer && integer.match(/^[0-9]*$/) ? parseInt(integer) / 100 : 0;
    return isNegativeNumber ? '-' + result.toFixed(2) : result.toFixed(2);
  } else {
    return '';
  }
};
export default formatToCurrency;
