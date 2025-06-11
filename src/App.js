// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LiveClassesSection from "./components/LiveClassesSection";
import CourseGrid from "./components/CourseGrid";
import ContactUs from "./components/contact/ContactUs";
import Courses from "./components/courses/courses.js";
import Pricing from "./components/pricing/pricing.js";
import Placements from "./components/placements/placements";
import Certifications from "./components/certifications/certifications.js";
import Companies from "./components/Companies.js";
import Footer from "./components/footer.js"; // ✅ Import Footer

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
      <Footer /> {/* ✅ Add Footer here so it shows on all pages */}
    </Router>
  );
}

export default App;
