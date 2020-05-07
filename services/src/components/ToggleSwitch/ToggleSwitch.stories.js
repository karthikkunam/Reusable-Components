import React from 'react';
import { action } from '@storybook/addon-actions';
import ToggleSwitch from '.';

export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
};

const toggleOptions2 = [
  { id: 'first_toggle', label: 'Cost ($)', value: 'Cost' },
  { id: 'second_toggle', label: 'Retail ($)', value: 'Retail' },
];
export const TwoToggleSwitch = () => <ToggleSwitch toggleOptions={toggleOptions2} onClick={action('toggled')} />;

const toggleOptions = [
  { id: 'first_toggle_md', label: 'Cost ($)', value: 'Cost' },
  { id: 'second_toggle_md', label: 'Retail ($)', value: 'Retail' },
  { id: 'third_toggle_md', label: 'Retail (%)', value: 'Retail Percentage' },
];
export const ThreeToggleSwitch = () => <ToggleSwitch toggleOptions={toggleOptions} onClick={action('toggled')} />;

export const ToggleSwitchWithDefaultView = () => (
  <ToggleSwitch defaultId="second_toggle_md" toggleOptions={toggleOptions} onClick={action('toggled')} />
);
