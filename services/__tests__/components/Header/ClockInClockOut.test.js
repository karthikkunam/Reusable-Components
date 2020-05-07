import React from 'react';
import ClockInClockOut from '../../../src/components/Header/headerComponents/ClockInClockOut';
import { shallow } from 'enzyme';

describe('ClockInClockOut Component', () => {
  it('renders correctly', () => {
    const component = shallow(<ClockInClockOut/>);
    expect(component).toMatchSnapshot();
  });
});

