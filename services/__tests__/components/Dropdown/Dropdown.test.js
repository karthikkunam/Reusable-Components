import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../../../src/components/Dropdown';

const defaultProps = {
  id: 'dropdownMenuButton',
  options: [{}],
  ariaExpanded: 'false',
  ariaHaspopup: 'true',
  dataToggle: 'dropdown',
  disabled: false,
};
describe('Dropdown Component', () => {
  it('renders correctly', () => {
    const component = shallow(<Dropdown {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  it('renders Dropdown component with placeholder', () => {
    const props = {
      placeHolder: 'It is a placeholder',
    };
    const component = shallow(<Dropdown {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders Dropdown component with options', () => {
    const props = {
      defaultOptions: [
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
      ],
    };
    const component = shallow(<Dropdown {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders default value in Dropdown', () => {
    const props = {
      value: [
        {
          label: 'No options available',
          value: 'none',
        },
      ],
    };
    const component = shallow(<Dropdown {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders disabled Dropdown', () => {
    const props = {
      disabled: true,
    };
    const component = shallow(<Dropdown {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('Should call handleDropdown function', () => {
    const props = {
      setShowDropdown: jest.fn(),
    };
    const component = shallow(<Dropdown {...defaultProps} {...props} />);
    component
      .find('button')
      .at(0)
      .simulate('click', {
        handleDropdown: () => {},
      });
    expect(component).toMatchSnapshot();
  });
  it('Should call onDropdownSelect function', () => {
    const props = {
      onClick: jest.fn(),
      setDropdownValue: jest.fn(),
      handleDropdown: jest.fn(),
    };
    const component = shallow(<Dropdown {...defaultProps} {...props} />);
    component
      .find('a')
      .at(0)
      .simulate('click', {
        onDropdownSelect: () => {},
      });
    expect(component).toMatchSnapshot();
  });
});
