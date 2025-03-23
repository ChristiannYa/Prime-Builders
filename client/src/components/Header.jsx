import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../contants/layout';

import pageAssets from '../assets/page';
import ImageWithLoader from '../components/ImageWithLoader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty(
          '--header-height',
          `${rect.height}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="logo-wrapper">
        <ImageWithLoader
          src={pageAssets.logo.original}
          placeholderSrc={pageAssets.logo.placeholder}
          alt="Prime Builders Logo"
        />
      </div>

      <nav className="header__nav">
        <button
          className={`header__toggleBtn ${
            isMenuOpen ? 'header__toggleBtn--open' : ''
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="header__toggleBtn-burger"></span>
        </button>

        <ul
          className={`header__nav-list ${
            isMenuOpen ? 'header__nav-list--open' : ''
          }`}
        >
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
