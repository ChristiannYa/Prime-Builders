import { isMobile } from 'react-device-detect';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import VideoWithLoader from '../../components/VideoWithLoader';
import homeAssets from '../../assets/home-page';

const HomePage = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(titleRef.current, { scale: 0 });
    gsap.set(contentRef.current, { opacity: 0 });

    tl.to(titleRef.current, {
      scale: 1,
      duration: 2,
      ease: 'power3.out',
      delay: 0.5,
    }).to(
      contentRef.current,
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      },
      '-=1'
    );
  }, []);

  return (
    <div
      className={
        isMobile ? 'landingSection' : 'w-full h-screen overflow-hidden'
      }
    >
      <VideoWithLoader
        src={homeAssets.homeVideo.src}
        placeholderSrc={homeAssets.homeVideo.placeholder}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="dark-glass text-center w-full p-2 absolute-bottom-center">
        <h1
          ref={titleRef}
          className="text-text-white textShadow font-bonanova text-super"
        >
          Prime Builders cpt
        </h1>
        <div ref={contentRef} className="space-y-1">
          <div className="text-text-white font-nunito text-medium">
            <h2 className="font-bonanova max-sm:text-sm">
              {t('home.tagline')}
            </h2>
            <h2 className="font-monsterrat max-sm:text-sm">
              {t('home.callToAction')}
            </h2>
          </div>
          <div className="text-white flexrow-center gap-x-4">
            <button className="ctaLandingNover text-normal">
              123-456-7890
            </button>
            <Link to="/contact" className="ctaLandingHover text-normal">
              {t('home.contactButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
