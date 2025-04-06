import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getServicesList } from "../../../contants/services-page";
import ImageWithLoader from "../../../components/ImageWithLoader";

gsap.registerPlugin(ScrollTrigger);

const ServicesListSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const translatedServices = getServicesList();
  const containerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 684);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 684);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = Array.from(
      containerRef.current.querySelectorAll(".service-item")
    );

    images.forEach((img) => {
      gsap.set(img, { y: 50, scale: 0.95, opacity: 0 });
    });

    const animatedElements = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedElements.get(entry.target)) {
            const index = images.indexOf(entry.target);
            const staggerDelay = isLargeScreen ? index * 0.3 : 0;

            gsap.to(entry.target, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "ease1.inOut",
              delay: staggerDelay,
              onComplete: () => observer.unobserve(entry.target),
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    images.forEach((img) => {
      animatedElements.set(img, false);
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
      animatedElements.clear();
    };
  }, [isLargeScreen]);

  return (
    <div>
      <div className="p-1">
        <div className="servicesGrid" ref={containerRef}>
          {translatedServices.map((service) => (
            <div
              key={service.id}
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
                  hoveredId === service.id ? "active" : ""
                }`}
              >
                <h3 className="text-white text-lg md:text-xl font-bold text-center">
                  {service.title}
                </h3>
                <p className="text-white text-sm md:text-base text-center">
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
