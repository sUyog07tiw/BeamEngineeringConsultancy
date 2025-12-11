// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      {/* HERO – Navy Blue + Gold */}
      <section className="relative h-screen bg-[#0A1A2F] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0f2744] to-[#0A1A2F]"></div>

        <div className="relative text-center px-6 md:px-8 z-10">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white">
            BEAM
          </h1>

          <div className="flex items-center justify-center mt-8">
            <div className="h-px bg-[#D4B65A] w-32 md:w-44"></div>
            <p className="mx-8 text-[#D4B65A] text-base md:text-lg tracking-[0.6em] uppercase font-light">
              ENGINEERING CONSULTANCY
            </p>
            <div className="h-px bg-[#D4B65A] w-32 md:w-44"></div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              size="lg"
              to="/services"
              className="bg-transparent border-2 border-[#D4B65A] text-white hover:bg-[#D4B65A] hover:text-[#0A1A2F] transition"
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              to="/contact"
              className="bg-[#D4B65A] text-[#0A1A2F] hover:bg-white transition"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN SECTION – 100% PERFECTLY CENTERED */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Title – Perfectly Centered */}
          <h2 className="text-center text-5xl md:text-7xl lg:text-8xl font-thin text-[#0A1A2F] leading-tight mb-16">
            Precision Engineering.<br className="hidden md:block" />
            Global Standards.
          </h2>

          {/* Description – Centered */}
          <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-24">
            Advanced structural analysis. Seismic-resistant design. Precision-driven project delivery.<br className="hidden md:block" />
            We engineer solutions that stand the test of time.
          </p>

          {/* Stats – Perfectly Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-7xl md:text-8xl lg:text-9xl font-thin text-[#D4B65A] leading-none">20+</h3>
              <p className="text-xl md:text-2xl text-[#0A1A2F] mt-6 tracking-wide">Years of Excellence</p>
            </div>
            <div className="text-center">
              <h3 className="text-7xl md:text-8xl lg:text-9xl font-thin text-[#D4B65A] leading-none">300+</h3>
              <p className="text-xl md:text-2xl text-[#0A1A2F] mt-6 tracking-wide">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-7xl md:text-8xl lg:text-9xl font-thin text-[#D4B65A] leading-none">100%</h3>
              <p className="text-xl md:text-2xl text-[#0A1A2F] mt-6 tracking-wide">Safety & Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="py-32 bg-[#0A1A2F]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-widest text-[#D4B65A] leading-tight">
            Built to Perform.<br className="hidden md:block" />
            Engineered to Endure.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;