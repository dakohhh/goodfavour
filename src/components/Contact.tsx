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
              <strong>Location:</strong> 35 Stoneycroft Close, London SE12 0SN
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+447958412631">+44 7958 412631</a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:yemiba@yahoo.com">yemiba@yahoo.com</a>
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
