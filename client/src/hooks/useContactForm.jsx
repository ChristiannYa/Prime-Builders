import { useState, useCallback } from "react";
import { validateContactForm } from "../utils/FormValidation";
import { useRateLimit } from "../utils/useRateLimit";
import { apiClient } from "../utils/apiClient";
import { getFormInputs } from "../contants/contact-page";
import { useTranslation } from "react-i18next";

const useContactForm = () => {
  const { t } = useTranslation();
  const formInputs = getFormInputs();

  const initialFormState = formInputs.reduce((acc, input) => {
    acc[input.id] = "";
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

  const closeMessageSent = useCallback(() => {
    setShowMessageSent(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLimited) {
      setFormErrors({
        submit: t("contact.form.errors.tooManyAttempts", { timeRemaining }),
      });
      return;
    }

    const errors = validateContactForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (!attempt()) {
        setFormErrors({
          submit: t("contact.form.errors.tooManyAttempts", { timeRemaining }),
        });
        return;
      }

      setIsSubmitting(true);

      try {
        await apiClient.post("/api/contact/submit", formData);
        console.log("Form submitted successfully");

        setShowMessageSent(true);
        resetForm();
        setTimeout(() => {
          setShowMessageSent(false);
        }, 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setFormErrors({
          submit: error.message || t("contact.form.errors.submitFailed"),
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
