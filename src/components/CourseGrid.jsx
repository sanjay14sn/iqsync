import React from "react";
import CourseCard from "./CourseCard";

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
  return (
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
  );
};

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
};

export default CourseGrid;
