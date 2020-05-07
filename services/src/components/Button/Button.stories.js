import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonSwitch } from '.';
import { withKnobs } from '@storybook/addon-knobs';
import { select, boolean } from '@storybook/addon-knobs';

const wrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};
export default {
  title: 'Button',
  component: Button,
  decorators: [storyFn => <div style={wrapperStyle}>{storyFn()}</div>, withKnobs],
};

export const Variant = () => (
  <>
    <Button onClick={action('clicked')} variant="primary">
      Primary
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="secondary">
      Secondary
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="success">
      Success
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="danger">
      danger
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="warning">
      warning
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="info">
      info
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="light">
      light
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="dark">
      dark
    </Button>
    <br />
    <Button onClick={action('clicked')} variant="link">
      link
    </Button>
    <br />
  </>
);

export const Outline = () => (
  <>
    <Button onClick={action('clicked')} variant="primary" outline>
      Primary
    </Button>
    <Button onClick={action('clicked')} variant="secondary" outline>
      Secondary
    </Button>
    <Button onClick={action('clicked')} variant="success" outline>
      Success
    </Button>
    <Button onClick={action('clicked')} variant="danger" outline>
      danger
    </Button>
    <Button onClick={action('clicked')} variant="warning" outline>
      warning
    </Button>
    <Button onClick={action('clicked')} variant="info" outline>
      info
    </Button>
    <Button onClick={action('clicked')} variant="light" outline>
      light
    </Button>
    <Button onClick={action('clicked')} variant="dark" outline>
      dark
    </Button>
    <Button onClick={action('clicked')} variant="link" outline>
      link
    </Button>
  </>
);
export const Disable = () => (
  <>
    <Button onClick={action('clicked')} variant="primary" disabled>
      Primary
    </Button>
    <Button onClick={action('clicked')} variant="secondary" disabled>
      Secondary
    </Button>
    <Button onClick={action('clicked')} variant="success" disabled>
      Success
    </Button>
    <Button onClick={action('clicked')} variant="danger" disabled>
      danger
    </Button>
    <Button onClick={action('clicked')} variant="warning" disabled>
      warning
    </Button>
    <Button onClick={action('clicked')} variant="info" disabled>
      info
    </Button>
    <Button onClick={action('clicked')} variant="light" disabled>
      light
    </Button>
    <Button onClick={action('clicked')} variant="dark" disabled>
      dark
    </Button>
    <Button onClick={action('clicked')} variant="link" disabled>
      link
    </Button>
  </>
);
export const Size = () => (
  <>
    <Button onClick={action('clicked')} variant="primary">
      Default
    </Button>
    <Button onClick={action('clicked')} variant="primary" size="sm">
      Small
    </Button>
    <Button onClick={action('clicked')} variant="primary" size="lg">
      Large
    </Button>
  </>
);

const buttonOptions2 = [
  { id: '1', label: 'Cost ($)', value: 'Cost' },
  { id: '2', label: 'Retail ($)', value: 'Retail' },
];
export const TwoButtonsSwitch = () => <ButtonSwitch buttonOptions={buttonOptions2} onClick={action('value')} />;

const buttonOptions3 = [
  { id: '1', label: 'Cost ($)', value: 'Cost' },
  { id: '2', label: 'Retail ($)', value: 'Retail' },
  { id: '3', label: 'Retail (%)', value: 'Retail Percentage' },
];
export const ThreeButtonsSwitch = () => (
  <ButtonSwitch buttonOptions={buttonOptions3} onClick={action('value')} />
);
export const LargeButtonSwitch = () => (
  <ButtonSwitch size="lg" buttonOptions={buttonOptions3} onClick={action('value')} />
);

export const ButtonSwitchWithDefaultView = () => (
  <ButtonSwitch defaultView="Retail" buttonOptions={buttonOptions3} onClick={action('value')} />
);

const variant = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];
const size = ['', 'lg', 'sm'];
export const usingKnobs = () => (
  <Button
    onClick={action('clicked')}
    variant={select('variant', variant, 'primary', 'GROUP-ID1')}
    outline={boolean('outline', false, 'GROUP-ID1')}
    disabled={boolean('disable', false, 'GROUP-ID1')}
    size={select('size', size, '', 'GROUP-ID1')}>
    Button
  </Button>
);
