import React from "react";
import "./ProgramList.css";

const programs = [
  "Data Science",
  "Full Stack Development",
  "AI & Machine Learning",
  "UI/UX Design",
  "Cyber Security",
  "Cloud Computing",
  "DevOps",
  "Digital Marketing",
  "Blockchain",
  "Mobile App Development",
  "AR/VR Development",
  "Web Development",
  "Game Development",
  "Product Management",
  "Big Data Engineering",
];

const ProgramList = () => {
  return (
    <div className="program-container">
      {/* 🖼️ Top image with animated heading */}
      <div className="top-banner">
        <img src="/images/allprograms.jpg" alt="Banner" className="banner-image" />
        <h1 className="banner-text">All Programs</h1>
      </div>

      <div className="program-list">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <div className="image-wrapper">
              <span className="badge">+ Placement Training</span>
              <img
                src="/images/uiux.jpg" // Replace dynamically if needed
                alt={program}
                className="program-image"
              />
            </div>
            <h3>{program}</h3>
            <p>
              {program} is the domain of study that deals with vast volumes of
              data using modern tools and techniques.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramList;
