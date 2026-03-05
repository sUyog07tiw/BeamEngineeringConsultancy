// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { ChevronDown, Building2, Ruler, Triangle } from 'lucide-react';

const HeroSection = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-slate-900 to-navy-800" />
      
      {/* Animated Grid Pattern - Blueprint Style */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating 3D Construction Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Large Blueprint Frame - Top Right */}
        <div className={`absolute top-16 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Outer frame */}
            <rect x="20" y="20" width="360" height="360" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="2" strokeDasharray="8 4"/>
            {/* Inner architectural drawing */}
            <g className="animate-pulse" style={{ animationDuration: '4s' }}>
              {/* Building outline */}
              <path d="M100 320 L100 120 L200 60 L300 120 L300 320" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="2"/>
              {/* Roof detail */}
              <path d="M80 120 L200 40 L320 120" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5"/>
              {/* Windows */}
              <rect x="130" y="160" width="40" height="50" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5"/>
              <rect x="230" y="160" width="40" height="50" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5"/>
              <rect x="130" y="240" width="40" height="50" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5"/>
              <rect x="230" y="240" width="40" height="50" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5"/>
              {/* Door */}
              <rect x="175" y="260" width="50" height="60" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="2"/>
              {/* Ground line */}
              <line x1="50" y1="320" x2="350" y2="320" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
              {/* Dimension lines */}
              <line x1="100" y1="340" x2="300" y2="340" stroke="rgba(251,191,36,0.3)" strokeWidth="1"/>
              <line x1="100" y1="335" x2="100" y2="345" stroke="rgba(251,191,36,0.3)" strokeWidth="1"/>
              <line x1="300" y1="335" x2="300" y2="345" stroke="rgba(251,191,36,0.3)" strokeWidth="1"/>
            </g>
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        <div className={`absolute top-1/4 left-10 md:left-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="w-20 h-20 md:w-32 md:h-32 border border-blue-500/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className={`absolute bottom-1/3 left-1/4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-gold-500/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        </div>

        {/* Structural Beam Elements */}
        <div className={`absolute bottom-20 right-1/4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <svg width="200" height="100" viewBox="0 0 200 100" className="opacity-20">
            <path d="M0 50 L50 10 L150 10 L200 50 L150 90 L50 90 Z" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2"/>
            <line x1="150" y1="10" x2="150" y2="90" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2"/>
          </svg>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="rgba(59,130,246,0.1)"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="rgba(251,191,36,0.1)"/>
          </svg>
        </div>
      </div>

      {/* Animated Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-32 right-1/3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Building2 className="w-8 h-8 text-blue-500/20 animate-float" style={{ animationDelay: '0s' }} />
        </div>
        <div className={`absolute bottom-40 left-1/3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Ruler className="w-6 h-6 text-gold-500/20 animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className={`absolute top-1/2 right-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Triangle className="w-10 h-10 text-blue-400/15 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          {/* Pre-title Badge */}
          <div 
            className={`mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.3em] text-blue-300 border border-blue-400/30 rounded-full bg-blue-500/10 backdrop-blur-md">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Premier Engineering Excellence
            </span>
          </div>

          {/* Main Headline - Split Design */}
          <h1 
            className={`font-display font-semibold leading-[1.1] tracking-tight transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-4xl md:text-5xl lg:text-7xl text-white/90 mb-2">
              Crafting
            </span>
            <span className="block text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Dream Homes
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-white/60 mt-4 font-light tracking-wide">
              & Iconic Commercial Spaces
            </span>
          </h1>

          {/* BEAM Branding */}
          {subtitle && (
            <div 
              className={`mt-12 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500/50" />
                <div className="w-3 h-3 border border-gold-500/50 rotate-45" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500/50" />
              </div>
              
              <div className="space-y-4">
                <p className="text-4xl md:text-5xl lg:text-6xl tracking-[0.4em] uppercase font-display font-light text-white/90">
                  BEAM
                </p>
                <p className="text-sm md:text-base text-slate-400 tracking-widest max-w-xl mx-auto leading-relaxed">
                  Building Engineering & Architectural Multimind
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {['Structural', 'Architectural', 'Naksa Pass', 'Civil Engineering'].map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs uppercase tracking-wider text-blue-300/70 border border-blue-500/20 rounded-full bg-blue-500/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/50 hover:text-white transition-all duration-500 cursor-pointer group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '900ms' }}
      >
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-1.5 animate-bounce group-hover:bg-white transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;