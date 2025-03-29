import { useTranslation } from 'react-i18next';

const AboutIntroductionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="sectionPaddingY bg-secondary">
      <div className="screen space-y-4">
        <div className="space-y-2">
          <h3 className="textTitle">Prime Builders CPT</h3>
          <p className="text text-justify">
            {t('about.introduction.description')}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="textTitle">{t('about.whoWeAre.title')}</h3>
          <p className="text text-justify">{t('about.whoWeAre.description')}</p>
        </div>
        <div className="space-y-2">
          <h3 className="textTitle">{t('about.mission.title')}</h3>
          <p className="text text-justify">{t('about.mission.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroductionSection;
