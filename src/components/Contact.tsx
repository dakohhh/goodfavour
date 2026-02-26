import './Contact.css';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact__lead">Ready to start your journey?</p>
        <div className="contact__info">
          <ul className="contact__details">
            <li>
              <strong>Location:</strong> [Your Office Address]
            </li>
            <li>
              <strong>Phone:</strong> [Your Phone Number]
            </li>
            <li>
              <strong>Email:</strong> [Your Email Address]
            </li>
            <li>
              <strong>Website:</strong>{' '}
              <a href="https://www.goodfavourlimited.com" target="_blank" rel="noopener noreferrer">
                www.goodfavourlimited.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
