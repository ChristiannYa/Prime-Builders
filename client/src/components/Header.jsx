import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from '../contants/layout';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div>
        LOGO
      </div>
      <nav className="header__nav">
        <button 
          className={`header__toggleBtn ${isMenuOpen ? "header__toggleBtn--open" : ""}`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="header__toggleBtn-burger"></span>
        </button>

        <ul className={`header__nav-list ${isMenuOpen ? "header__nav-list--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id} className="header__nav-item">
              <NavLink to={link.path} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
