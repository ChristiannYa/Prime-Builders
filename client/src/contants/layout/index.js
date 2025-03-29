import i18next from 'i18next';

export const getNavLinks = () => {
  const t = i18next.t;

  return [
    {
      id: 1,
      path: '/',
      label: t('header.nav.home'),
    },
    {
      id: 2,
      path: '/about',
      label: t('header.nav.about'),
    },
    {
      id: 3,
      path: '/services',
      label: t('header.nav.services'),
    },
    {
      id: 4,
      path: '/contact',
      label: t('header.nav.contact'),
    },
  ];
};
