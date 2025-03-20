import PropTypes from 'prop-types';

import { navLinks } from "../contants/layout";
import { NavLink } from 'react-router-dom';

const NavItems = ({ isMobile, closeMenu }) => {
  return navLinks.map((link) => (
    <li 
      key={link.id} 
      className={isMobile ? "mobile-menu__item" : "header__nav-item"}
    >
      <NavLink
        to={link.path}
        onClick={isMobile ? closeMenu : undefined}
        className={isMobile ? "mobile-menu__link" : "header__nav-link"}
      >
        {link.label}
      </NavLink>
    </li>
  ));
};

NavItems.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default NavItems;
