import React from "react";
import "./aboutus.css";
import building from "../../../assests/images/building.jpg";
import tablet from "../../../assests/images/tablet.jpg"; 

const AboutUs: React.FC = () => {
  return (
    <section className="aboutus-section ">
      {/* Title */}
      <h2 className="aboutus-title">
        AB
        <span className="ou-underline">OU</span>
        <span className="t-underline">T</span>
        <span> US</span>
      </h2>

      {/* Our Story */}
      <div className="aboutus-container">
        <div className="aboutus-text">
          <h3 className="our-story">Our Story</h3>
          <p>
            Sri Varaahi Realty Services is a Hyderabad-based, professionally managed real
            estate services firm, committed to delivering comprehensive, end-to-end solutions
            in the areas of Regulatory approvals, Legal due diligence, Property Monitoring,
            Technical advisory, Property documentation, and Strategic marketing.
          </p>
          <p>
            With a strong foundation built on integrity, industry expertise, and local
            intelligence, we specialize in assisting a wide spectrum of stakeholders – real
            estate developers, landowners, investors, institutions, and corporate entities –
            to navigate the multi-layered complexities involved in land acquisition,
            development, monitoring and monetization.
          </p>
        </div>

        <div className="aboutus-image">
          <img src={building} alt="About Us" />
        </div>
      </div>

      {/* Our Strengths */}
      <div className="strengths-container">
        <div className="strengths-image">
          <img src={tablet} alt="Our Strengths" />
        </div>
        <div className="strengths-text">
          <h3 className="our-strengths">Our Strengths</h3>
          <p>
            Our strength lies in our in-depth understanding of regional land laws, government
            regulations, and revenue systems across Telangana and Andhra Pradesh. By combining
            this legal acumen with practical field experience, we deliver tailor-made
            solutions that are not only efficient but also safeguard the long-term interests
            of our clients.
          </p>
          <p>
            Whether it’s an individual investor, large-scale township development, a joint
            venture project, an institutional land acquisition, or a private layout approval,
            Sri Varaahi Realty Services offers end-to-end support, ensuring that your real
            estate goals are met with clarity, compliance, and confidence.
          </p>
          <p>
            Let us be your trusted partner in unlocking value from land and property, while
            you focus on growth and development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
