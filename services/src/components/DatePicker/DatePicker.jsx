// This Component is a wrapper for https://ant.design/components/date-picker/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { DatePicker as AntdDatepicker } from 'antd';
import { printError } from '../../helpers/log';
import { isDisabledDate, getMapping, isSameArray } from '../../helpers/datePicker';

/* The below css files are needed to be imported saperately from antd for DatePicker because jest is unable to read css.js file
in antd Datepicker component for datePicker styles */
import 'antd/es/date-picker/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/tag/style/index.css';
import 'antd/es/style/index.css';
/* END of antd Styles */
import './datepicker.scss';

const defaultDayFormat = 'YYYY-MM-DD';
export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      disableDatesMapping: {},
    };
  }

  updateSelectedDate = date => {
    this.setState({ value: date });
  };

  componentDidMount() {
    const { value, disableDatesList } = this.props;
    value && this.updateSelectedDate(value);
    // create disableDatesMapping if disableDatesList is received
    disableDatesList &&
      Array.isArray(disableDatesList) &&
      disableDatesList.length > 0 &&
      this.createDisableDatesMapping(disableDatesList);
  }

  componentDidUpdate(prevProps) {
    const { value: prevValue } = prevProps;
    const { value: currValue, disableDatesList } = this.props;
    const { disableDatesMapping } = this.state;

    const isDateChanged = !moment(prevValue).isSame(currValue);
    isDateChanged && this.updateSelectedDate(currValue);

    // Update disableDatesMapping if disableDatesList is updated
    if (
      disableDatesList &&
      Array.isArray(disableDatesList) &&
      !isSameArray({ mapping: disableDatesMapping, data: disableDatesList })
    ) {
      this.createDisableDatesMapping(disableDatesList);
    }
  }

  createDisableDatesMapping = data => {
    const mapping = getMapping(data, defaultDayFormat);
    this.setState({ disableDatesMapping: mapping });
  };

  handleChange = value => {
    const { onChange } = this.props;
    this.setState({ value });
    onChange && onChange(value);
  };

  /*
    The below function disables the selected dates.It recieves currentDate( which is everyday in a month ) and returns a bool.
    true  = disable currenDate
    false = enable currentDate
  */
  disabledDate = currentDate => {
    const { range = {}, disabledDate: disabledDateFn } = this.props;
    const { disableDatesMapping = {} } = this.state;

    // First check if disableDate function if received from props
    if (disabledDateFn) return disabledDateFn(currentDate);
    const args = {
      range,
      disableDatesMapping,
      currentDate,
    };
    return isDisabledDate(args);
  };

  getProps = () => {
    /* 
      className, dropdownClassName, popupStyle, bordered, suffixIcon, style, monthCellContentRender
      props are disabled as 7Boss Styles are applied 
    */
    /* eslint-disable */
    const {
      // props not allowed
      bordered,
      className,
      dropdownClassName,
      popupStyle,
      suffixIcon,
      style,
      disabledDate,
      range,
      disableDatesList,
      monthCellContentRender,
      // end of props not allowed
      ...rest
    } = this.props;
    /* eslint-enable */
    let { value } = this.state;
    const props = {
      onChange: this.handleChange,
      disabledDate: this.disabledDate,
      ...rest,
    };

    let { defaultValue } = this.props;

    // validate defaultValue and value
    if (defaultValue && !moment.isMoment(defaultValue)) {
      // print Error
      printError({ text: "Error In DatePicker: 'value' Passed is not a moment", defaultValue });
      defaultValue = moment();
    }
    if (value && !moment.isMoment(value)) {
      value = moment();
      // print Error
      printError({ text: "Error In DatePicker: 'value' Passed is not a moment", value });
    }

    props.value = value;
    props.defaultValue = defaultValue;

    return props;
  };

  render() {
    const allProps = this.getProps();
    return (
      <div className="ant-picker-container">
        <label className="ant-picker-label">Start Date</label>
        <AntdDatepicker {...allProps} />
      </div>
    );
  }
}

DatePicker.defaultProps = {
  showToday: false,
  format: 'MM/DD/YYYY',
};

DatePicker.propTypes = {
  allowClear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  dateRender: PropTypes.func,
  disabled: PropTypes.bool,
  disabledTime: PropTypes.func,
  disabledDate: PropTypes.func,
  disableDatesList: PropTypes.array,
  defaultValue: PropTypes.instanceOf(moment),
  format: PropTypes.string,
  mode: PropTypes.string,
  open: PropTypes.bool,
  onChange: PropTypes.func,
  onOpenChange: PropTypes.func,
  onPanelChange: PropTypes.func,
  onOk: PropTypes.func,
  picker: PropTypes.string,
  placeholder: PropTypes.string,
  range: PropTypes.object,
  renderExtraFooter: PropTypes.func,
  size: PropTypes.string,
  showToday: PropTypes.bool,
  showTime: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  value: PropTypes.instanceOf(moment),
};
