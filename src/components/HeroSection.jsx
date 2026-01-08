// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="BEAM Engineering Consultancy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          {/* Headline – Even smaller for more elegance */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-widest text-white leading-tight">
            <span className="font-bold text-lime-700">ELEGANT DREAM HOMES</span> & 
            <span className="font-bold text-lime-700"> ICONIC COMMERCIAL SPACES</span><br/>
            CRAFTED FOR EXCELLENCE
          </h1>

          {subtitle && (
            <div className="mt-12">
              <div className="mx-auto mb-8 h-px w-64 bg-lime-700/50" />
              <div className="space-y-4">
                {subtitle}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8">
            <a
              href="/services"
              className="rounded-full border border-white/60 px-10 py-4 text-base uppercase tracking-widest text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="rounded-full bg-lime-800 px-10 py-4 text-base uppercase tracking-widest text-lime-50 font-medium transition duration-300 hover:bg-lime-700 hover:shadow-xl"
            >
              Contact the BEAM Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;