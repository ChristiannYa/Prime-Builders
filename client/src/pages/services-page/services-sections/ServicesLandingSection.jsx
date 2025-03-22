import servicesAssets from '../../../assets/services-page';

const ServicesLandingSection = () => {
  return (
    <section className="landingSection w-screen">
      <img
        src={servicesAssets.servicesBg}
        alt="Team members group photo"
        className="wh-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute-bottom-center mb-12 text-center">
        <h1 className="pageTitle">Our Services</h1>
        <h2 className="pageSubtitle">Crafting Quality, Building Trust</h2>
      </div>
    </section>
  );
};

export default ServicesLandingSection;
