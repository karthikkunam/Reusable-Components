import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '../../../src/components/ErrorPage';

describe('ErrorPage Component', () => {
  it('renders correctly', () => {
    const component = shallow(<ErrorPage/>);
    expect(component).toMatchSnapshot();
  });
});