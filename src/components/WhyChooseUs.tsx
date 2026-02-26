import './WhyChooseUs.css';
import { images } from '../images';

const points = [
  'Free expert consultation',
  'Step-by-step application guidance',
  'Visa support for international students',
  'Scholarship guidance',
  'Ongoing student support',
];

export function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose">
      <div className="container why-choose__container">
        <div className="why-choose__media">
          <img
            src={images.graduation}
            alt="Students celebrating graduation"
            width={560}
            height={360}
          />
        </div>
        <div className="why-choose__content">
        <h2 className="section-title">Why Choose Good Favour Limited?</h2>
        <p className="why-choose__intro">
          At Good Favour Limited, we believe every student deserves the right guidance to achieve their academic dreams. We provide professional admission support for undergraduate, postgraduate, foundation, and professional courses across the United Kingdom.
        </p>
        <p className="why-choose__tagline">
          We simplify the process — from choosing the right course to securing your admission.
        </p>
        <ul className="why-choose__list">
          {points.map((text) => (
            <li key={text}>
              <span className="why-choose__check" aria-hidden>✓</span>
              {text}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
