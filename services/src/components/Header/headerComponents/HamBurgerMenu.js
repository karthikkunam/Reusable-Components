import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HamBurgerMenu = props => {
  const [selectedIndex, setSelectedIndex] = useState(props.defaultLeftNav);
  const [selectedMenu, setSelectedMenu] = useState('');
  const { leftNavItems, expanded } = props;

  const onLeftMenuClick = (selectedMenu, subMenus, index) => {
    const { handleLeftMenu } = props;
    handleLeftMenu && handleLeftMenu(subMenus);
    setSelectedIndex(index);
    setSelectedMenu(selectedMenu);
  };
  return (
    <div className="body">
      <ul className="list">
        {leftNavItems &&
          leftNavItems.length > 0 &&
          leftNavItems.map((item, index) => {
            return (
              <li key={item.leftMenu} className="list-item">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown11"
                  aria-controls="navbarNavDropdown11"
                  aria-expanded={expanded}
                  aria-label={`Toggle navigation ${selectedMenu}`}
                  className={`list-item-link ${index === selectedIndex ? 'active' : ''}`}
                  onClick={() => {
                    onLeftMenuClick(item.leftMenu, item.subMenus, index);
                  }}>
                  {item.leftMenu}
                </a>
              </li>
            );
          })}
      </ul>
      <div className="footer">
        <ul className="list logout">
          <li className="list-item">
            <a className="list-item-link">
              <label>logout</label>
            </a>
          </li>
        </ul>
        <div className="version-text">
          <span>Version Information</span>
        </div>
      </div>
    </div>
  );
};
HamBurgerMenu.defaultProps = {
  defaultLeftNav: null,
};

HamBurgerMenu.propTypes = {
  leftNavItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      iconClass: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  defaultLeftNav: PropTypes.number,
  handleLeftMenu: PropTypes.func,
  expanded: PropTypes.bool,
};

export default HamBurgerMenu;
