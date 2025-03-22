import aboutAssets from '../../../assets/about-page';

const AboutLandingSection = () => {
  return (
    <section className="landingSection w-screen relative">
      <img 
        src={aboutAssets.aboutBg} 
        alt="Team members group photo" 
        className="wh-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className='absolute-bottom-center mb-12 text-center z-10'>
        <h1 className='pageTitle'>About Us</h1>
        <h2 className='pageSubtitle'>Building Dreams, One Home at a Time</h2>
      </div>
    </section>
  )
}

export default AboutLandingSection
