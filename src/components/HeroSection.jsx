import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Solve your teacher vacancy<br />
            problem without sacrificing<br />
            teaching quality.
          </h1>
          <p>
            Bring remarkable <span className="highlight">LIVE</span> teaching into any classroom.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">See Courses</button>
            <button className="btn-secondary">
              Watch Video <span className="play-icon">▶</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
