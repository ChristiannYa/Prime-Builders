import ServicesLandingSection from "./services-sections/ServicesLandingSection";
import ServicesIntroductionSection from "./services-sections/ServicesIntroductionSection";
import ServicesListSection from "./services-sections/ServicesListSection";
import RecentWorkParagraph from './services-sections/RecentWorkParagraph';
import RecentWorkGallery from './services-sections/RecentWorkGallery';

const ServicesPage = () => {
  return (
    <div>
      <ServicesLandingSection />
      <ServicesIntroductionSection />
      <ServicesListSection />
      <RecentWorkParagraph />
      <RecentWorkGallery />
    </div>
  );
};

export default ServicesPage