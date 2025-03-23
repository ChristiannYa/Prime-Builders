import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageWithLoader = ({ 
  src, 
  placeholderSrc,
  alt, 
  className = '', 
  style = {},
  forceLoading = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoaded = () => {
    if (!forceLoading) {
      setIsLoading(false);
    }
  };

  const handleImageError = () => {
    if (!forceLoading) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const effectiveLoading = forceLoading || isLoading;

  return (
    <div className="image-loader-container" style={style}>
      {/* Show placeholder image with pulsating effect */}
      {placeholderSrc && effectiveLoading && (
        <div className="placeholder-container">
          <img
            src={placeholderSrc}
            alt={`${alt} placeholder`}
            className="image-placeholder"
          />
          <div className="image-loader-overlay"></div>
        </div>
      )}
      
      {hasError && !forceLoading ? (
        <div className="image-error">
          <p>Failed to load image</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`image-with-loader ${className} ${effectiveLoading ? 'is-loading' : 'is-loaded'}`}
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  forceLoading: PropTypes.bool,
};

export default ImageWithLoader;
