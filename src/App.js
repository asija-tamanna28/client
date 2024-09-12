// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { useEffect } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import GraphicDesign from "./pages/GraphicDesign";
import Digitalmarketing from "./pages/Digitalmarketing";
import Webdevelopment from "./pages/Webdevelopment";
import WindowsDevelopment from "./pages/WindowsDevelopment";
import Navbar from "./components/Navbar";

import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PrivacyPolicy from './pages/PrivacyPolicy';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar/>
      <ScrollToTop />
      <div style={{ marginTop: '60px' }}> {/* Adjust margin-top as needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphicDesign" element={<GraphicDesign />} />
          <Route path="/digitalMarketing" element={<Digitalmarketing />} />
          <Route path="/WebDevelopment" element={<Webdevelopment />} />
          <Route path="/WindowsDevelopment" element={<WindowsDevelopment />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
