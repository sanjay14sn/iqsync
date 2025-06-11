// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LiveClassesSection from "./components/LiveClassesSection";
import CourseGrid from "./components/CourseGrid";
import ContactUs from "./components/contact/ContactUs"; // Make sure this file exists
import Courses from "./components/courses/courses.js"; // Optional placeholder
import Pricing from "./components/pricing/pricing.js"; // Optional placeholder
import Placements from "./components/placements/placements"; // Optional placeholder
import Certifications from "./components/certifications/certifications.js"; // Optional placeholder
import Companies from "./components/Companies.js";

function Home() {
  return (
    <>
      <HeroSection />
      <LiveClassesSection />
      <CourseGrid />
      <Companies />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
