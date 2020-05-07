import React from 'react';
import moment from 'moment-timezone';
import { mount } from 'enzyme';
import RangePicker from '../../../src/components/DatePicker/RangePicker';

let wrapper = null;
const date = '2020-03-09';

beforeEach(() => {
  wrapper = mount(<RangePicker />);
});

describe('RangePicker Tests', () => {
  it('renders correctly', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('renders with default Value', () => {
    wrapper.setProps({ defaultValue: [moment(date), moment(date).add(1, 'd')] });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('disabled', () => {
    wrapper.setProps({ disabled: [false, true] });
    expect(wrapper.render()).toHaveLength(1);
  });
  it('allowClear', () => {
    wrapper.setProps({ allowClear: true });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('autoFocus', () => {
    wrapper.setProps({ autoFocus: true });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('dateRender', () => {
    const dateRender = currentDate => {
      let style = {};
      if (currentDate.date() === 1) {
        style.border = '1px solid #107f62';
        style.borderRadius = '50%';
      }
      return (
        <div className="ant-picker-cell-inner" style={style}>
          {currentDate.date()}
        </div>
      );
    };
    wrapper.setProps({ dateRender });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('showTime', () => {
    wrapper.setProps({ showTime: true });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('format', () => {
    wrapper.setProps({ format: 'MM/DD/YY' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('mode', () => {
    wrapper.setProps({ mode: 'year' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('picker', () => {
    wrapper.setProps({ picker: 'year' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('onOpenChange', () => {
    wrapper.setProps({ onOpenChange: status => console.log('onOpenChange', status) });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('onPanelChange', () => {
    wrapper.setProps({ onPanelChange: (value, mode) => console.log('onPanelChange', value, mode) });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('onOk', () => {
    wrapper.setProps({ showTime: true, onOk: () => console.log('onOk') });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('placeholder', () => {
    wrapper.setProps({ placeholder: 'Pick Date' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('renderExtraFooter', () => {
    const renderExtraFooter = () => <div />;
    wrapper.setProps({ renderExtraFooter });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('size', () => {
    wrapper.setProps({ size: 'large' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('showToday', () => {
    wrapper.setProps({ showToday: true });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('presetRanges', () => {
    const presetRanges = {
      Today: [moment(date), moment(date)],
      'This Week': [moment(date).startOf('week'), moment(date).endOf('week')],
      'This Month': [moment(date).startOf('month'), moment(date).endOf('month')],
    };
    wrapper.setProps({ presetRanges });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('onCalendarChange', () => {
    const onCalendarChange = () => console.log('onCalendarChange');
    wrapper.setProps({ onCalendarChange });
    expect(wrapper.render()).toMatchSnapshot();
  });
});
