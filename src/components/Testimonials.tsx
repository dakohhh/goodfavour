import './Testimonials.css';

const testimonials = [
  {
    quote: 'Good Favour Limited made my UK admission process stress-free. From application to visa approval, they supported me all the way.',
    author: 'International Student',
  },
  {
    quote: 'They helped me choose the right course and university. I highly recommend them.',
    author: 'UK Home Student',
  },
];

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <footer className="testimonial-card__author">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
