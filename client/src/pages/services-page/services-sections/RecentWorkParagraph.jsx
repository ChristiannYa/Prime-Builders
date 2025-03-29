import { useLetterAnimation } from '../../../hooks/useLetterAnimation';
import { useTranslation } from 'react-i18next';

const ServicesIntroductionSection = () => {
  const { t } = useTranslation();
  const titleRef = useLetterAnimation();

  return (
    <section className="sectionPaddingY bg-white">
      <div className="screen space-y-6">
        <h1
          className="pageTitle text-black text-center text-3xl xl:text-5xl"
          ref={titleRef}
        >
          {t('services.recentWork.title')}
        </h1>

        <p className="text text-black text-justify">
          {t('services.recentWork.description')}
        </p>
      </div>
    </section>
  );
};

export default ServicesIntroductionSection;
