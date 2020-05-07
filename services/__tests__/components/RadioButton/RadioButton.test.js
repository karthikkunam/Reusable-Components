import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from '../../../src/components/RadioButton';

describe('Radio Component', () => {
  it('renders correctly', () => {
    const props = {
      radioOptions: [{}],
      onClick: jest.fn(),
      className: '',
      checked: false,
    };
    const component = shallow(<RadioButton {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders handleRadioClick correctly', () => {
    const props = {
      radioOptions: [
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
      ],
      onClick: jest.fn(),
      className: '',
      checked: false,
    };
    const component = shallow(<RadioButton {...props} />);
    component
      .find('label')
      .at(0)
      .simulate('click', { handleRadioClick: () => {}, setValue: () => {} });
    expect(component).toMatchSnapshot();
  });
  it('should return null when disabled is true onclick of handleRadioClick', () => {
    const props = {
      radioOptions: [
        {
          label: 'One',
          value: 1,
        },
        {
          label: 'Two',
          value: 2,
          disabled: true,
        },
      ],
      onClick: jest.fn(),
      className: '',
      checked: false,
    };
    const component = shallow(<RadioButton {...props} />);
    component
      .find('label')
      .at(1)
      .simulate('click', { option: { disabled: true } });
    expect(component).toMatchSnapshot();
  });
  it('renders Radio button with default value correctly', () => {
    const props = {
      radioOptions: [
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
      ],
      defaultValue: 1,
      onClick: jest.fn(),
      className: '',
      checked: false,
    };
    const component = shallow(<RadioButton {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders Radio button with checked and disable', () => {
    const props = {
      radioOptions: [
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
          checked: true,
        },
      ],
      defaultValue: 1,
      onClick: jest.fn(),
      className: '',
      checked: false,
    };
    const component = shallow(<RadioButton {...props} />);
    expect(component).toMatchSnapshot();
  });
});
