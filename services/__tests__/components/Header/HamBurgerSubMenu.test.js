import React from 'react';
import HamBurgerSubMenu from '../../../src/components/Header/headerComponents/HamBurgerSubMenu';
import { shallow } from 'enzyme';

const props = {
  subMenuItems: [
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
  onMenuChange: jest.fn(),
};

describe('HamBurgerSubMenu Component', () => {
  it('renders correctly', () => {
    const component = shallow(<HamBurgerSubMenu {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('renders navigateURL onClick', () => {
    const component = shallow(<HamBurgerSubMenu {...props} />);
    expect(component).toMatchSnapshot();
    component
      .find('ul')
      .at(0)
      .find('li')
      .at(0)
      .find('a')
      .simulate('click', {
        onSubMenuClick: () => {},
      });
  });
});
