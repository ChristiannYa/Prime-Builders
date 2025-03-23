const HomePage = () => {
  return (
    <div className="landingSection">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/home-video-compressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="dark-glass text-center w-full p-2 absolute-bottom-center">
        <h1 className="text-text-white textShadow font-bonanova text-super">
          Prime Builders cpt llc
        </h1>
        <div className="space-y-1">
          <div className="text-text-white font-nunito text-medium">
            <h2 className="font-monsterrat max-sm:text-sm">
              Crafting Quality, Building Trust
            </h2>
            <h2 className="font-monsterrat max-sm:text-sm">
              Ready to build your dream home? Get a free consultation today!
            </h2>
          </div>
          <div className="text-white flexrow-center gap-x-4">
            <button className="ctaLanding text-normal">123-456-7890</button>
            <button className="ctaLanding text-normal">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
