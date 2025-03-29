import serviceImages from '../../assets/services-page';
import i18next from 'i18next';

export const getServicesList = () => {
  const t = i18next.t;

  return [
    {
      id: 1,
      title: t('services.list.customHome.title'),
      image: serviceImages.customHome.original,
      placeholderImage: serviceImages.customHome.placeholder,
      description: t('services.list.customHome.description'),
      class: 'si-1',
    },
    {
      id: 2,
      title: t('services.list.renovation.title'),
      image: serviceImages.renovation.original,
      placeholderImage: serviceImages.renovation.placeholder,
      description: t('services.list.renovation.description'),
      class: 'si-2',
    },
    {
      id: 3,
      title: t('services.list.outdoor.title'),
      image: serviceImages.outdoor.original,
      placeholderImage: serviceImages.outdoor.placeholder,
      description: t('services.list.outdoor.description'),
      class: 'si-6',
    },
  ];
};
