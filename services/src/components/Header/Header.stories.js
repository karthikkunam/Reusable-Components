import React from 'react';
import Header from '.';
import { action } from '@storybook/addon-actions';
import ModalButton from '../Modal/ModalButton.jsx';
export default {
  title: 'Header',
  component: Header,
};
import SessionManger from '../Session/SessionManager';

export const headerWithoutLogin = () => <Header />;
export const headerWithLogin = () => <Header headerType="loggedOut" />;

const leftNavItems = [
  {
    leftMenu: 'Home',
    subMenus: [
      {
        header: 'Breadcrumb',
        subMenuList: [
          {
            title: 'Basic Breadcrumb',
            url: '/?path=/story/breadcrumb--basic-bread-crumb',
          },
        ],
      },
      {
        header: 'Button',
        subMenuList: [
          {
            title: 'Button variant',
            url: '/?path=/story/button--variant',
          },
          {
            title: 'Button variant',
            url: '/?path=/story/button--outline',
          },
          {
            title: 'Disabled Button',
            url: '/?path=/story/button--disable',
          },
        ],
      },
    ]
  },
  {
    leftMenu: 'Product Assortment',
    subMenus: [
      {
        header: 'Exception Message',
        subMenuList: [
          {
            title: 'Success exception message',
            url: '/?path=/story/exceptionmessage--success-message',
          },
        ],
      },
    ]
  },
  {
    leftMenu: 'ordering',
  },
  {
    leftMenu: 'Inventory Mangement',
  },
  {
    leftMenu: 'Cash Management',
  },
  {
    leftMenu: 'Payroll',
  },
  {
    leftMenu: 'Gasoline Management',
  },
  {
    leftMenu: 'System Configuration',
  },
];

const leftNavWithTwoItems = [
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
          {
            title: 'page 2 Title',
            url: 'page2',
          },
          {
            title: 'page 3 Title',
            url: 'page3',
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
          {
            title: 'page 5 Title',
            url: 'page5',
          },
        ],
      },
    ],
  },
  {
    leftMenu: 'ordering',
    subMenus: [
      {
        header: 'Header 1',
        subMenuList: [
          {
            title: 'page 6 Title',
            url: 'page6',
          },
          {
            title: 'page 7 Title',
            url: 'page7',
          },
          {
            title: 'page 8 Title',
            url: 'page8',
          },
        ],
      },
      {
        header: 'Header 2',
        subMenuList: [
          {
            title: 'page 9 Title',
            url: 'page9',
          },
          {
            title: 'page 10 Title',
            url: 'page10',
          },
        ],
      },
    ],
  },
  {
    label: 'ordering',
    iconClass: 'icon-ordering',
    url: 'ordering',
  },
];

const otherLink = {
  label: '7HUB',
  url: 'https://fam.7-eleven.com/idp/startSSO.ping?PartnerSpId=ca.ondemand.saml.20.post.7ELEVENINC-Prod',
};

const tokenDetails = {
  refreshTokenUrl: '/7boss/order/auth/refresh/token',
  payLoad: {},
  authorization:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJzZXJ2aWNlQWNjb3VudDMiLCJsYXN0TmFtZSI6Imp1bXBjbG91ZFNlcnZpY2UiLCJ1c2VybmFtZSI6InNhanVtcGNsb3VkM0A3MTEuY29tIiwiZW1haWwiOiJzYWp1bXBjbG91ZDNANzExLmNvbSIsImRldmljZVR5cGUiOiJyZW1vdGVBY2Nlc3MiLCJpc1N1cHBvcnRVc2VyIjpmYWxzZSwiYWxsb3dlZFN0b3JlcyI6W3sic3RvcmVJZCI6IjE4NDczIiwidGltZVpvbmUiOiJDU1QiLCJpc0FjdGl2ZSI6dHJ1ZSwiYWRkcmVzcyI6eyJzdHJlZXRBZGRyZXNzIjoiMTQwNCBXIFBSQVRUIEFWRSIsImNpdHkiOiJDSElDQUdPIiwic3RhdGUiOiJJTCIsInppcCI6IjYwNjI2NDIxNiIsImNvdW50cnkiOiJVUyIsInBob25lIjo3NzM5NzMxNjA3fSwidXNlclR5cGUiOiJTdG9yZSBNYW5hZ2VyIn0seyJzdG9yZUlkIjoiMzcwNjciLCJ0aW1lWm9uZSI6IlBTVCIsImlzQWN0aXZlIjp0cnVlLCJhZGRyZXNzIjp7InN0cmVldEFkZHJlc3MiOiIzOTU2NiBMT1MgQUxBTU9TIiwiY2l0eSI6Ik1VUlJJRVRBIiwic3RhdGUiOiJDQSIsInppcCI6IjkyNTYzIiwiY291bnRyeSI6IlVTIiwicGhvbmUiOjk1MTMwNDc4OTF9LCJ1c2VyVHlwZSI6IlN0b3JlIE1hbmFnZXIifSx7InN0b3JlSWQiOiIzNTQwOCIsInRpbWVab25lIjoiQ1NUIiwiaXNBY3RpdmUiOnRydWUsImFkZHJlc3MiOnsic3RyZWV0QWRkcmVzcyI6IjIwMjEgUyBNQUlOIFNUIiwiY2l0eSI6IktFTExFUiIsInN0YXRlIjoiVFgiLCJ6aXAiOiI3NjI0OCIsImNvdW50cnkiOiJVUyIsInBob25lIjo4MTc3NDEyODAwfSwidXNlclR5cGUiOiJTdG9yZSBNYW5hZ2VyIn0seyJzdG9yZUlkIjoiMzYzNjQiLCJ0aW1lWm9uZSI6IkNTVCIsImlzQWN0aXZlIjp0cnVlLCJhZGRyZXNzIjp7InN0cmVldEFkZHJlc3MiOiI3NzAgVyBMWU5ET04gQiBKT0hOU09OIiwiY2l0eSI6IklSVklORyIsInN0YXRlIjoiVFgiLCJ6aXAiOiI3NTA2MyIsImNvdW50cnkiOiJVUyIsInBob25lIjoyMTQ0OTYwMjE2fSwidXNlclR5cGUiOiJTdG9yZSBNYW5hZ2VyIn0seyJzdG9yZUlkIjoiMzUzNzgiLCJ0aW1lWm9uZSI6IkNTVCIsImlzQWN0aXZlIjp0cnVlLCJhZGRyZXNzIjp7InN0cmVldEFkZHJlc3MiOiI4Mzc1IE4gQkVMVExJTkUgUkQiLCJjaXR5IjoiSVJWSU5HIiwic3RhdGUiOiJUWCIsInppcCI6Ijc1MDYzNjAwNSIsImNvdW50cnkiOiJVUyIsInBob25lIjo5NzI2MjEyMjQ1fSwidXNlclR5cGUiOiJTdG9yZSBNYW5hZ2VyIn1dLCJpYXQiOjE1ODQ2NDUyMzAsImV4cCI6MTU4NDY0NjEzMH0.ca_1LnKHQPuLvV3ioRg-5PVKk1Tc4w5xBVda9Lp8yEGMAjYgSC7t4f4FBHMslZuhjxrp7MGileNouPmZMC4jHx8hM5l-s02VMiN0bFdmHYiBzhsZBVAanOiK-IisWjKVd2U7mLKoUJ3dap3w02nMgewubEuAYQoe5A4Bp1WiZYbW5h0IfzZXWLgFHpLGLjzC5SXAnrNriVsiFxls450fDFCpSQo1ocPBy9SGM7qRhb8rO644Yly1QGo8AhNFshI6SYqMLo0pqT8f-aNJ9no7FEZSgH7Dt2dEiEov73mKFb1zClOBTBZZ2EVpfB4UnS71gvYDS9icMEzpro2WobzUMAut_IFcZ9xm-JATf_enpELaqLw0tPJHweQTLgOM7ueuuzKSYYgabnZz3-8258nRvk8_N2GjpjG6Q3G7jewEvIP5OpP-MEOPnJn6vpWDwGpCi1xDlvaWx2xFKXVzADPTnDvJj3sqcduG46VMod0Xe3Y1mvE7-MiagIwacUqgNj9GclnP1jKuJ5cdQlOit4MXEIO1T4Fas-AUMh-kHu9B_otmSvGX0KXLw4s3Fnnj0Bn7yiZKNgr6CJfb3cJJ_Hv22HelejwH3RVNPJT05RYq9MOvZg4smiy3CQrdE5XDqA6MvhPUuJmD1-SVtulZEhhVzlJKHVR-ukSNl6uJnlO_kDA',
};

const storeDetails = [
  {
    storeId: '54768',
    fullName: '7BOSS User',
  },
];

export const headerAfterLoggedIn = () => (
  <>
    <SessionManger />
    <Header
      headerType="loggedIn"
      leftNavItems={leftNavItems}
      onMenuChange={action('Clicked')}
      otherLink={otherLink}
      logoClassName="navbar-brand-logo header-logo img-fluid"
      storeDetails={storeDetails}
    />
  </>
);
export const headerWithDefaultLeftNav = () => (
  <>
    <SessionManger />
    <Header
      headerType="loggedIn"
      leftNavItems={leftNavItems}
      onMenuChange={action('Clicked')}
      otherLink={otherLink}
      logoClassName="navbar-brand-logo header-logo img-fluid"
      storeDetails={storeDetails}
      defaultLeftNav={0}
    />
  </>
);
export const headerWithTwoHamburgerItems = () => (
  <>
    <SessionManger />
    <Header
      headerType="loggedIn"
      storeDetails={storeDetails}
      leftNavItems={leftNavWithTwoItems}
      onMenuChange={action('Clicked')}
      otherLink={otherLink}
    />
  </>
);
export const HeaderWithoutHamburger = () => (
  <>
    <SessionManger />
    <Header
      headerType="loggedIn"
      leftNavItems={leftNavItems}
      onMenuChange={action('Clicked')}
      otherLink={otherLink}
      logoClassName="navbar-brand-logo header-logo img-fluid"
      hideHamburgerMenu={true}
      storeDetails={storeDetails}
    />
  </>
);
export const HeaderWithoutLeftNav = () => (
  <>
    <SessionManger />
    <Header
      headerType="loggedIn"
      onNavigationChange={action('Clicked')}
      otherLink={otherLink}
      logoClassName= 'navbar-brand-logo header-logo img-fluid'
      storeDetails={storeDetails}
    />
  </>
);

export const headerWithoutStoreIdAndName = () => (
  <>
    <SessionManger tokenDetails={tokenDetails} />
    <Header
      headerType="loggedIn"
      leftNavItems={leftNavWithTwoItems}
      onMenuChange={action('Clicked')}
      otherLink={otherLink}
    />
  </>
);

export const headerWithoutSessionManager = () => (
  <>
    <Header
      headerType="loggedIn"
      leftNavItems={leftNavItems}
      onMenuChange={action('Clicked')}
      otherLink={otherLink}
      logoClassName="navbar-brand-logo header-logo img-fluid"
      hideHamburgerMenu={true}
      storeDetails={storeDetails}
    />
  </>
);
export const headerWithAllHideOptions = () => (
  <Header
    headerType="loggedIn"
    leftNavItems={leftNavItems}
    onMenuChange={action('Clicked')}
    otherLink={otherLink}
    hideHamburgerMenu={true}
    hideClockIn={true}
    hidePrinter={true}
    hideNotifications={true}
    hideOtherLink={true}
    storeDetails={storeDetails}
  />
);

export const headerWithContent = () => (
  <>
    <Header headerType="loggedIn" otherLink={otherLink} storeDetails={storeDetails} />
    <ModalButton
      primaryButton={{ buttonLabel: 'Save Changes', className: 'btn-success' }}
      secondaryButton={{ buttonLabel: 'Close', className: 'btn-secondary' }}
      onModalClose={action('Modal closed')}
    />
  </>
);
