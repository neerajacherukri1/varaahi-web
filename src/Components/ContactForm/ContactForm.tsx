import React from 'react';
import './contactForm.css';
import { text } from 'stream/consumers';

// SVG Icon components
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

const ContactForm: React.FC = () => {
  return (
    <section className="contact-section">
      {/* Title */}
      <h2 className="contactus-title">
      Co<span className="ntac-underline">ntac</span><span className="t-underline">t</span><span className="us-underline">&nbsp;Us</span>
      </h2>
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in touch</h2>
        <p className="subtitle">We're here to assist you with trusted real estate solutions.</p>

        <div className="info-item">
          <div className="icon-wrapper"><LocationIcon /></div>
          <div className="info-text">
            <h3>Office Address</h3>
            <p>Plot No:55, Flat No. 302, 2nd Floor VS tarex IT HUB, Hitech City, Hyderabad, Telangana, India - 500072, Telangana State, INDIA</p>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-wrapper"><PhoneIcon /></div>
          <div className="info-text">
            <h3>Phone Number</h3>
            <p>+91 7799 111 123</p>
            <p>+91 9704 763 725</p>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-wrapper"><EmailIcon /></div>
          <div className="info-text">
            <h3>Email Address</h3>
            <p>rhonda25@gmail.com</p>
          </div>
        </div>
        
        <div className="info-item">
          <div className="icon-wrapper"><ClockIcon /></div>
          <div className="info-text">
            <h3>Office Hours</h3>
            <p>8 Hours</p>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2>Send Us a message</h2>
        <p className="subtitle">Have a question or need support? Fill out the form below and we'll get back to you shortly.</p>
        <form className="contact-form">
          <input type="text" name="firstName" placeholder="First name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <input type="email" name="email" placeholder="Email" required />
          <select name="services" required>
            <option value="" disabled selected>Services</option>
            <option value="buy">Buying a Home</option>
            <option value="sell">Selling a Home</option>
            <option value="rent">Renting</option>
            <option value="consult">Consultation</option>
          </select>
          <input type="text" name="city" placeholder="City" required />
          <textarea name="message" placeholder="Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;