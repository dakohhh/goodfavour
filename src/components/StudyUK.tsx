import './StudyUK.css';
import { images } from '../images';

const reasons = [
  'Globally recognized degrees',
  'High academic standards',
  'Multicultural learning environment',
  'Strong career opportunities',
  'Post-study work opportunities',
];

export function StudyUK() {
  return (
    <section className="study-uk" id="study-uk">
      <div className="container">
        <h2 className="section-title">Study in the UK</h2>
        <div className="study-uk__images">
          <img
            src={images.airplane}
            alt="Air travel - start your journey to the UK"
            width={400}
            height={280}
          />
          <img
            src={images.library}
            alt="Students studying in the UK"
            width={400}
            height={280}
          />
          <img
            src={images.campus}
            alt="UK university campus"
            width={400}
            height={280}
          />
        </div>
        <h3 className="study-uk__why">Why Study in the UK?</h3>
        <ul className="study-uk__list">
          {reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className="study-uk__closing">
          The UK remains one of the world's top destinations for quality education.
        </p>
      </div>
    </section>
  );
}
