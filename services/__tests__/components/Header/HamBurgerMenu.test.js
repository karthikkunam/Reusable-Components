import React from 'react';
import HamBurgerMenu from '../../../src/components/Header/headerComponents/HamBurgerMenu';
import { shallow } from 'enzyme';

// const onNavigationChange = jest.fn();
const props = {
  leftNavItems: [
    {
      leftMenu: 'home',
      subMenus: [
        {
          header: 'Header 1',
          subMenuList: [
            {
              title: 'page 1 Title',
              url: 'page1',
            },
          ],
        },
        {
          header: 'Header 2',
          subMenuList: [
            {
              title: 'page 4 Title',
              url: 'page4',
            },
          ],
        },
      ],
    },
  ],
  handleLeftMenu: jest.fn(),
};

describe('HamBurgerMenu Component', () => {
  it('renders correctly', () => {
    const component = shallow(<HamBurgerMenu {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders onLeftMenuClick onClick', () => {
    const component = shallow(<HamBurgerMenu {...props} />);
    expect(component).toMatchSnapshot();
    component
      .find('li')
      .at(0)
      .find('a')
      .simulate('click', {
        onLeftMenuClick: () => {},
      });
  });
});
