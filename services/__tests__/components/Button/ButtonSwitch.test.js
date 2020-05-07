import React from 'react';
import { shallow } from 'enzyme';
import ButtonSwitch from '../../../src/components/Button/ButtonSwitch.jsx';

const props = {
  buttonOptions: [
    { id: '1', label: 'Cost ($)', value: 'Cost' },
    { id: '2', label: 'Retail ($)', value: 'Retail' },
  ],
  onClick: jest.fn(() => {}),
  className: '',
};
describe('ButtonSwitch Component', () => {
  it('renders correctly', () => {
    const component = shallow(<ButtonSwitch {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders secondaryView as defaultView', () => {
    const props1={
      defaultView: 'Retail',
    };
    const component = shallow(<ButtonSwitch {...props} {...props1} />);
    expect(component).toMatchSnapshot();
  });
  it('renders size prop', () => {
    const props1={
      size: 'lg',
    };
    const component = shallow(<ButtonSwitch {...props} {...props1} />);
    expect(component).toMatchSnapshot();
  });
  it('should swich buttons', () => {
    const component = shallow(<ButtonSwitch {...props} />);
    component
      .find('input')
      .at(0)
      .simulate('click', {
        onButtonSwitch: () => {}
      });
    expect(component).toMatchSnapshot();
  });
});
