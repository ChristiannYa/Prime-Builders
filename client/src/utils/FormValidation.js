export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = 'Invalid email address';
  }

  // Phone validation (optional)
  if (formData.phone && formData.phone.trim()) {
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      errors.phone = 'Phone number must be 10 digits';
    }
  }

  // Subject validation (optional)
  if (formData.subject && formData.subject.trim()) {
    if (!/^[a-zA-Z0-9 ]*$/.test(formData.subject)) {
      errors.subject = 'Subject can only contain letters, numbers and spaces';
    } else if (formData.subject.length > 100) {
      errors.subject = 'Subject cannot exceed 100 characters';
    }
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};
