import { servicesList } from '../../../contants/services-page';
import { useState, useEffect, useRef } from 'react';
import ImageWithLoader from '../../../components/ImageWithLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesListSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const servicesRef = useRef([]);

  useEffect(() => {
    servicesRef.current = servicesRef.current.slice(0, servicesList.length);
  }, []);

  useEffect(() => {
    const elements = servicesRef.current.filter((item) => item);

    if (elements.length === 0) return;

    elements.forEach((element) => {
      gsap.set(element, {
        opacity: 0,
        y: 50,
        scale: 0.8,
      });

      gsap.to(element, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=50',
          end: 'top center',
          toggleActions: 'play none none none',
          // markers: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="p-1">
        <div className="servicesGrid">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (servicesRef.current[index] = el)}
              className={`${service.class} service-item relative overflow-hidden shadow-lg cursor-pointer`}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <ImageWithLoader
                src={service.image}
                placeholderSrc={service.placeholderImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300"
                loading="lazy"
              />
              <div
                className={`service-overlay absolute inset-0 dark-glass flexcol-center p-4 transition-opacity duration-300 ${
                  hoveredId === service.id ? 'active' : ''
                }`}
              >
                <h3 className="text-white text-xl font-bold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-white text-sm text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesListSection;
