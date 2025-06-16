import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="header-wrapper">
      <div className="top-banner"></div>
      <div className="navbar">
        <div className="logo">
          <span className="logo-icon">➤</span>
          <span className="logo-text">IQ Sync<sup>®</sup></span>
        </div>

        <div className="dashboard-icon" onClick={toggleMenu}>☰</div>

        <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/contact">Contact Us</Link>
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
