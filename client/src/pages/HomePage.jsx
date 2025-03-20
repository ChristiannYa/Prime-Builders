const HomePage = () => {
  return (
    <div className="h-[calc(100vh-var(--header-height))] w-full overflow-hidden">
       <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover"
      >
        <source src="/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* here */}
      <div className="text-center space-y-4 max-sm:w-full px-8 mt-[var(--header-height)] absolute-middle">
        <h1 className="text-text-white textShadow font-bonanova text-big">
          Prime Builders CPT
        </h1>
        <div className="space-y-1">
          <div className='text-text-white font-crimson text-medium'>
            <p>
              We create durable, beautiful, and custom-built homes with a
              passion for excellence and attention to detail.
            </p>
            <h2>
              Ready to build your dream home? Get a free consultation today!
            </h2>
          </div>
          <div className='text-white flexrow-center gap-x-4'>
            <button className='ctaLanding text-normal'>123-456-7890</button>
            <button className='ctaLanding text-normal'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
