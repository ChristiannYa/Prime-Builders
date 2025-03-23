import PropTypes from 'prop-types';

const SuccessMessage = ({ show, message }) => {
  if (!show) return null;
  
  return (
    <div className="contact__success-message">
      {message}
    </div>
  );
};

SuccessMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default SuccessMessage;
