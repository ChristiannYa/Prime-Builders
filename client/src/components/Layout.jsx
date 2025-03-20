import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './Header.jsx';

import '../styles/Header.scss';

const Layout = () => {
  useEffect(() => {
    const header = document.querySelector('.header');

    if (header) {
      const updateHeight = () => {
        const height = header.offsetHeight;
        document.documentElement.style.setProperty(
          '--header-height',
          `${height}px`
        );
      };

      updateHeight();

      window.addEventListener('resize', updateHeight);
      return () => {
        window.removeEventListener('resize', updateHeight);
      }; 
    }
  });

  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
