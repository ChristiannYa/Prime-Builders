import useContactForm from '../../../hooks/useContactForm.jsx';
import FormInput from '../../../components/FormInput.jsx';
import FormSuccessMessage from '../../../components/FormSuccessMessage.jsx';
import ContactPageInfo from './ContactPageInfo.jsx';

const ContactLandingSection = () => {
  const {
    formData,
    formErrors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section className="contact min-h-screen">
      <div className="pt-[var(--header-height)] pb-16 max-md:pb-8">
        <div className="screen">
          <div className="contact__container">
            <div className="contact__content">
              <div className="contact__topText">
                <h1 className="pageTitle text-primary">Contact Us</h1>
                <p className="text font-monsterrat">
                  We&apos;d love to hear from you. Fill out the form below and
                  we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="contact__form-wrapper bg-white/20">
                <FormSuccessMessage
                  show={submitSuccess}
                  message="Thank you for your message! We'll be in touch soon."
                />

                <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                  <FormInput
                    label="Full Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    error={formErrors.name}
                  />

                  <FormInput
                    label="Email Address"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    error={formErrors.email}
                  />

                  <FormInput
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    error={formErrors.phone}
                  />

                  <FormInput
                    label="Message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    error={formErrors.message}
                    isTextarea={true}
                    rows="5"
                  />

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

            <ContactPageInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLandingSection;
