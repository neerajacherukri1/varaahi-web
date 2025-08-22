import React from "react";
import "./aboutus.css";
import building from "../../../assests/images/building.jpg"; 

const AboutUs: React.FC = () => {
  return (
    <section className="aboutus">
   <h2 className="aboutus-title">
  AB<span className="underline">OU</span><span className="underline">T</span> US
</h2>


      <div className="aboutus-content">
        {/* Left Section - Text */}
        <div className="aboutus-text">
          <h3>Our Story</h3>
          <p>
            Sri Varaahi Realty Services is a Hyderabad-based, professionally
            managed real estate services firm, committed to delivering
            comprehensive, end-to-end solutions in the areas of Regulatory
            approvals, Legal due diligence, Property Monitoring, Technical
            advisory, Property documentation, and Strategic marketing.
          </p>
          <p>
            With a strong foundation built on integrity, industry expertise, and
            local intelligence, we specialize in assisting a wide spectrum of
            stakeholders - real estate developers, landowners, investors,
            institutions, and corporate entities - to navigate the multi-layered
            complexities involved in land acquisition, development, monitoring
            and monetization.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="aboutus-image">
          <img src={building} alt="About us building" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
