import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
import CourseCard from "./CourseCard";
import "./CourseGrid.css";

const courses = [
  {
    title: "Data Science Course",
    image: "/images/data-science.jpg",
    languages: "Tamil, English & Hindi",
  },
  {
    title: "Full Stack Development Course with AI Tools",
    image: "/images/fullstack.jpg",
    languages: "Tamil, English, Hindi & Telugu",
  },
  {
    title: "UI/UX Design Course",
    image: "/images/uiux.jpg",
    languages: "Tamil, English, Hindi & Telugu",
  },
  {
    title: "Business and Marketing Analytics with AI Tools",
    image: "/images/marketing.png",
    languages: "Tamil, English & Hindi",
  },
];

const CourseGrid = () => {
  const navigate = useNavigate(); // ✅ initialize

  const handleExploreClick = () => {
    navigate("/programs"); // ✅ navigate to /programs
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            image={course.image}
            languages={course.languages}
          />
        ))}
      </div>

      <button className="explore-button" onClick={handleExploreClick}>
        Explore All Programs
      </button>
    </div>
  );
};


const styles = {
  wrapper: {
    textAlign: "center",
    padding: "40px 20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  },
};

export default CourseGrid;
