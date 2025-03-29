import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import pageAssets from '../assets/page';
import {
  getQuickLinks,
  getServiceLinks,
  getContactInfo,
  socialLinks,
  getCompanyInfo,
} from '../contants/footer/index';

const Footer = () => {
  const { t } = useTranslation();
  const quickLinks = getQuickLinks();
  const serviceLinks = getServiceLinks();
  const contactInfo = getContactInfo();
  const companyInfo = getCompanyInfo();

  return (
    <footer className="footer">
      <div className="footer__container screen-lg">
        <div className="footer__grid">
          {/* Logo and Company Info */}
          <div className="footer__column footer__column--brand">
            <div className="footer__logo-wrapper">
              <img
                src={pageAssets.logo.original}
                alt={companyInfo.name}
                className="footer__logo"
                loading="lazy"
              />
            </div>
            <p className="footer__company-name textCard">{companyInfo.name}</p>
            <div className="footer__social-links">
              {/* Social Media Icons */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column footer__column--links">
            <h3 className="footer__heading textSubtitle">
              {t('footer.sections.quickLinks')}
            </h3>
            <ul className="footer__link-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__column footer__column--services">
            <h3 className="footer__heading textSubtitle">
              {t('footer.sections.ourServices')}
            </h3>
            <ul className="footer__link-list">
              {serviceLinks.map((service, index) => (
                <li key={index} className="footer__link-item">
                  <span className="footer__text">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__column footer__column--contact">
            <h3 className="footer__heading textSubtitle">
              {t('footer.sections.contactUs')}
            </h3>
            <div className="footer__contact-list">
              {contactInfo.map((info, index) => (
                <p key={index} className="footer__contact-item">
                  <span className="footer__contact-icon">{info.icon}</span>
                  <span className="footer__contact-text">{info.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            {t('footer.copyright', {
              year: new Date().getFullYear(),
              company: companyInfo.name,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
