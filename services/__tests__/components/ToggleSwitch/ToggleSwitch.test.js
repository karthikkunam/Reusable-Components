import React from 'react';
import { shallow } from 'enzyme';
import ToggleSwitch from '../../../src/components/ToggleSwitch/ToggleSwitch.jsx';

const props = {
  toggleOptions: [
    { id: 'first_toggle_md', label: 'Cost ($)', value: 'Cost' },
    { id: 'second_toggle_md', label: 'Retail ($)', value: 'Retail' },
    { id: 'third_toggle_md', label: 'Retail (%)', value: 'Retail Percentage' },
  ],
  onClick: jest.fn(() => {}),
  className: '',
};
describe('ToggleSwitch Component', () => {
  it('renders 2 buttons toggle correctly', () => {
    const props2 = {
      toggleOptions: [
        { id: 'first_toggle', label: 'Cost ($)', value: 'Cost' },
        { id: 'second_toggle', label: 'Retail ($)', value: 'Retail' },
      ],
    };
    const component = shallow(<ToggleSwitch {...props} {...props2} />);
    expect(component).toMatchSnapshot();
  });
  it('renders secondaryView as defaultView for 2 buttons', () => {
    const props1 = {
      defaultId: 'second_toggle',
    };
    const component = shallow(<ToggleSwitch {...props} {...props1} />);
    expect(component).toMatchSnapshot();
  });

  it('renders 3 buttons toggle correctly', () => {
    const component = shallow(<ToggleSwitch {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders secondaryView as defaultView for 3 buttons', () => {
    const props1 = {
      defaultId: 'second_toggle_md',
    };
    const component = shallow(<ToggleSwitch {...props} {...props1} />);
    expect(component).toMatchSnapshot();
  });
  it('should toggle buttons onClick of ', () => {
    const component = shallow(<ToggleSwitch {...props} />);
    component
      .find('input')
      .at(0)
      .simulate('click', {
        onToggleClick: () => {},
        setId: () => {},
      });
    expect(component).toMatchSnapshot();
  });
});
