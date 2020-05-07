import moment from 'moment-timezone';
import { printError } from './log';

const defaultDayFormat = 'YYYY-MM-DD';

export const isDisabledDate = args => {
  const { range: { from, to } = {}, currentDate, disableDatesMapping, format = defaultDayFormat } = args;

  // If range prop is received, Check if the current Date is between the requested range. If not disable it
  if (from && moment.isMoment(from) && moment(currentDate).isBefore(from)) return true;
  // print Error
  if (from && !moment.isMoment(from)) printError({ text: "Error In DatePicker: Invalid 'from' ", from });
  if (to && moment.isMoment(to) && moment(currentDate).isAfter(to)) return true;
  // print Error
  if (to && !moment.isMoment(to)) printError({ text: "Error In DatePicker: Invalid 'to' ", to });

  // Until here means disableDateFn is not received and current range is undefined || current Date is between the range.
  // Now check if disableDatesMapping is available
  // If available, return true if current date is in the disabled list.If not return false
  if (disableDatesMapping) {
    const dt = currentDate.format(format);
    return disableDatesMapping[dt] || false;
  }

  // Until here means no props are received and return false( not disabled ) by default
  return false;
};

export const getMapping = (datesArr, format = defaultDayFormat) => {
  const mapping = datesArr.reduce((acc, dt) => {
    let date = moment(dt).format(format);
    acc[date] = true;
    return acc;
  }, {});
  return mapping;
};

/*
  This function is to check if an array is upated or not. It receives a mapping( object ) and an array.
  It Checks, if each element in the array is available in the mapping Obj.
  return false If any element is not found.
*/
export const isSameArray = ({ mapping = {}, data = [], format = defaultDayFormat } = {}) => {
  if (Object.keys(mapping).length !== data.length) return false;
  return data.every(date => {
    let dt = moment(date).format(format);
    return mapping[dt] || false;
  });
};
