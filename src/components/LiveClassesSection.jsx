import React from "react";

const LiveClassesSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.titleWrapper}>
        <span style={styles.redDot}></span>
        <h2 style={styles.title}>Live Classes + Placement Guidance</h2>
      </div>
      <p style={styles.subtitle}>
        Join IQ Sync’s real-world project training programs and get expert
        Placement Assistance to launch your tech career with confidence.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  redDot: {
    width: "12px",
    height: "12px",
    backgroundColor: "#FF6B6B",
    borderRadius: "50%",
    display: "inline-block",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1E1E1E",
    margin: 0,
  },
  subtitle: {
    color: "#6c757d",
    fontSize: "16px",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.5",
  },
};

export default LiveClassesSection;
