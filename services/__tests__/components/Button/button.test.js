import React from 'react';
import Button from '../../../src/components/Button/Button.jsx';
import { shallow } from 'enzyme';

describe('Button Component', () => {
  it('renders correctly', () => {
      const props={
        variant: 'primary',
        disabled: false,
        outline: false,
        size: undefined,
        className: '',
        onClick: jest.fn(),
        children: undefined,
      };
    const component = shallow(<Button {...props}/>);
    expect(component).toMatchSnapshot();
  });
  it('renders correctly outline as true', () => {
    const props={
      variant: 'secondary',
      disabled: false,
      outline: true,
      size: undefined,
      className: '',
      onClick: jest.fn(),
      children: undefined,
    };
  const component = shallow(<Button {...props}/>);
  expect(component).toMatchSnapshot();
});
});
