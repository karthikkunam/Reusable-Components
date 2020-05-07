import React from 'react';
import PropTypes from 'prop-types';
import './styles/Header.scss';
import HamBurgerMenu from './headerComponents/HamBurgerMenu';
import Logo from './headerComponents/Logo';
import StoreId from './headerComponents/StoreId';
import EmployeeName from './headerComponents/EmployeeName';
import ClockInClockOut from './headerComponents/ClockInClockOut';
import PrintPage from './headerComponents/PrintPage';
import AlertIcon from './headerComponents/AlertIcon';
import OtherLinks from './headerComponents/OtherLinks';
import { logIn } from '../../constants';
import HamBurgerSubMenu from './headerComponents/HamBurgerSubMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNavOpen: false,
      showSubMenu: false,
      storeDetails: [{ storeId: '', fullName: '' }],
      subMenuItems: [],
    };
  }

  componentDidMount() {
    if (this.props.headerType !== 'loggedIn') {
      sessionStorage.removeItem('storeInfo');
    } else {
      this.setStoreDetails();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.storeDetails !== prevProps.storeDetails) {
      if (this.props.headerType !== 'loggedIn') {
        sessionStorage.removeItem('storeInfo');
      } else {
        this.setStoreDetails();
      }
    }
  }

  setStoreDetails = () => {
    let getSessionStoreInfo = null;
    if (this.props.storeDetails) {
      sessionStorage.removeItem('storeInfo');
      this.setState({ storeDetails: this.props.storeDetails });
    } else {
      if (window.sessionStorage.getItem('storeInfo')) {
        getSessionStoreInfo = JSON.parse(window.sessionStorage.getItem('storeInfo'));
      }
    }
    if (!getSessionStoreInfo) {
      return;
    }
    this.setState({ storeDetails: getSessionStoreInfo });
  };

  leftNavToggle = () => {
    const { leftNavItems } = this.props;
    if (leftNavItems && leftNavItems.length > 0) {
      this.setState({
        leftNavOpen: !this.state.leftNavOpen,
      });
    }
  };

  handleLeftMenu = subMenus => {
    const { leftNavOpen } = this.state;
    if (subMenus && leftNavOpen) {
      this.setState({ subMenuItems: subMenus, showSubMenu: true });
    }
  };

  render() {
    const { leftNavOpen, storeDetails, subMenuItems, showSubMenu } = this.state;
    const {
      headerType,
      logoClassName,
      hideHamburgerMenu,
      hideClockIn,
      hidePrinter,
      hideNotifications,
      hideOtherLink,
      leftNavItems,
      onMenuChange,
      otherLink,
      defaultLeftNav,
      defaultSubNav,
    } = this.props;

    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top logged-in">
          <div className="container">
            {headerType === 'loggedIn' && !hideHamburgerMenu && (
              <button
                onClick={this.leftNavToggle}
                className={`navbar-toggler navbar-toggler-left${!leftNavOpen ? ' collapsed' : ''}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown1"
                aria-controls="navbarNavDropdown1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="icon icon-hamburger"></span>
              </button>
            )}
            <Logo logoClassName={logoClassName} />
            {headerType === 'loggedIn' && (
              <div id="navbarNavDropdown" className="collapse navbar-collapse header-info">
                <StoreId storeID={storeDetails[0].storeId} />
                <EmployeeName employeeName={storeDetails[0].fullName} />
                {!hideClockIn && <ClockInClockOut />}
                <ul className="navbar-nav image-container">
                  {!hidePrinter && (
                    <li className="nav-item">
                      <PrintPage />
                    </li>
                  )}
                  {!hideNotifications && (
                    <li className="nav-item">
                      <AlertIcon />
                    </li>
                  )}
                </ul>
                {!hideOtherLink && <OtherLinks link={otherLink} />}
              </div>
            )}
            {headerType === 'loggedOut' && (
              <button type="submit" className="btn btn-sm btn-outline-primary">
                {logIn}
              </button>
            )}
          </div>
        </nav>
        {/* SIDE NAV MENU LEFT */}
        <div id="navbarNavDropdown1" className={`sidenav left ${leftNavOpen && 'show'}`}>
          <div className="container level-0">
            <HamBurgerMenu
              leftNavItems={leftNavItems}
              handleLeftMenu={this.handleLeftMenu}
              defaultLeftNav={defaultLeftNav}
              expanded={leftNavOpen}
            />
          </div>
          <div id="navbarNavDropdown11" className={`container level-1 ${showSubMenu && leftNavOpen && 'show'}`}>
            <HamBurgerSubMenu subMenuItems={subMenuItems} onMenuChange={onMenuChange} defaultSubNav={defaultSubNav} />
          </div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  logoClassName: PropTypes.string,
  headerType: PropTypes.string,
  hideHamburgerMenu: PropTypes.bool,
  hideClockIn: PropTypes.bool,
  hidePrinter: PropTypes.bool,
  hideNotifications: PropTypes.bool,
  hideOtherLink: PropTypes.bool,
  leftNavItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      iconClass: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  defaultLeftNav: PropTypes.number,
  defaultSubNav: PropTypes.string,
  storeDetails: PropTypes.objectOf({
    storeId: PropTypes.string,
    fullName: PropTypes.string,
  }),
  onMenuChange: PropTypes.func,
  otherLink: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  logoClassName: 'navbar-brand-logo header-logo img-fluid',
  hideHamburgerMenu: false,
  hideClockIn: false,
  hidePrinter: false,
  hideNotifications: false,
  hideOtherLink: false,
  otherLink: {
    label: '7HUB',
    url: 'https://fam.7-eleven.com/idp/startSSO.ping?PartnerSpId=ca.ondemand.saml.20.post.7ELEVENINC-Prod',
  },
};

export default Header;
