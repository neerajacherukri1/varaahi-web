import React from "react";
import { Link } from "react-router-dom"; // ✅ use Link instead of <a>
import "./footer.css";
import logo from "../../assests/images/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Left Section - Logo + Address */}
        <div className="footer-logo">
          <img src={logo} alt="Grihda Logo" />
          <p>
            Plot No.55, Flat No. 302, 2nd Floor VS Tarex IT HUB, Hitech City,
            Hyderabad, Telangana, India – 500072, Telangana State, INDIA
          </p>
          <div className="footer-socials">
            <Link to="https://instagram.com" target="_blank">
              <FaInstagram className="fa-icon" />
            </Link>
            <Link to="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="fa-icon" />
            </Link>
            <Link to="https://facebook.com" target="_blank">
              <FaFacebookF className="fa-icon" />
            </Link>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-company">
          <h4>Company</h4>
          <ul>
            <li><Link to="#">About us</Link></li>
            <li><Link to="#">Our Team</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><Link to="#">Statutory Permissions</Link></li>
            <li><Link to="#">Property Monitoring Services</Link></li>
            <li><Link to="#">Property Documentary Services</Link></li>
            <li><Link to="#">Legal Realty Services</Link></li>
            <li><Link to="#">Property Marketing Services</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <strong>Phone:</strong><br />
            +91 7799 111 123<br />
            +91 9704 763 725
          </p>
          <p>
            <strong>Email:</strong><br />
            Contact@Srivaraahigroup.com
          </p>
        </div>

        {/* Right Section - App Downloads */}
        <div className="footer-apps">
          <h4>Get the app</h4>
          <Link to="#">
            <div className="app-icon-wrapper">
              <FaApple className="fa-app-icon" />
              <span className="divider"></span>
            </div>
            <div className="app-text">
              <small>Download on the</small>
              <strong>Apple Store</strong>
            </div>
          </Link>
          <Link to="#">
            <div className="app-icon-wrapper">
              <FaGooglePlay className="fa-app-icon" />
              <span className="divider"></span>
            </div>
            <div className="app-text">
              <small>Get it on</small>
              <strong>Google Play</strong>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          2025 <strong>Sri Varaahi Realty Services LLP</strong>. All rights reserved
        </p>
        <div className="footer-policy">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Cookie Privacy</Link>
        </div>
      </div>

      {/* Back to Top Button */}
      <Link to="#" className="back-to-top">↑</Link>
    </footer>
  );
};

export default Footer;
