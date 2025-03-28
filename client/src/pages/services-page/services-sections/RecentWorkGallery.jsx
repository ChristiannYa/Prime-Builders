import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageWithLoader from '../../../components/ImageWithLoader';
import servicesAssets from '../../../assets/services-page';

gsap.registerPlugin(ScrollTrigger);

const RecentWorkGallery = () => {
  const galleryRef = useRef(null);
  const itemsRef = useRef([]);

  const setItemRef = (el, index) => {
    itemsRef.current[index] = el;
  };

  useEffect(() => {
    const galleryItems = itemsRef.current;

    gsap.set(galleryItems, {
      opacity: 0,
      scale: 0.98,
    });

    galleryItems.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power1.inOut',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="recent-work" ref={galleryRef}>
      <div className="recent-work__grid">
        {servicesAssets.recentWork.map((image) => (
          <div
            className="recent-work__item shadow-img"
            key={image.key}
            ref={(el) => setItemRef(el, image.key)}
          >
            <ImageWithLoader
              src={image.original}
              placeholderSrc={image.placeholder}
              alt={`Construction work ${image.key + 1}`}
              className="recent-work__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorkGallery;
