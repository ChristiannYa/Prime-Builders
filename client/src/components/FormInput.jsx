import PropTypes from 'prop-types';

const FormInput = ({
  label,
  id,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  isTextarea = false,
  rows,
  isRequired = false,
}) => {
  const inputClasses = `${
    isTextarea ? 'contact__textarea' : 'contact__input'
  } ${
    error
      ? isTextarea
        ? 'contact__textarea--error'
        : 'contact__input--error'
      : ''
  }`;

  return (
    <div className="contact__form-group">
      <label htmlFor={id} className="contact__label">
        {label} {isRequired && <span className="text-text-white">*</span>}
      </label>

      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || '5'}
          className={inputClasses}
          // No required attribute to use custom validation
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
          // No required attribute to use custom validation
        />
      )}

      {error && <span className="contact__error-message">{error}</span>}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  isTextarea: PropTypes.bool,
  rows: PropTypes.number,
  isRequired: PropTypes.bool,
};

export default FormInput;
