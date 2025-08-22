import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assests/images/logo.png";

const NavBar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Grihda Logo" />
      </div>
      <nav className="navbar-links">
        <Link to="/about">ABOUT US</Link>
        <Link to="/team">OUR TEAM</Link>
        <div className="dropdown">
          <button className="dropbtn">
            SERVICES <span>▼</span>
          </button>
          <div className="dropdown-content">
            <Link to="/services/statutory-permissions">Statutory Permissions</Link>
            <Link to="/services/property-monitoring">Property Monitoring Services</Link>
            <Link to="/services/property-documentary">Property Documentary Services</Link>
            <Link to="/services/legal-realty">Legal Realty Services</Link>
            <Link to="/services/property-marketing">Property Marketing Services</Link>
          </div>
        </div>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
      <div className="navbar-login">
        <button className="login-btn">LOGIN</button>
      </div>
    </header>
  );
};

export default NavBar;
