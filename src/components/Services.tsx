import './Services.css';

const services = [
  {
    title: 'University & College Admission Support',
    items: [
      'Foundation Programmes',
      'Undergraduate Degrees',
      'Postgraduate Degrees (MSc, MA, MBA)',
      'PhD & Research Programmes',
      'Professional Courses',
    ],
    note: 'We help you choose the right course based on your qualifications and career goals.',
  },
  {
    title: 'International Student Support',
    items: [
      'Admission processing',
      'CAS guidance',
      'Visa application support',
      'Statement of Purpose review',
      'Pre-departure briefing',
    ],
  },
  {
    title: 'Home Student Applications',
    items: [
      'UCAS applications',
      'College admissions',
      'Course selection',
      'Clearing support',
      'Career advice',
    ],
  },
  {
    title: 'Scholarship & Funding Advice',
    items: [
      'University scholarships',
      'Partial funding opportunities',
      'Payment plan options',
    ],
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services__grid">
          {services.map((service, i) => (
            <article key={i} className="service-card">
              <div className="service-card__number">{(i + 1).toString().padStart(2, '0')}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {service.note && (
                <p className="service-card__note">{service.note}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
