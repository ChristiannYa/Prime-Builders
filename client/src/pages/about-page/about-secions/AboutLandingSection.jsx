import aboutAssets from '../../../assets/about-page';

const AboutLandingSection = () => {
  return (
    <section className="landingSection w-screen">
      <img 
        src={aboutAssets.aboutBg} 
        alt="Team members group photo" 
        className="wh-full object-cover"
      />
      <div className='absolute-bottom-center mb-12 text-center'>
        <h1 className='pageTitle'>About Us</h1>
        <h2 className='pageSubtitle'>Building Dreams, One Home at a Time</h2>
      </div>
    </section>
  )
}

export default AboutLandingSection 