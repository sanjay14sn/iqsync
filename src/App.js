import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LiveClassesSection from "./components/LiveClassesSection";
import CourseGrid from "./components/CourseGrid";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <LiveClassesSection />
      <CourseGrid />

      
    </div>
  );
}

export default App;
