import './About.css';
import { images } from '../images';

const values = [
  'Integrity',
  'Transparency',
  'Professionalism',
  'Student-Centered Service',
  'Excellence',
];

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about__visual">
          <img
            src={images.campus}
            alt="UK university campus"
            width={600}
            height={360}
          />
        </div>
        <h3 className="about__who">Who We Are</h3>
        <p className="about__text">
          Good Favour Limited is an education consultancy dedicated to helping students secure admission into reputable universities and colleges in the United Kingdom.
        </p>
        <p className="about__text">
          We work closely with institutions to ensure that students receive accurate information, proper guidance, and full support throughout their academic journey.
        </p>
        <div className="about__mission">
          <p className="about__mission-text">
            Our mission is simple: <strong>To connect students with life-changing educational opportunities.</strong>
          </p>
        </div>
        <div className="about__vision">
          <h3 className="about__heading">Our Vision</h3>
          <p>
            To become a trusted global recruitment partner known for integrity, excellence, and student success.
          </p>
        </div>
        <div className="about__values">
          <h3 className="about__heading">Our Core Values</h3>
          <ul>
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
