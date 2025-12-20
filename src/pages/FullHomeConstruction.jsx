// src/pages/FullHomeConstruction.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/images/website-images/fullhomeconstruction.jpg';

const FullHomeConstruction = () => {
  const navigate = useNavigate();

  const goToContactTop = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Full Home Construction by BEAM"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white uppercase">
              Full Home Construction
            </h1>
            <div className="mx-auto mt-10 h-px w-64 bg-[#D4B65A]/70" />
            <p className="mt-10 text-2xl md:text-3xl text-white/90 tracking-wide max-w-4xl mx-auto">
              Turnkey luxury residences designed and built with precision, safety, and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section – No images yet */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-widest text-[#0A1A2F]">
              Our Signature Residences
            </h2>
            <div className="mx-auto mt-8 h-px w-48 bg-[#D4B65A]/60" />
          </div>

          {/* Project 1: Budanilkantha */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl font-light text-[#0A1A2F] mb-6 tracking-wide">
                  Budanilkantha Residence
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  A completed masterpiece blending contemporary architecture with warm Nepali aesthetics. 
                  Featuring earthquake-resistant structure, premium materials, open living spaces, and beautifully landscaped gardens.
                </p>
                <span className="inline-block px-6 py-3 bg-[#D4B65A] text-[#0A1A2F] text-lg font-medium uppercase tracking-wider rounded-full">
                  Completed & Handed Over
                </span>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96 shadow-2xl flex items-center justify-center">
                  <p className="text-gray-500 text-xl">Photos Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Sunakothi */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96 shadow-2xl flex items-center justify-center">
                  <p className="text-gray-500 text-xl">Photos Coming Soon</p>
                </div>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-light text-[#0A1A2F] mb-6 tracking-wide">
                  Sunakothi Residence
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Contemporary luxury villa currently under construction. Designed for abundant natural light, 
                  seamless indoor-outdoor flow, energy efficiency, and modern family living.
                </p>
                <span className="inline-block px-6 py-3 bg-gray-700 text-white text-lg font-medium uppercase tracking-wider rounded-full">
                  Ongoing Construction
                </span>
              </div>
            </div>
          </div>

          {/* Project 3: Balkumari (Imadol) */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl font-light text-[#0A1A2F] mb-6 tracking-wide">
                  Balkumari (Imadol) Residence
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Modern family home in progress featuring intelligent space planning, sustainable building practices, 
                  high-quality finishes, and full compliance with Nepal's seismic standards.
                </p>
                <span className="inline-block px-6 py-3 bg-gray-700 text-white text-lg font-medium uppercase tracking-wider rounded-full">
                  Ongoing Construction
                </span>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96 shadow-2xl flex items-center justify-center">
                  <p className="text-gray-500 text-xl">Photos Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button – Now navigates to Contact and scrolls to top */}
          <div className="text-center">
            <button
              onClick={goToContactTop}
              className="inline-block bg-[#D4B65A] text-[#0A1A2F] px-16 py-6 text-2xl uppercase tracking-widest font-medium rounded-full hover:bg-[#c2a54d] transition duration-300 shadow-2xl"
            >
              Start Your Dream Home Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullHomeConstruction;