import React from 'react';

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative text-center px-8 z-10">
        <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white">
          {title}
        </h1>
        {subtitle && (
          <>
            <div className="h-px bg-white/20 w-40 mx-auto mt-8"></div>
            <p className="mt-10 text-xl md:text-2xl text-gray-400 tracking-wide">{subtitle}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;