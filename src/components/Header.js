import React from "react";
import "./Header.css"; // CSS for styling

const Header = () => {
  return (
    <div className="header-wrapper">
      {/* Top banner */}
      <div className="top-banner">
        <span role="img" aria-label="megaphone" className="megaphone">📣</span>
        <span className="banner-text">
          Master Gen AI Fundamentals & get certified by Microsoft at ₹499
        </span>
      </div>

      {/* Main navbar */}
      <div className="navbar">
        <div className="logo">
          <span className="logo-icon">➤</span>
          <span className="logo-text">IQ Sync<sup>®</sup></span>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/certifications">Certifications</a>
          <a href="/pricing">Pricing</a>
          <a href="/placements">Placements</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="contact-button">
          <span role="img" aria-label="phone">📞</span>
          <span>Talk to us</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
