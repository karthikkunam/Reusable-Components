import React from 'react';
import Dropdown from '.';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const options = [
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  },
];
const defaultOptions = [
  {
    label: 'Select an option',
    value: 'none',
  },
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  },
];
const value = {
  label: 'No options available',
  value: 'none',
};
const placeHolder = 'It is a placeholder';

export const DropdownWithPlaceholder = () => <Dropdown placeHolder={placeHolder} options={options} />;
export const DropdownWithOptions = () => <Dropdown options={defaultOptions} />;
export const DropdownWithoutOptions = () => <Dropdown value={value} />;
export const DisabledDropdown = () => <Dropdown disabled={true} options={defaultOptions} />;
