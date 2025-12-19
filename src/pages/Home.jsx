// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import hero from '../assets/images/hero.avif';  // Your current hero image

const Home = () => {
  return (
    <>
      <HeroSection
        title={
          <>
            <span className="font-bold text-[#D4B65A]">ELEGANT DREAM HOMES</span> & 
            <span className="font-bold text-[#D4B65A]">ICONIC COMMERCIAL SPACES</span>
            <br />
            CRAFTED FOR EXCELLENCE
          </>
        }
        subtitle={
          <>
            <span className="block text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase font-extralight text-[#D4B65A] mb-6">
              BEAM
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl tracking-wide text-gray-200">
              Building Engineering & Architectural Multimind
            </span>
            <span className="block mt-8 text-lg md:text-xl lg:text-2xl tracking-wider text-gray-300">
              Structural • Architectural • Engineering Consultancy
            </span>
          </>
        }
        image={hero}
      />
    </>
  );
};

export default Home;