import React from 'react';
import RadioButton from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

const radioOptions = [
  {
    label: 'One',
    value: 1,
  },
  {
    label: 'Two',
    value: 2,
  },
  {
    label: 'Three',
    value: 3,
  },
];
const defaultRadioOptions = [
  {
    label: 'One',
    value: 1,
  },
  {
    label: 'Two',
    value: 2,
  },
  {
    label: 'Three',
    value: 3,
    disabled: true,
  },
];
const disabledRadio = [
  {
    label: 'One',
    value: 1,
    disabled: true,
  },
];

export const DefaultRadioButton = () => (
  <>
    <div> Radio Buttons</div>
    <RadioButton radioOptions={radioOptions} onClick={action('checked')} />
  </>
);
export const RadioButtonWithDefaultValue = () => (
  <>
    <div> Radio Buttons with default value</div>
    <RadioButton radioOptions={defaultRadioOptions} defaultValue={1} onClick={action('checked')} />
  </>
);
export const RadioButtonCheckedDisbaled = () => (
  <>
    <div> Radio Buttons (checked disabled)</div>
    <RadioButton checked={true} radioOptions={disabledRadio} />
  </>
);
export const RadioRightButtons = () => (
  <>
    <div> Radio Right Buttons</div>
    <RadioButton className="radio-right" radioOptions={radioOptions} onClick={action('checked')} />
  </>
);
