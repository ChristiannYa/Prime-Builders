import { useState } from 'react';

const ContactLandingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section className="contact py-26">
      <div className='screen-lg'>
        <div className="flex items-end gap-x-6">
          <div className="contact__content">
            <div className="mb-4">
              <h1 className="pageTitle text-primary">Contact Us</h1>
              <p className="textSubtitle">
                We&apos;d love to hear from you. Fill out the form below and
                we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="contact__form-wrapper bg-white/20">
              {submitSuccess && (
                <div className="contact__success-message">
                  Thank you for your message! We&apos;ll be in touch soon.
                </div>
              )}

              <form
                className="flex flex-col gap-y-2"
                onSubmit={handleSubmit}
              >
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`contact__input ${
                      formErrors.name ? 'contact__input--error' : ''
                    }`}
                  />
                  {formErrors.name && (
                    <span className="contact__error-message">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={`contact__input ${
                      formErrors.email ? 'contact__input--error' : ''
                    }`}
                  />
                  {formErrors.email && (
                    <span className="contact__error-message">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="phone" className="contact__label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={`contact__input ${
                      formErrors.phone ? 'contact__input--error' : ''
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="contact__error-message">
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="5"
                    className={`contact__textarea ${
                      formErrors.message ? 'contact__textarea--error' : ''
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <span className="contact__error-message">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`contact__submit-button ${
                    isSubmitting ? 'contact__submit-button--loading' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Our Office</h3>
              <p className="contact__info-text">123 Construction Way</p>
              <p className="contact__info-text">Building City, ST 12345</p>
            </div>

            <div className="contact__info-card">
              <h3 className="contact__info-title">Contact Information</h3>
              <p className="contact__info-text">
                Email: info@primebuilders.com
              </p>
              <p className="contact__info-text">Phone: (555) 123-4567</p>
            </div>

            <div className="contact__info-card">
              <h3 className="contact__info-title">Business Hours</h3>
              <p className="contact__info-text">Monday - Friday: 8am - 6pm</p>
              <p className="contact__info-text">Saturday: 9am - 2pm</p>
              <p className="contact__info-text">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLandingSection;
