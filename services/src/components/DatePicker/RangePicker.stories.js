import React from 'react';
import moment from 'moment-timezone';
import { RangePicker } from '.';

export default {
  title: 'RangePicker',
  component: RangePicker,
};

export const Default = () => <RangePicker />;
export const Disabled = () => (
  <div>
    <h6>From and To Disabled </h6>
    <br />
    <RangePicker disabled defaultValue={[moment(), moment().add(1, 'week')]} />
    <br />
    <h6> From Enabled and To Disabled( fixed To Date )</h6>
    <br />
    <RangePicker disabled={[false, true]} defaultValue={[moment(), moment().add(1, 'week')]} />
  </div>
);
export const Format = () => <RangePicker format={'MM/DD/YY'} />;
export const Footer = () => <RangePicker renderExtraFooter={() => <div>Hello 7Boss</div>} />;
export const Time = () => <RangePicker showTime />;
export const TimeFormat = () => (
  <RangePicker
    allowClear={false}
    format={'MM/DD HH:mm'}
    showTime={{
      format: 'HH:mm',
      hourStep: 5,
    }}
  />
);
export const DifferentSizes = () => (
  <div>
    <b>Large </b>
    <br />
    <br />
    <RangePicker size={'large'} />
    <br />
    <b>Default </b> <br />
    <br />
    <RangePicker />
    <br />
    <b>Small </b> <br />
    <br />
    <RangePicker size={'small'} />
  </div>
);
export const mode = () => (
  <div>
    <h4>Picker Pannel Mode: Cannot pick other modes</h4>
    <b>Time </b>
    <br />
    <br />
    <RangePicker mode={'time'} />
    <br />
    <b>Date </b>
    <br />
    <br /> <RangePicker mode={'date'} />
    <br />
    <b>Month </b>
    <br />
    <br />
    <RangePicker mode={'month'} />
    <br />
    <b>Year </b>
    <br />
    <br />
    <RangePicker mode={'year'} />
    <br />
    <b>Decade </b>
    <br />
    <br />
    <RangePicker mode={'decade'} />
  </div>
);
export const YearPicker = () => <RangePicker allowClear={false} picker="year" />;
export const MonthPicker = () => <RangePicker allowClear={false} picker="month" />;
export const WeekPicker = () => <RangePicker allowClear={false} picker="week" />;
export const DefaultValue = () => <RangePicker defaultValue={[moment(), moment().add(5, 'd')]} />;
export const presetRanges = () => {
  const presetRanges = {
    Today: [moment(), moment()],
    'This Week': [moment().startOf('week'), moment().endOf('week')],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
  };
  return <RangePicker presetRanges={presetRanges} />;
};
export const DisabledDatesAndRange = () => {
  const range = { from: moment().subtract(20, 'd'), to: moment().add(20, 'd') };
  const list = [moment().subtract(10, 'd'), moment().subtract(2, 'd'), moment().add(5, 'd'), moment().add(15, 'd')];
  return <RangePicker allowClear={false} range={range} disableDatesList={list} />;
};
export const DisabledTime = () => {
  const disabledTime = (date, type) => {
    const today = moment().format('YYYY-MM-DD');
    const selectedDay = date && date.format('YYYY-MM-DD');
    if (today === selectedDay) {
      return {
        disabledHours: () => [1, 3, 5, 7, 9, 11, 22, 23],
        disabledMinutes: () => [5, 25, 45],
        disabledSeconds: () => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      };
    }
    if (type === 'start') {
      return {
        disabledHours: () => [2, 5],
        disabledMinutes: () => [10, 20, 30],
        disabledSeconds: () => [50, 51, 52, 53],
      };
    }
    return {
      disabledHours: () => [0, 12],
      disabledMinutes: () => [0, 60],
      disabledSeconds: () => [0, 100],
    };
  };
  return <RangePicker allowClear={false} showTime={true} disabledTime={disabledTime} />;
};
