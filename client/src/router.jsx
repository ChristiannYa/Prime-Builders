import { createBrowserRouter } from 'react-router-dom';

// Main pages
import HomePage from './pages/home-page/HomePage.jsx';
import AboutPage from './pages/about-page/AboutPage.jsx';
import ServicesPage from './pages/services-page/ServicesPage.jsx';
import ContactPage from './pages/contact-page/ContactPage.jsx';

import NotFoundPage from './pages/NotFoundPage.jsx';
import Layout from './components/Layout.jsx';

const routes = [
  {
    index: true,
    element: <HomePage/>
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: routes,
  }
])

export default router