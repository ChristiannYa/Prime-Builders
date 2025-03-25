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
    formInputs,
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

                {formErrors.submit && (
                  <div className="error-message mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {formErrors.submit}
                  </div>
                )}

                <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                  {formInputs.map((input) => (
                    <FormInput
                      key={input.id}
                      label={input.placeholder}
                      id={input.id}
                      type={input.label}
                      name={input.id}
                      value={formData[input.id]}
                      onChange={handleChange}
                      placeholder={`Your ${input.placeholder.toLowerCase()}`}
                      error={formErrors[input.id]}
                      isTextarea={input.label === 'textarea'}
                      rows={input.label === 'textarea' ? '5' : undefined}
                    />
                  ))}

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
