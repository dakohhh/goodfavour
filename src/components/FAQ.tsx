import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Do you charge for consultation?',
    a: 'Initial consultation is free.',
  },
  {
    q: 'Can you guarantee admission?',
    a: 'Admission decisions are made by universities, but we ensure your application is properly prepared to maximize success.',
  },
  {
    q: 'Do you help with visas?',
    a: 'Yes, we provide full visa guidance for international students.',
  },
  {
    q: 'How long does the process take?',
    a: 'It depends on the university and intake period, but most applications take 2-8 weeks for decisions.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button
                type="button"
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>Q: {item.q}</span>
                <span className="faq__icon" aria-hidden>+</span>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
