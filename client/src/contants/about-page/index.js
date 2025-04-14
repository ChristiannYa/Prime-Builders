import aboutAssets from "../../assets/about-page";
import i18next from "i18next";

export const getCompanyValues = () => {
  const t = i18next.t;

  return [
    {
      title: t("about.values.latinoHeritage.title"),
      description: t("about.values.latinoHeritage.description"),
    },
    {
      title: t("about.values.customerCentered.title"),
      description: t("about.values.customerCentered.description"),
    },
    {
      title: t("about.values.qualityEfficiency.title"),
      description: t("about.values.qualityEfficiency.description"),
    },
    {
      title: t("about.values.affordablePricing.title"),
      description: t("about.values.affordablePricing.description"),
    },
  ];
};

export const getTeamMembers = () => {
  const t = i18next.t;

  return [
    {
      id: 1,
      name: t("about.team.member1.name"),
      role: t("about.team.member1.role"),
      image: aboutAssets.team.iveth.original,
      image2: aboutAssets.team.enrique.original,
      placeholderImage: aboutAssets.team.iveth.placeholder,
      placeholderImage2: aboutAssets.team.enrique.placeholder,
      description: t("about.team.member1.description"),
    },
  ];
};
