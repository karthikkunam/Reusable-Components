import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HamBurgerSubMenu = props => {
  const [selectedUrl, setSelectedUrl] = useState(props.defaultSubNav);
  const { subMenuItems } = props;

  const onSubMenuClick = href => {
    const { onMenuChange } = props;
    onMenuChange && onMenuChange(href);
    setSelectedUrl(href);
  };

  return (
    <div className="body">
      {subMenuItems &&
        subMenuItems.length > 0 &&
        subMenuItems.map(subMenu => {
          return (
            <div key={subMenu.header}>
              <div className="header">{subMenu.header}</div>
              <ul className="list">
                {subMenu.subMenuList &&
                  subMenu.subMenuList.length > 0 &&
                  subMenu.subMenuList.map(item => {
                    return (
                      <li key={item.title} className="list-item">
                        <a
                          href={item.url}
                          className={`list-item-link menu-open level-1-link ${
                            item.url === selectedUrl ? 'active' : ''
                          }`}
                          onClick={() => {
                            onSubMenuClick(item.url);
                          }}>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}
      {/* <div className="footer">
        <div className="logout"></div>
        <div className="version-text">
          <span>Inventory Version</span>
          <span>1.1.2.3.5.6</span>
        </div>
      </div> */}
    </div>
  );
};
HamBurgerSubMenu.defaultProps = {
  defaultSubNav: null,
};
HamBurgerSubMenu.propTypes = {
  subMenuItems: PropTypes.arrayOf({}),
  onMenuChange: PropTypes.func,
  defaultSubNav: PropTypes.string,
};

export default HamBurgerSubMenu;
