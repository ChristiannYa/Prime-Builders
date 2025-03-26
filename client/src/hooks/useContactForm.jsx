import { useState, useCallback } from 'react';
import { validateContactForm } from '../utils/FormValidation';
import { useRateLimit } from '../utils/useRateLimit';
import { apiClient } from '../utils/apiClient';
import { formInputs } from '../contants/contact-page';

const useContactForm = () => {
  const initialFormState = formInputs.reduce((acc, input) => {
    acc[input.id] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessageSent, setShowMessageSent] = useState(false);

  // Rate limiting, 5 attempts per minute
  const { attempt, isLimited, timeRemaining } = useRateLimit(5, 60000);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  // Simplified to just hide the notification
  const closeMessageSent = useCallback(() => {
    setShowMessageSent(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLimited) {
      setFormErrors({
        submit: `Too many attempts. Please try again in ${timeRemaining} seconds.`,
      });
      return;
    }

    // Validate form
    const errors = validateContactForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Record current attempt
      if (!attempt()) {
        setFormErrors({
          submit: `Too many attempts. Please try again in ${timeRemaining} seconds.`,
        });
        return;
      }

      setIsSubmitting(true);

      try {
        await apiClient.post('/api/contact/submit', formData);

        console.log('Form submitted successfully');

        // Show success notification
        setShowMessageSent(true);

        // Reset form after successful submission
        resetForm();

        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          setShowMessageSent(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormErrors({
          submit:
            error.message || 'Failed to send message. Please try again later.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formData,
    formErrors,
    isSubmitting,
    handleChange,
    handleSubmit,
    formInputs,
    showMessageSent,
    closeMessageSent,
  };
};

export default useContactForm;
