import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const VideoWithLoader = ({ 
  src, 
  placeholderSrc, // Static image from the video
  type = 'video/mp4',
  className = '', 
  style = {},
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...restProps
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Check if video data is already loaded
      if (videoElement.readyState >= 3) {
        setIsLoading(false);
      }
    }
  }, []);

  const handleVideoCanPlay = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="video-loader-container" style={style}>
      {/* Show placeholder image with pulsating effect while video loads */}
      {placeholderSrc && isLoading && (
        <div className="placeholder-container">
          <img
            src={placeholderSrc}
            alt="Video placeholder"
            className="video-placeholder"
          />
          <div className="video-loader-overlay"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="video-error">
          <p>Failed to load video</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          className={`video-with-loader ${className} ${isLoading ? 'is-loading' : 'is-loaded'}`}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
          {...restProps}
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

VideoWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
};

export default VideoWithLoader;
