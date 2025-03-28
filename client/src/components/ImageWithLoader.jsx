import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageWithLoader = ({
  src,
  placeholderSrc,
  alt,
  className = '',
  style = {},
  ...restProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-loader__container" style={style}>
      {placeholderSrc && !isLoaded && (
        <img
          src={placeholderSrc}
          alt={`${alt} placeholder`}
          className="image-loader__placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`image-loader__image ${className} ${
          isLoaded ? 'image-loader__image--loaded' : ''
        }`}
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        {...restProps}
      />
    </div>
  );
};

ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ImageWithLoader;
