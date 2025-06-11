import React from 'react';
import "./courses.css";

const OurCourses = () => {
  return (
    <div className="courses-container">
      {/* Sized Box - adds vertical space */}
      <div style={{ height: '50px' }}></div>

      {/* Heading */}
      <h1 className="heading">Our Courses</h1>
      <p className="subtext">
        Our courses are meticulously crafted to align with the specific demands<br />
        of the job market, empowering you to kickstart your career.
      </p>

      {/* Search Bar */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="What are you looking For ?" />
      </div>
    </div>
  );
};

export default OurCourses;
