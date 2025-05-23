import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useContactForm from '../../../hooks/useContactForm.jsx';
import FormInput from '../../../components/FormInput.jsx';
import SuccessNotification from '../../../components/SuccessNotification.jsx';
import ContactPageInfo from './ContactPageInfo.jsx';

const ContactForm = () => {
  const { t } = useTranslation();
  const {
    formData,
    formErrors,
    isSubmitting,
    handleChange,
    handleSubmit,
    formInputs,
    showMessageSent,
    closeMessageSent,
  } = useContactForm();

  const [forceShowNotification, setForceShowNotification] = useState(false);

  const DevTools = () => {
    if (!import.meta.env.DEV) return null;

    return (
      <div className="fixed bottom-4 right-4 z-50 bg-gray-800 text-white p-2 rounded">
        <button
          onClick={() => setForceShowNotification(!forceShowNotification)}
          className="px-2 py-1 bg-secondary-2 rounded"
        >
          {forceShowNotification ? 'Hide' : 'Show'} Notification
        </button>
      </div>
    );
  };

  return (
    <section className="contact min-h-screen">
      <div className="pt-[var(--header-height)] pb-16 max-md:pb-8">
        <div className="screen">
          <div className="contact__container">
            <div className="contact__content">
              <div className="contact__topText">
                <h1 className="pageTitle text-primary">{t('contact.title')}</h1>
                <p className="text font-monsterrat">
                  {t('contact.introduction')}
                </p>
              </div>

              <div className="contact__form-wrapper bg-white/15">
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
                      placeholder={t('contact.form.placeholders.prefix', {
                        field: input.placeholder.toLowerCase(),
                      })}
                      error={formErrors[input.id]}
                      isTextarea={input.label === 'textarea'}
                      rows={input.label === 'textarea' ? '5' : undefined}
                      isRequired={input.isRequired}
                    />
                  ))}

                  <button
                    type="submit"
                    className={`contact__submit-button ${
                      isSubmitting ? 'contact__submit-button--loading' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? t('contact.form.sending')
                      : t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </div>

            <ContactPageInfo />
          </div>
        </div>
      </div>

      {/* Success Notification */}
      <SuccessNotification
        show={(import.meta.env.DEV && forceShowNotification) || showMessageSent}
        onClose={() => {
          closeMessageSent();
          if (import.meta.env.DEV) setForceShowNotification(false);
        }}
        message={t('contact.form.successMessage')}
      />

      <DevTools />
    </section>
  );
};

export default ContactForm;
