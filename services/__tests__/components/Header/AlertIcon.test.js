import React from 'react';
import AlertIcon from '../../../src/components/Header/headerComponents/AlertIcon';
import { shallow } from 'enzyme';

describe('AlertIcon Component', () => {
  it('renders correctly', () => {
    const component = shallow(<AlertIcon/>);
    expect(component).toMatchSnapshot();
  });
});