import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import logo from "../../assests/images/logo.png";
import "./footer.css";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* 🔹 Top Section */}
      <div className="footer-top">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p className="footer-address">
              Plot No.65 Flat No. 302, 2nd Floor V5 tower IT HUB Madhapur,
              Hyderabad, Telangana, India - 500032, Telangana State, INDIA
            </p>
            <div className="footer-socials">
              <Link to="#"><FaInstagram size={14} /></Link>
              <Link to="#"><FaFacebookF size={14} /></Link>
              <Link to="#"><FaLinkedinIn size={14} /></Link>
            </div>
          </div>

          {/* Company */}
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="#">Statutory Permissions</Link></li>
              <li><Link to="#">Property Monitoring Services</Link></li>
              <li><Link to="#">Property Documentary Services</Link></li>
              <li><Link to="#">Legal Realty Services</Link></li>
              <li><Link to="#">Property Marketing Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><strong>Phone:</strong></p>
            <p>+91 7993 119 123</p>
            <p>+91 9704 763 725</p>
            <p><strong>Email:</strong> contact@srivaraahigroup.com</p>
          </div>

          {/* App Downloads */}
              <div className="footer-apps">
      <h4>Get the App</h4>

      <Link to="#" className="app-store-btn">
        <div className="app-icon-wrapper">
          <FaApple className="fa-app-icon" />
          <span className="divider"></span>
        </div>
        <div className="app-text">
          <small>Download on the</small>
          <strong>App Store</strong>
        </div>
      </Link>

      <Link to="#" className="app-store-btn">
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
      </div>

      {/* 🔹 Bottom Section */}
      <div className="footer-bottom">
        <p>
          2025 <strong>Sri Varaahi Realty Services LLP</strong>. All rights
          Reserved
        </p>
        <div className="footer-bottom-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Cookie Policy</Link>
        </div>
      </div>

      {/* Scroll to top */}
      <button className="scroll-top" onClick={scrollToTop}>↑</button>
    </footer>
  );
};

export default Footer;
