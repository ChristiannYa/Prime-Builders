import ServicesLandingSection from "./services-sections/ServicesLandingSection";
import ServicesIntroductionSection from "./services-sections/ServicesIntroductionSection";
import ServicesListSection from "./services-sections/ServicesListSection";

const ServicesPage = () => {
  return (
    <div>
      <ServicesLandingSection />
      <ServicesIntroductionSection />
      <ServicesListSection />
    </div>
  )
}

export default ServicesPage