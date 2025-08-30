import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assests/images/logo.png";
import { Login } from "../Login/Login"; 

const NavBar: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <Link to="/">
          <img src={logo} alt="Grihda Logo" />
          </Link>
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
              <Link to="/services/legal-checks">Top Legal Checks Before Buying a Property in India</Link>
            </div>
          </div>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
        <div className="navbar-login">
          <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
            LOGIN
          </button>
        </div>
      </header>

      {/* ✅ Popup Login */}
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
    </>
  );
};

export default NavBar;
