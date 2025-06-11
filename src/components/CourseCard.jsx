import React, { useState } from "react";

const CourseCard = ({ image, title, languages }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.languages}>🌐 {languages}</p>
        <div style={styles.buttonContainer}>
          <button style={styles.syllabusBtn}>Syllabus</button>
          <button style={styles.knowMoreBtn}>Know More</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "270px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    margin: "16px",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: "8px",
  },
  languages: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  syllabusBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
  },
  knowMoreBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#00C853",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default CourseCard;
