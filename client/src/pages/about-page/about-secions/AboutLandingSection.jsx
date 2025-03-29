import { useTranslation } from 'react-i18next';
import aboutAssets from '../../../assets/about-page';
import VideoWithLoader from '../../../components/VideoWithLoader';
import { useLetterAnimation } from '../../../hooks/useLetterAnimation';

const AboutLandingSection = () => {
  const { t } = useTranslation();
  const titleRef = useLetterAnimation();

  return (
    <section className="landingSection">
      <div className="wh-screen">
        <VideoWithLoader
          src={aboutAssets.aboutVideo.src}
          placeholderSrc={aboutAssets.aboutVideo.placeholder}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute-bottom-center mb-12 text-center">
          <h1 className="pageTitle" ref={titleRef}>
            {t('about.landing.title')}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutLandingSection;
