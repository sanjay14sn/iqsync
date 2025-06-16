import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="header-wrapper">
      {/* Top banner */}
      <div className="top-banner">
        
       
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <span className="logo-icon">➤</span>
          <span className="logo-text">IQ Sync<sup>®</sup></span>
        </div>

        {/* Dashboard/menu icon for small screens */}
        <div className="dashboard-icon" onClick={toggleMenu}>☰</div>

        {/* Navigation links */}
        <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/certifications">Certifications</a>
          <a href="/pricing">Pricing</a>
          <a href="/placements">Placements</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* Contact button (hidden on mobile) */}
        <div className="contact-button">
          <span role="img" aria-label="phone">📞</span>
          <span>Talk to us</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
