import React from "react";
import "./testimonials.css";
import testimg1 from '../../../assests/images/testmonialimg1.png';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Cameron Williamson",
    role: "Designer",
    text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:testimg1,

  },
  {
    name: "Jenny Wilson",
    role: "Project Manager",
    text: "This platform made managing real estate projects so easy. The monitoring and documentation services are very professional and efficient.",
    image: testimg1,
  },
  {
    name: "Robert Fox",
    role: "Investor",
    text: "Very reliable service for property monitoring and approvals. I feel confident knowing my investments are in safe hands.",
    image: testimg1,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      {/* Title with split underline */}
      <h2 className="testimonials-title">
        Our{" "}T
        <span className="esti-underline">esti</span>
        <span className="m-underline">m</span>
        <span>onials</span>
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <span className="quote">❝</span>
            </div>
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-role">{t.role}</p>
            <p className="testimonial-text">{t.text}</p>
            <button className="testimonial-button">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
