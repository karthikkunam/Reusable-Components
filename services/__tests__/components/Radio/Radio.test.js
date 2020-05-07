import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../../../src/components/Radio';

describe('Dropdown Component', () => {
  it('renders correctly', () => {
    const props = {
      radioOptions: [{}],
      onClick: jest.fn(),
      className: '',
      checked: false,
    };
    const component = shallow(<Radio {...props} />);
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
    const component = shallow(<Radio {...props} />);
    component
      .find('label')
      .at(0)
      .simulate('click', { handleRadioClick: () => {}, setValue: () => {} });
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
    const component = shallow(<Radio {...props} />);
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
    const component = shallow(<Radio {...props} />);
    expect(component).toMatchSnapshot();
  });
});
