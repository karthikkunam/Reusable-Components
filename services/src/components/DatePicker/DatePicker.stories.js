import React from 'react';
import moment from 'moment-timezone';
import { DatePicker } from '.';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const Default = () => <DatePicker />;
export const Disabled = () => <DatePicker disabled />;
export const DefaultValue = () => <DatePicker defaultValue={moment().subtract(5, 'd')} />;
export const DisabledDatesAndRange = () => {
  const range = { from: moment().subtract(15, 'd'), to: moment().add(10, 'd') };
  const list = [moment(), moment().subtract(2, 'd'), moment().add(5, 'd')];
  return <DatePicker allowClear={false} range={range} disableDatesList={list} />;
};
export const Format = () => <DatePicker format={'MM/DD/YY'} defaultValue={moment()} />;
export const Footer = () => <DatePicker renderExtraFooter={() => <div>Hello 7Boss</div>} />;
export const Time = () => <DatePicker showTime />;
export const TimeFormat = () => (
  <DatePicker
    allowClear={false}
    format={'MM/DD HH:mm'}
    showTime={{
      format: 'HH:mm',
      hourStep: 5,
    }}
    defaultValue={moment()}
  />
);
export const PlaceHolder = () => <DatePicker showDefaultValue={false} placeholder={'PICK DATE'} />;
export const DifferentSizes = () => (
  <div>
    Large <DatePicker size={'large'} />
    <br />
    Default <DatePicker />
    <br />
    Small <DatePicker size={'small'} />
  </div>
);
export const DateRender = () => {
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
  return <DatePicker dateRender={dateRender} />;
};

export const mode = () => (
  <div>
    Time <DatePicker mode={'time'} />
    <br />
    date <DatePicker mode={'date'} />
    <br />
    month <DatePicker mode={'month'} />
    <br />
    year <DatePicker mode={'year'} />
    <br />
    Decade <DatePicker mode={'decade'} />
  </div>
);
export const YearPicker = () => <DatePicker allowClear={false} picker="year" />;
export const MonthPicker = () => <DatePicker allowClear={false} picker="month" />;
export const WeekPicker = () => <DatePicker allowClear={false} picker="week" />;
