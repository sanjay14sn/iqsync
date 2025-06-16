import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LiveClassesSection from "./components/LiveClassesSection";
import CourseGrid from "./components/CourseGrid";
import ContactUs from "./pages/contact/ContactUs";
import Courses from "./pages/courses/courses.js";
import Pricing from "./pages/pricing/pricing.js";
import Placements from "./pages/placements/placements";
import Certifications from "./pages/certifications/certifications.js";
import Companies from "./components/Companies.js";
import Footer from "./components/footer.js";
import ProgramList from "./pages/programs/ProgramList.jsx";

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
        <Route path="/programs" element={<ProgramList />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
