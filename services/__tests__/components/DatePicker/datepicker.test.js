import React from 'react';
import moment from 'moment-timezone';
import { shallow, mount } from 'enzyme';
import DatePicker from '../../../src/components/DatePicker/DatePicker';

let wrapper = null;
const date = '2020-03-09';

beforeEach(() => {
  wrapper = mount(<DatePicker />);
});

describe('DatePicker Tests', () => {
  it('renders correctly', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('renders with default value', () => {
    wrapper.setProps({ defaultValue: moment(date) });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('disabled', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.render()).toMatchSnapshot();
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

  it('Check if Value in Component state is Updated', () => {
    const shallowWrapper = shallow(<DatePicker />);
    const instance = shallowWrapper.instance();
    expect(shallowWrapper.state('value')).toBe(undefined);
    const newDate = moment();
    instance.updateSelectedDate(newDate);
    expect(moment(shallowWrapper.state('value')).isSame(newDate, 'day')).toBeTruthy();
  });
});
