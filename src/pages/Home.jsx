// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import hero from '../assets/images/hero.avif';

const Home = () => {
  return (
    <>
<HeroSection
  title="BUILDING STRUCTURES THAT LAST" 
  subtitle="Structural • Architectural • Engineering Consultancy"
  image={hero}
/>
    </>
  );
};

export default Home;