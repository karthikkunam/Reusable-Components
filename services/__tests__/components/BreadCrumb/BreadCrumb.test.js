import React from 'react';
import { shallow } from 'enzyme';
import BreadCrumb from '../../../src/components/BreadCrumb';

const props = {
  routes: [
    { name: 'Home', href: 'https://getbootstrap.com/docs/4.0/components/breadcrumb/#' },
    { name: 'Products', href: 'home/products' },
  ],
  routeChangeFromBreadCrumb: jest.fn(),
};
describe('BreadCrumb Component', () => {
  it('renders correctly', () => {
    const component = shallow(<BreadCrumb {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('Should call routeChange function', () => {
    const component = shallow(<BreadCrumb {...props} />);
    component
      .find('ol')
      .at(0)
      .find('li')
      .at(0)
      .find('a')
      .simulate('click', {
        routeChange: () => {},
      });
    expect(component).toMatchSnapshot();
  });
});
