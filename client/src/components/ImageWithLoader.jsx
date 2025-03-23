/*  

Don't apply it to placeholders: 
The placeholder images should load  immediately to provide 
instant visual feedback, so we don't forward the loading="lazy" 
attribute to them.

Above-the-fold images: 
Don't use loading="lazy" for images that appear in the 
initial viewport (above the fold), such as hero images or logos. 
These should load immediately for the best user experience.

*/

import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageWithLoader = ({
  src,
  placeholderSrc,
  alt,
  className = '',
  style = {},
  forceLoading = false,
  ...restProps // Collect all other props like loading="lazy"
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
          className={`image-with-loader ${className} ${
            effectiveLoading ? 'is-loading' : 'is-loaded'
          }`}
          onLoad={handleImageLoaded}
          onError={handleImageError}
          {...restProps} // Include loading="lazy" and any other props
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
