import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      {/* HERO – Navy + Gold + Buttons under the name */}
      <section className="relative h-screen bg-[#0A1A2F] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0f2744] to-[#0A1A2F]"></div>
        
        <div className="relative text-center px-8 z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-widest text-white">
            BEAM
          </h1>

          <div className="flex items-center justify-center mt-6 md:mt-8">
            <div className="h-px bg-[#D4B65A] w-24 md:w-32"></div>
            <p className="mx-6 md:mx-8 text-[#D4B65A] text-sm md:text-base tracking-[0.6em] uppercase font-light">
              ENGINEERING CONSULTANCY
            </p>
            <div className="h-px bg-[#D4B65A] w-24 md:w-32"></div>
          </div>

          {/* Buttons – Clean spacing */}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" to="/services" className="bg-transparent border-2 border-[#D4B65A] text-white hover:bg-[#D4B65A] hover:text-[#0A1A2F]">
              Explore Services
            </Button>
            <Button size="lg" to="/contact" className="bg-[#D4B65A] text-[#0A1A2F] hover:bg-white">
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* Main Section – Smaller, Modern, Professional Font Sizes */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-8 text-center">

          {/* Page Title – 35-50px on desktop */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-[#0A1A2F] tracking-wide leading-tight mb-10">
            Precision Engineering.<br />
            Global Standards.
          </h2>

          {/* Body Text – 18-22px (perfect for text-heavy) */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
            Advanced structural analysis. Seismic-resistant design. Precision-driven project delivery.
            We engineer solutions that stand the test of time.
          </p>

          {/* Stats – Numbers large, labels small & clean */}
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-6xl md:text-7xl font-thin text-[#D4B65A] leading-none">20+</h3>
              <p className="text-base md:text-lg text-[#0A1A2F] mt-3 tracking-wider">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-6xl md:text-7xl font-thin text-[#D4B65A] leading-none">300+</h3>
              <p className="text-base md:text-lg text-[#0A1A2F] mt-3 tracking-wider">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-6xl md:text-7xl font-thin text-[#D4B65A] leading-none">100%</h3>
              <p className="text-base md:text-lg text-[#0A1A2F] mt-3 tracking-wider">Safety & Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section – Elegant & Minimal */}
      <section className="py-28 bg-[#0A1A2F] text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-widest text-[#D4B65A] leading-tight">
            Built to Perform.<br />
            Engineered to Endure.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;