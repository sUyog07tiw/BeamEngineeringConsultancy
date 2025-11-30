import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      {/* ===================== FULL-SCREEN HERO – BLACK & EPIC ===================== */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">

        {/* Optional: Add a dark structural image/video background later */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>

        <div className="relative z-10 text-center px-8 max-w-7xl mx-auto">
          {/* Main Title – Massive & Elegant */}
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white leading-tight">
            BEAM
          </h1>

          {/* Subline with thin lines */}
          <div className="flex items-center justify-center mt-8">
            
            <div className="h-px bg-white/30 w-24 md:w-40"></div>
            <p className="mx-8 text-gray-400 text-lg md:text-2xl tracking-[…
              0.5em] uppercase font-light">
              Engineering Consultancy
            </p>
            <div className="h-px bg-white/30 w-24 md:w-40"></div>
          </div>

          {/* Tagline */}
          <p className="mt-16 text-gray-300 text-xl md:text-2xl lg:text-3xl tracking-wide max-w-4xl mx-auto leading-relaxed font-light">
            Structural & Civil Engineering Excellence
          </p>
          <p className="mt-6 text-gray-500 text-lg md:text-xl tracking-wider max-w-3xl mx-auto">
            Precision. Safety. Vision. Delivered.
          </p>

          {/* CTA Button */}
          <div className="mt-20">
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-12 py-5 text-lg tracking-widest uppercase font-medium hover:bg-gray-200 transition duration-300"
            >
              <Button
            variant='secondary'>Start Construction</Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ===================== SECOND SECTION – TRUST & EXPERTISE ===================== */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto text-center px-8">
          <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-12 tracking-wider">
            Engineering Built on Family Values
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A father-and-son-led consultancy delivering world-class structural and civil engineering solutions
            with trust, precision, and decades of hands-on experience.
          </p>

          <div className="grid md:grid-cols-3 gap-16 mt-20">
            <div>
              <h3 className="text-3xl font-light text-gray-800 mb-4">20+ Years</h3>
              <p className="text-gray-600">Of structural engineering excellence</p>
            </div>
            <div>
              <h3 className="text-3xl font-light text-gray-800 mb-4">100% Safety</h3>
              <p className="text-gray-600">Zero compromises on structural integrity</p>
            </div>
            <div>
              <h3 className="text-3xl font-light text-gray-800 mb-4">Family Run</h3>
              <p className="text-gray-600">Personal service, lifelong partnerships</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;