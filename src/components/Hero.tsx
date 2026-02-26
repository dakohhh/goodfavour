import './Hero.css';
import { images } from '../images';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden />
      <img
        src={images.studentsLecture}
        alt=""
        className="hero__image"
        aria-hidden
      />
      <div className="container hero__inner">
        <h1 className="hero__title">
          Your Journey to UK Education Starts Here
        </h1>
        <p className="hero__subtitle">
          We guide international and home students into top UK universities and colleges with confidence, clarity, and care.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Apply Now
          </a>
          <a href="#study-uk" className="btn btn-outline">
            Explore UK Universities
          </a>
        </div>
      </div>
    </section>
  );
}
