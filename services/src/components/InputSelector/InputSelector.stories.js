import React from 'react';
import { action } from '@storybook/addon-actions';
import InputSelector from '.';
import { withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: InputSelector,
  decorators: [storyFn => <div>{storyFn()}</div> , withKnobs],
};

export const defaultInputSelector = () => (
  <InputSelector onChange={action('onchanged')} onBlur={action('onBlured')} />
);

export const InputWithLabel = () => (
  <InputSelector
    label="I am label"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
  />
);

export const InputWithHelperText = () => (
  <InputSelector
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    helpText="I am helper text"
  />
);

export const AcceptsPositiveInteger = () => (
  <InputSelector
    subType="positiveInteger"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    label="Enter the ID"
    helpText="I accept integers only"
  />
);

export const AcceptsFloat = () => (
  <InputSelector
    subType="float"
    label="Enter the Price"
    helpText="I accept floats"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    onEnter={action('onEnter')}
  />
);

export const SetPrecision = () => (
  <InputSelector
    subType="float"
    label="Enter the Speed of car"
    precision={4}
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    helpText="The precision is now 4"
  />
);
export const WithBorder = () => (
  <InputSelector
    label="Enter the amount"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    helpText="I have border now"
    onEnter={action('onEnter')}
    border
  />
);
export const CurrencyFormat = () => (
  <InputSelector
    subType="currency"
    label="Enter the amount"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    helpText="The amount can have cents"
    onEnter={action('onEnter')}
  />
);

export const CurrencyFormatPositive = () => (
  <InputSelector
    subType="currency"
    label="Enter the amount"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    helpText="The amount can have cents"
    onEnter={action('onEnter')}
    positive
  />
);

export const SetIcon = () => (
  <InputSelector
    subType="positiveInteger"
    label="Search ID"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    icon="search"
  />
);

export const onEnter = () => (
  <InputSelector
    subType="positiveInteger"
    label="Search ID"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    icon="search"
    onEnter={action('onEnter')}
  />
);

export const onFocus = () => (
  <InputSelector
    subType="positiveInteger"
    label="Search ID"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    icon="search"
    onFocus={action('onFocus')}
  />
);

const status = ['','error', 'warning', 'success'];
export const WithStatus = () => (
  <InputSelector
    subType="positiveInteger"
    label="Search ID"
    onChange={action('onchanged')}
    onBlur={action('onBlured')}
    icon="search"
    status={select('status', status, '', 'GROUP-ID1')}
    helpText="Some thing went wrong"
  />
);
