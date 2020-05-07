import React from 'react';
import Header from '../../../src/components/Header/Header.jsx';
import { shallow } from 'enzyme';

const defaultProps = {
  headerType: '',
  logoClassName: '',
  hideHamburgerMenu: false,
  hideClockIn: false,
  hidePrinter: false,
  hideNotifications: false,
  hideOtherLink: false,
  leftNavOpen: false,
  leftNavItems: [
    {
      label: 'home',
      iconClass: 'icon-home',
      url: 'home',
    },
    {
      label: 'inventory management',
      iconClass: 'icon-promotions',
      url: 'inventory-management',
    },
  ],
  onNavigationChange: jest.fn(),
  otherLink: {
    label: '7HUB',
    url: 'https://fam.7-eleven.com/idp/startSSO.ping?PartnerSpId=ca.ondemand.saml.20.post.7ELEVENINC-Prod',
  },
};
describe('Header Component', () => {
  it('renders defaultProps correctly', () => {
    const component = shallow(<Header {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  it('should render storeDetails from props', () => {
    const props = {
      storeDetails: [
        {
          storeId: '54768',
          fullName: '7BOSS',
        },
      ],
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render loggedOut header', () => {
    const props = {
      headerType: 'loggedOut',
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should open leftNavToggle onClick', () => {
    const props = {
      headerType: 'loggedOut',
      leftNavOpen: false
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
    component.find('button').at(0).simulate('click', {
      leftNavToggle: () =>{},
    });
  });
  it('render component without HamburgerMenu', () =>{
    const props = {
      hideHamburgerMenu: true,
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('render component without ClockIn', () =>{
    const props = {
      hideClockIn: true,
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('render component without printer', () =>{
    const props = {
      hidePrinter: true,
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('render component without Notifications', () =>{
    const props = {
      hideNotifications: true,
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('render component without otherLinks', () =>{
    const props = {
      hideOtherLink: true,
    };
    const component = shallow(<Header {...defaultProps} {...props} />);
    expect(component).toMatchSnapshot();
  });
});
