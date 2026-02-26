import './HowItWorks.css';

const steps = [
  { num: 1, title: 'Free Consultation', desc: 'Speak with our advisors to discuss your goals.' },
  { num: 2, title: 'Course & University Selection', desc: 'We help you choose the best options.' },
  { num: 3, title: 'Application Submission', desc: 'We prepare and submit your application.' },
  { num: 4, title: 'Offer & Acceptance', desc: 'Receive and secure your admission.' },
  { num: 5, title: 'Visa & Enrollment Support', desc: 'We guide you until you start your course.' },
];

export function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="how-it-works__steps">
          {steps.map((step, i) => (
            <div key={step.num} className="step">
              <div className="step__num">{step.num}</div>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step__connector" aria-hidden />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
