import { isMobile } from 'react-device-detect';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import VideoWithLoader from '../../components/VideoWithLoader';
import homeAssets from '../../assets/home-page';

const HomePage = () => {
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
      '-=1' // Start 1 second(s) before the title animation completes
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
              Crafting Quality, Building Trust
            </h2>
            <h2 className="font-monsterrat max-sm:text-sm">
              Ready to build your dream home? Get a free consultation today!
            </h2>
          </div>
          <div className="text-white flexrow-center gap-x-4">
            <button className="ctaLanding text-normal">123-456-7890</button>
            <button className="ctaLanding text-normal">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
