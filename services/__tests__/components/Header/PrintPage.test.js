import React from 'react';
import PrintPage from '../../../src/components/Header/headerComponents/PrintPage';
import { shallow } from 'enzyme';

describe('PrintPage Component', () => {
  it('renders correctly', () => {
    const component = shallow(<PrintPage />);
    component.find('a').simulate('click', {
      preventDefault: () => {},
    });
    expect(component).toMatchSnapshot();
  });
  it('mocks and calls window.print', () => {
    const component = shallow(<PrintPage />);
    window.print = jest.fn();
    window.print();
    expect(window.print).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });
});
