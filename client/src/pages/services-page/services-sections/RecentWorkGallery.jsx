import ImageWithLoader from '../../../components/ImageWithLoader';
import servicesAssets from '../../../assets/services-page';

const RecentWorkGallery = () => {
  return (
    <div className="recent-work">
      <div className="recent-work__grid">
        {servicesAssets.recentWork.map((image, index) => (
          <div className="recent-work__item shadow-img" key={index}>
            <ImageWithLoader
              src={image.original}
              placeholderSrc={image.placeholder}
              alt={`Construction work ${index + 1}`}
              className="recent-work__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorkGallery;
