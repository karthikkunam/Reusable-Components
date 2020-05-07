// This Component is a wrapper for https://ant.design/components/date-picker/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { DatePicker } from 'antd';
const { RangePicker: AntdRangePicker } = DatePicker;

import { isDisabledDate, getMapping, isSameArray } from '../../helpers/datePicker';

export default class RangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableDatesMapping: {},
    };
  }

  componentDidMount() {
    const { disableDatesList } = this.props;
    // create disableDatesMapping if disableDatesList is received
    disableDatesList &&
      Array.isArray(disableDatesList) &&
      disableDatesList.length > 0 &&
      this.createDisableDatesMapping(disableDatesList);
  }

  componentDidUpdate() {
    const { disableDatesMapping } = this.state;
    const { disableDatesList } = this.props;
    if (
      disableDatesList &&
      Array.isArray(disableDatesList) &&
      !isSameArray({ mapping: disableDatesMapping, data: disableDatesList })
    ) {
      this.createDisableDatesMapping(disableDatesList);
    }
  }

  createDisableDatesMapping = data => {
    const mapping = getMapping(data);
    this.setState({ disableDatesMapping: mapping });
  };

  /*
    The below function disables the selected dates.It recieves currentDate( which is everyday in a month ) and returns a bool.
    true  = disable currenDate
    false = enable currentDate
  */
  disabledDate = currentDate => {
    const { range = {}, disabledDate: disabledDateFn } = this.props;
    const { disableDatesMapping = {} } = this.state;

    // First check if disableDate function is received from props
    if (disabledDateFn) return disabledDateFn(currentDate);
    // if currentDate is in between the range OR if currentDate is in the disabledMapping, disable it
    const args = {
      range,
      disableDatesMapping,
      currentDate,
    };
    return isDisabledDate(args);
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange && onChange(value);
  };

  getProps = () => {
    /*
      bordered, className, dropdownClassName, popupStyle, suffixIcon, style
      props are disabled as 7Boss Styles are applied
    */
    /* eslint-disable */
    const {
      // props not allowed
      bordered,
      className,
      dropdownClassName,
      suffixIcon,
      popupStyle,
      style,
      disabledDate,
      range,
      presetRanges,
      disableDatesList,
      // end of props not allowed
      ...rest
    } = this.props;
    /* eslint-enable */

    const props = {
      onChange: this.handleChange,
      disabledDate: this.disabledDate,
      ranges: presetRanges,
      ...rest,
    };

    let { defaultValue, defaultValue: [start, end] = [] } = this.props;
    // validate defaultValue
    if (defaultValue && Array.isArray(defaultValue)) {
      if (start && !moment.isMoment(start)) start = undefined;
      if (end && !moment.isMoment(end)) end = undefined;
      props.defaultValue = [start, end];
    }
    return props;
  };

  render() {
    const allProps = this.getProps();
    return (
      <div className="ant-picker-container">
        <label className="ant-picker-label date-start">Start Date</label>
        <label className="ant-picker-label date-end">End Date</label>
        <AntdRangePicker {...allProps} />
      </div>
    );
  }
}

RangePicker.defaultProps = {
  showToday: false,
  format: 'MM/DD/YYYY',
};

RangePicker.propTypes = {
  allowClear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  dateRender: PropTypes.func,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  disabledTime: PropTypes.func,
  disabledDate: PropTypes.func,
  disableDatesList: PropTypes.array,
  defaultValue: PropTypes.array,
  format: PropTypes.string,
  mode: PropTypes.string,
  open: PropTypes.bool,
  onChange: PropTypes.func,
  onOpenChange: PropTypes.func,
  onPanelChange: PropTypes.func,
  onOk: PropTypes.func,
  picker: PropTypes.string,
  placeholder: PropTypes.string,
  presetRanges: PropTypes.object,
  range: PropTypes.object,
  renderExtraFooter: PropTypes.func,
  size: PropTypes.string,
  showToday: PropTypes.bool,
  showTime: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  value: PropTypes.object,
  onCalendarChange: PropTypes.func,
};
