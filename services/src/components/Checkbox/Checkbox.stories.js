import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs';
import Checkbox from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs]
};

export const CheckboxButton = () => (
  <>
    <div> CheckBoxes</div>
    <Checkbox id="dropdown1" label="one" value="one" onChange={action('checked')} />
    <Checkbox id="dropdown2" label="Two" value="two" onChange={action('checked')} />
    <Checkbox id="dropdown3" label="Three" value="three" onChange={action('checked')} />
    <Checkbox id="dropdown4" label="Four" value="four" onChange={action('checked')} />
  </>
);
export const CheckedCheckbox = () => (
  <>
    <div> CheckBoxes with default checked</div>
    <Checkbox id="dropdown1" label="one" checked={true} value="one" onChange={action('checked')} />
    <Checkbox id="dropdown2" label="Two" checked={true} value="two" onChange={action('checked')} />
    <Checkbox id="dropdown2" label="Three" checked={false} value="three" onChange={action('checked')} />
  </>
);
export const DisabledCheckbox = () => (
  <>
    <div> Disabled CheckBox</div>
    <Checkbox id="dropdown1" label="one" checked={false} value="label" onChange={action('checked')} />
    <Checkbox id="dropdown2" label="Two" disabled={true} value="label" onChange={action('checked')} />
  </>
);

export const CheckboxWithoutLabel = () => (
  <>
    <div> CheckBox label from children</div>
    <Checkbox id="dropdown1" checked={false} value="label" onChange={action('checked')}>
      Children
    </Checkbox>
    <Checkbox id="dropdown2" checked={true} value="label" onChange={action('checked')}>
      Children
    </Checkbox>
  </>
);

export const PlayCheckbox = () => (
  <>
    <Checkbox id="dropdown1" label="one" checked={boolean('Checked', false, 'GROUP-ID1')} value="one" onChange={action('checked')} />
  </>
);