import { useTranslation } from 'react-i18next';

const ServicesIntroductionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="sectionPaddingY bg-white">
      <div className="screen space-y-6">
        <p className="text text-black text-justify">
          {t('services.introduction.description')}
        </p>
      </div>
    </section>
  );
};

export default ServicesIntroductionSection;
