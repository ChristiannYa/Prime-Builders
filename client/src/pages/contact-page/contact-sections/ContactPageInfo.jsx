import { useTranslation } from 'react-i18next';

const ContactPageInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="contact__info">
      <div className="contact__info-card">
        <h3 className="contact__info-title">
          {t('contact.info.office.title')}
        </h3>
        <p className="contact__info-text">
          {t('contact.info.office.address1')}
        </p>
        <p className="contact__info-text">
          {t('contact.info.office.address2')}
        </p>
      </div>

      <div className="contact__info-card">
        <h3 className="contact__info-title">
          {t('contact.info.contactDetails.title')}
        </h3>
        <p className="contact__info-text">
          {t('contact.info.contactDetails.email')}
        </p>
        <p className="contact__info-text">
          {t('contact.info.contactDetails.phone')}
        </p>
      </div>

      <div className="contact__info-card">
        <h3 className="contact__info-title">{t('contact.info.hours.title')}</h3>
        <p className="contact__info-text">{t('contact.info.hours.weekdays')}</p>
        <p className="contact__info-text">{t('contact.info.hours.saturday')}</p>
        <p className="contact__info-text">{t('contact.info.hours.sunday')}</p>
      </div>
    </div>
  );
};

export default ContactPageInfo;
