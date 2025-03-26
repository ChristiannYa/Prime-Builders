import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const SuccessNotification = ({
  show,
  message = "Thank you for contacting us. We'll be in contact soon.",
  duration = 10000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInDOM, setIsInDOM] = useState(false);

  useEffect(() => {
    if (show) {
      // First add to DOM, then make visible for animation
      setIsInDOM(true);
      // Small delay to ensure DOM insertion happens before animation
      setTimeout(() => {
        setIsVisible(true);
      }, 10);

      // Auto-hide after duration
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(hideTimer);
    } else {
      // When show becomes false, make invisible first
      setIsVisible(false);
    }
  }, [show, duration, onClose]);

  // Handle animation end - remove from DOM after sliding out
  useEffect(() => {
    if (!isVisible && isInDOM) {
      // Wait for the animation to complete before removing from DOM
      const removeTimer = setTimeout(() => {
        setIsInDOM(false);
      }, 500);

      return () => clearTimeout(removeTimer);
    }
  }, [isVisible, isInDOM]);

  // Don't render anything if not in DOM
  if (!isInDOM) return null;

  return (
    <div
      // 101 as z-index because header has 100
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-[101] w-[300px] sm:w-sm md:w-md lg:w-lg transform transition-all duration-500 ${
        isVisible ? 'translate-y-8 lg:translate-y-12' : '-translate-y-full'
      }`}
    >
      <div className="bg-primary text-text-white p-2 md:p-3 lg:p-4 rounded-lg shadow-lg flex items-start gap-2">
        <div>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="">
          <p className="font-monsterrat">{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
          className="text-white hover:text-white/80"
        >
          <svg
            className="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

SuccessNotification.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func
};

export default SuccessNotification;
