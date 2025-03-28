import ImageWithLoader from '../../../components/ImageWithLoader';
import servicesAssets from '../../../assets/services-page';
import { useLetterAnimation } from '../../../hooks/useLetterAnimation';

const ServicesLandingSection = () => {
  const titleRef = useLetterAnimation({ stagger: 0.1, delay: 0.5 });

  return (
    <section className="landingSection">
      <div className="wh-screen">
        <ImageWithLoader
          src={servicesAssets.services.original}
          placeholderSrc={servicesAssets.services.placeholder}
          className="wh-full object-cover"
          alt="Team members group photo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute-bottom-center mb-12 text-center">
          <h1 className="pageTitle" ref={titleRef}>
            Our Services
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServicesLandingSection;
