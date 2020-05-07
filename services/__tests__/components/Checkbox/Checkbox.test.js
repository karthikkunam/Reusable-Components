import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../../src/components/Checkbox';

describe('Checkbox Component', () => {
  it('renders correctly', () => {
    const props = {
      id: '',
      disabled: false,
      className: '',
      label: '',
    };
    const component = shallow(<Checkbox {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders handleCheckboxClick correctly', () => {
    const props = {
      id: 'dropdown1',
      disabled: false,
      className: '',
      label: 'One',
      onChange: jest.fn(),
    };
    const component = shallow(<Checkbox {...props} />);
    component
      .find('label')
      .at(0)
      .simulate('change', { target: { checked: true } });
    expect(component).toMatchSnapshot();
  });
  it('should return null when disabled is true onclick of handleCheckboxClick', () => {
    const props = {
      id: 'dropdown1',
      disabled: true,
      className: '',
      label: 'One',
      onChange: jest.fn(),
    };
    const component = shallow(<Checkbox {...props} />);
    component
      .find('label')
      .at(0)
      .simulate('change', { target: { checked: false } });
    expect(component).toMatchSnapshot();
  });
  it('renders Checkbox with default checked', () => {
    const props = {
      id: 'dropdown1',
      disabled: false,
      className: '',
      label: 'One',
      onChange: jest.fn(),
      checked: true,
    };
    const component = shallow(<Checkbox {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders Checkbox with checked and disable', () => {
    const props = {
      id: 'dropdown1',
      disabled: true,
      className: '',
      label: 'One',
      onChange: jest.fn(),
      checked: true,
    };
    const component = shallow(<Checkbox {...props} />);
    expect(component).toMatchSnapshot();
  });
});
