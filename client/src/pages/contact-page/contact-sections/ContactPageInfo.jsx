const ContactPageInfo = () => {
  return (
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
  );
};

export default ContactPageInfo;
