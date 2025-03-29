import aboutAssets from '../../assets/about-page';
import i18next from 'i18next';

export const getCompanyValues = () => {
  const t = i18next.t;

  return [
    {
      title: t('about.values.latinoHeritage.title'),
      description: t('about.values.latinoHeritage.description'),
    },
    {
      title: t('about.values.customerCentered.title'),
      description: t('about.values.customerCentered.description'),
    },
    {
      title: t('about.values.qualityEfficiency.title'),
      description: t('about.values.qualityEfficiency.description'),
    },
    {
      title: t('about.values.affordablePricing.title'),
      description: t('about.values.affordablePricing.description'),
    },
  ];
};

export const getTeamMembers = () => {
  const t = i18next.t;

  return [
    {
      id: 1,
      name: t('about.team.member1.name'),
      role: t('about.team.member1.role'),
      image: aboutAssets.team.male1.original,
      placeholderImage: aboutAssets.team.male1.placeholder,
      description: t('about.team.member1.description'),
    },
    {
      id: 2,
      name: t('about.team.member2.name'),
      role: t('about.team.member2.role'),
      image: aboutAssets.team.female1.original,
      placeholderImage: aboutAssets.team.female1.placeholder,
      description: t('about.team.member2.description'),
    },
    {
      id: 3,
      name: t('about.team.member3.name'),
      role: t('about.team.member3.role'),
      image: aboutAssets.team.male2.original,
      placeholderImage: aboutAssets.team.male2.placeholder,
      description: t('about.team.member3.description'),
    },
    {
      id: 4,
      name: t('about.team.member4.name'),
      role: t('about.team.member4.role'),
      image: aboutAssets.team.male3.original,
      placeholderImage: aboutAssets.team.male3.placeholder,
      description: t('about.team.member4.description'),
    },
    {
      id: 5,
      name: t('about.team.member5.name'),
      role: t('about.team.member5.role'),
      image: aboutAssets.team.female2.original,
      placeholderImage: aboutAssets.team.female2.placeholder,
      description: t('about.team.member5.description'),
    },
  ];
};
