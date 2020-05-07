import React from 'react';
import Logo from '../../../src/components/Header/headerComponents/Logo';
import { shallow } from 'enzyme';

describe('Logo Component', () => {
  it('renders correctly', () => {
    const props = {
      logoClassName: 'navbar-brand-logo header-logo img-fluid',
    };
    const component = shallow(<Logo props={props} />);
    expect(component).toMatchSnapshot();
  });
});
