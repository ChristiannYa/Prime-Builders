import { Link } from 'react-router-dom';
import pageAssets from '../assets/page';
import { 
  quickLinks, 
  serviceLinks, 
  contactInfo, 
  socialLinks, 
  companyInfo 
} from '../contants/footer/index';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-6">
      <div className="screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Logo and Company Info */}
          <div className="flexcol space-y-2">
            <div className="logo-footer-wrapper">
              <img src={pageAssets.logo.original} alt="" className='w-24 max-md:w-16' loading='lazy' />
            </div>
            <p className="textCard">
              {companyInfo.name}
            </p>
            <div className="flex space-x-2">
              {/* Social Media Icons */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flexcol space-y-2">
            <h3 className="textSubtitle">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="textCard hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flexcol space-y-2">
            <h3 className="textSubtitle">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="textCard hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flexcol space-y-2">
            <h3 className="textSubtitle">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <p key={index} className="textCard flex items-start">
                  {info.icon}
                  {info.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 py-4 max-md:py-2 border-t border-secondary-2 text-center">
          <p className="text-small text-text-white/60 font-nunito">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
