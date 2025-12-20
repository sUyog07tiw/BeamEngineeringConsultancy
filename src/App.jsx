// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';                  // Fixed capitalization
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FullHomeConstruction from './pages/FullHomeConstruction';  // Added import
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/full-home-construction" 
            element={<FullHomeConstruction />} 
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;