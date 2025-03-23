export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  switch (true) {
    case !formData.name.trim():
      errors.name = 'Name is required';
      break;
    default:
      break;
  }

  // Email validation
  switch (true) {
    case !formData.email.trim():
      errors.email = 'Email is required';
      break;
    case !/\S+@\S+\.\S+/.test(formData.email):
      errors.email = 'Email is invalid';
      break;
    default:
      break;
  }

  // Phone validation
  switch (true) {
    case !formData.phone.trim():
      errors.phone = 'Phone number is required';
      break;
    case !/^\d{10}$/.test(formData.phone.replace(/\D/g, '')):
      errors.phone = 'Please enter a valid 10-digit phone number';
      break;
    default:
      break;
  }

  // Message validation
  switch (true) {
    case !formData.message.trim():
      errors.message = 'Message is required';
      break;
    default:
      break;
  }

  return errors;
};
