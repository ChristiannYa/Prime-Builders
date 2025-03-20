import { createBrowserRouter } from 'react-router-dom';

// Main pages
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

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