import React from "react";
import "./getStarted.css";

const GetStarted: React.FC = () => {
  return (
    <section className="getstarted-section">
      <h2 className="getstarted-title">Ready to Get Started?</h2>
      <p className="getstarted-text">
        Lorem ipsum dolor sit amet consectetur. Quis orci natoque aliquet morbi dis. 
        Orci morbi ullamcorper auctor congue tincidunt diam sagittis fringilla ultrices.
      </p>
      <div className="getstarted-buttons">
        <button className="btn-primary">Contact Us</button>
        <button className="btn-outline">Our Services</button>
      </div>
    </section>
  );
};

export default GetStarted;
