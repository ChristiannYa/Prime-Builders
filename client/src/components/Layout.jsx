import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop.jsx';

import Header from './Header.jsx';
import '../styles/Contact.scss';
import '../styles/ServicesListSection.scss';
import '../styles/Header.scss';

import '../styles/ImageWithLoader.scss';
import '../styles/LoaderOne.scss';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
