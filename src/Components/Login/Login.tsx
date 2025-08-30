import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onClose: () => void; // ✅ added for modal close
}

const SvgLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="logo-icon"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 14.5l-8-4v6.5l8 4 8-4v-6.5l-8 4z" />
  </svg>
);

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("customer");
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => setActiveTab(tab);

  const ContactForm = () => navigate("/contact");
  const OurTeam = () => navigate("/ourteam");

  const renderForm = () => {
    if (activeTab === "customer") {
      return (
        <>
          <p className="form-subtitle">
            Securely access your real estate dashboard.
          </p>
          <div className="form-group">
            <label htmlFor="mobile" className="input-label">
              Mobile Number
            </label>
            <div className="input-with-country">
              <div className="country-code-container">
                <span>+91</span>
                <div className="country-flag">🇮🇳</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="dropdown-arrow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="mobile"
                className="mobile-input"
                placeholder="Please enter your mobile number."
              />
            </div>
          </div>
          <button className="otp-button" onClick={OurTeam}>
            Request OTP
          </button>
        </>
      );
    } else {
      return (
        <>
          <p className="form-subtitle">
            Access your real estate dashboard securely.
          </p>
          <div className="form-group">
            <label htmlFor="employeeId" className="input-label">
              Employee ID
            </label>
            <input
              type="text"
              id="employeeId"
              className="input-field"
              placeholder="Enter Your Employee Id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="rememberMe" className="checkbox" />
            <label htmlFor="rememberMe" className="checkbox-label">
              Remember me
            </label>
            <a href="#" className="forgot-password-link">
              Forgot password?
            </a>
          </div>
          <button className="otp-button" onClick={ContactForm}>
            Sign In
          </button>
        </>
      );
    }
  };

  return (
    <div className="login-overlay">
      {/* ✅ background overlay */}
      <div className="login-container">
        <div className="login-card">
          <div className="card-left">
            <div className="welcome-text">Welcome!</div>
            <div className="logo-section">
              <div className="logo-box">
                <SvgLogo />
                <div className="logo-text-container">
                  <div className="logo-main-text">SRI VARAAHI</div>
                  <div className="logo-sub-text">REALTY SERVICES LLP</div>
                  <div className="logo-tagline">Realty with Responsibility</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-right">
            {/* ✅ close button works */}
            <div className="close-button" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="close-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="login-form-section">
              <h2 className="form-title">Log In</h2>
              <div className="tab-container">
                <button
                  className={`tab-button ${
                    activeTab === "employee" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("employee")}
                >
                  Employee
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "customer" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("customer")}
                >
                  Customer
                </button>
              </div>
              {renderForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
