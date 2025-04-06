import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithLoader from "../../../components/ImageWithLoader";
import servicesAssets from "../../../assets/services-page";

gsap.registerPlugin(ScrollTrigger);

const RecentWorkGallery = () => {
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
      containerRef.current.querySelectorAll(".recent-work__item")
    );

    images.forEach((img) => {
      gsap.set(img, { scale: 0.9, opacity: 0 });
    });

    const animatedElements = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedElements.get(entry.target)) {
            const index = images.indexOf(entry.target);
            const staggerDelay = isLargeScreen ? index * 0.3 : 0;

            gsap.to(entry.target, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: staggerDelay,
              onComplete: () => observer.unobserve(entry.target),
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px",
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
    <div className="recent-work">
      <div className="recent-work__grid" ref={containerRef}>
        {servicesAssets.recentWork.map((image) => (
          <div className="recent-work__item shadow-img" key={image.key}>
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
