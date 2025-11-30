import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Full-screen Hero Section – Black & Powerful */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Optional subtle background pattern or video can go here later */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>

        <div className="relative z-10 text-center px-8 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-widest text-white mb-8">
            ABOUT US
          </h1>
          <div className="h-px bg-white/20 w-32 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl tracking-wide max-w-4xl mx-auto leading-relaxed">
            Beam Engineering Consultancy is a family-owned structural and civil engineering firm
            dedicated to delivering precision, safety, and excellence in every project.
          </p>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Content Section – Clean & Spacious */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-12 tracking-wider">
            Built on Trust. <br />
            Engineered for Tomorrow.
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto">
            Founded and led by experienced engineers, we bring decades of expertise in structural design,
            project supervision, and sustainable engineering solutions. From residential buildings to
            large-scale infrastructure — we turn vision into reality with uncompromising quality.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-4">Precision</h3>
              <p className="text-gray-600">Every calculation, every detail — executed with absolute accuracy.</p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-4">Safety</h3>
              <p className="text-gray-600">Your structure’s integrity is our highest priority — always.</p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-4">Family Values</h3>
              <p className="text-gray-600">Personalized service, long-term relationships, and trust above all.</p>
            </div>
          </div>

          <div className="mt-24">
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-12 py-5 text-lg tracking-widest uppercase hover:bg-gray-900 transition duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;