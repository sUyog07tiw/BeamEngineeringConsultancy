// src/pages/FullHomeConstruction.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight, Play, Pause, Maximize, ArrowRight } from 'lucide-react';
import hero from '../assets/images/website-images/fullhomeconstruction.jpg';

// Budanilkantha media
import budan1 from '../assets/images/construction-projects/budanilkantha/budanilkantha1.jpeg';
import budan2 from '../assets/images/construction-projects/budanilkantha/budanilkantha2.jpeg';
import budan3 from '../assets/images/construction-projects/budanilkantha/budanilkantha3.jpeg';
import budanVideo1 from '../assets/images/construction-projects/budanilkantha/budanilkantha4.jpeg.mp4';
import budanVideo2 from '../assets/images/construction-projects/budanilkantha/budanilkantha5.jpeg.mp4';
import budanVideo3 from '../assets/images/construction-projects/budanilkantha/budanilkantha6.jpeg.mp4';

// Sunakothi media
import sunakothi1 from '../assets/images/construction-projects/sunakothi/sunakoti1.jpeg';
import sunakothiVideo1 from '../assets/images/construction-projects/sunakothi/sunakoti2.jpeg.mp4';

// Balkumari media
import balkumari1 from '../assets/images/construction-projects/balkumari/balkumari1.jpeg';

const FullHomeConstruction = () => {
  const navigate = useNavigate();
  const projectsRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goToContactTop = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Media arrays
  const budanilkanthaMedia = [budan1, budan2, budan3, budanVideo1, budanVideo2, budanVideo3];
  const sunakothiMedia = [sunakothi1, sunakothiVideo1];
  const balkumariMedia = [balkumari1];

  // Slider states
  const [budanIndex, setBudanIndex] = useState(0);
  const [sunakothiIndex, setSunakothiIndex] = useState(0);
  const [balkumariIndex, setBalkumariIndex] = useState(0);

  // Video refs
  const budanVideoRef = useRef(null);
  const sunakothiVideoRef = useRef(null);

  const nextSlide = (setter, array, current) => setter((current + 1) % array.length);
  const prevSlide = (setter, array, current) => setter(current === 0 ? array.length - 1 : current - 1);

  const togglePlayPause = (ref) => {
    if (ref.current.paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const goFullscreen = (ref) => {
    if (ref.current.requestFullscreen) ref.current.requestFullscreen();
    else if (ref.current.webkitRequestFullscreen) ref.current.webkitRequestFullscreen();
    else if (ref.current.msRequestFullscreen) ref.current.msRequestFullscreen();
  };

  const isVideo = (src) => src.endsWith('.mp4');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Full Home Construction by BEAM" className="h-full w-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-transparent to-navy-900/50" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">
          <div className="mx-auto w-full max-w-5xl text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
              Premium Service
            </span>
            <h1 className="text-hero font-display font-medium text-white tracking-wide text-shadow-hero">
              Full Home Construction
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg lg:text-xl text-slate-300 leading-relaxed">
              Seamless luxury residences designed and built with precision, safety, and timeless elegance.
            </p>
            <div className="section-divider mt-10" />

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <button
                onClick={goToContactTop}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm uppercase tracking-widest font-medium rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Our Work</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 bg-blue-50 rounded-full mb-6">
              Portfolio
            </span>
            <h2 className="text-title font-display text-navy-800">Our Premier Residences</h2>
            <div className="section-divider mt-6" />
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate leading-relaxed">
              Explore our signature residential projects, each crafted with meticulous attention to detail and engineering excellence.
            </p>
          </div>

          {/* Budanilkantha Project */}
          <div className="mb-24 animate-on-scroll">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-700 bg-green-100 rounded-full mb-4">
                  Completed & Handed Over
                </span>
                <h3 className="text-subtitle font-display text-navy-800 mb-6">
                  Budanilkantha Residence
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-8">
                  A completed masterpiece blending contemporary architecture with warm Nepali aesthetics. 
                  Featuring earthquake-resistant structure, premium materials, open living spaces, and beautifully landscaped gardens.
                </p>
                <button
                  onClick={goToContactTop}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                >
                  Start a Similar Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="order-1 lg:order-2 relative group">
                <div className="overflow-hidden rounded-2xl shadow-strong">
                  {isVideo(budanilkanthaMedia[budanIndex]) ? (
                    <video 
                      ref={budanVideoRef} 
                      src={budanilkanthaMedia[budanIndex]} 
                      className="w-full h-80 lg:h-[450px] object-cover" 
                      controls={false} 
                    />
                  ) : (
                    <img 
                      src={budanilkanthaMedia[budanIndex]} 
                      alt="Budanilkantha Residence" 
                      className="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  )}
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={() => prevSlide(setBudanIndex, budanilkanthaMedia, budanIndex)} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm text-navy-800 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => nextSlide(setBudanIndex, budanilkanthaMedia, budanIndex)} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm text-navy-800 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Video Controls */}
                {isVideo(budanilkanthaMedia[budanIndex]) && (
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 bg-navy-900/80 backdrop-blur-sm px-5 py-2.5 rounded-full">
                    <button onClick={() => togglePlayPause(budanVideoRef)} className="text-white hover:text-blue-400 transition">
                      {budanVideoRef.current?.paused !== false ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                    </button>
                    <button onClick={() => goFullscreen(budanVideoRef)} className="text-white hover:text-blue-400 transition">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {budanilkanthaMedia.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setBudanIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === budanIndex ? 'bg-blue-600 w-6' : 'bg-white/70 hover:bg-white'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sunakothi Project */}
          <div className="mb-24 animate-on-scroll">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl shadow-strong">
                  {isVideo(sunakothiMedia[sunakothiIndex]) ? (
                    <video 
                      ref={sunakothiVideoRef} 
                      src={sunakothiMedia[sunakothiIndex]} 
                      className="w-full h-80 lg:h-[450px] object-cover" 
                      controls={false} 
                    />
                  ) : (
                    <img 
                      src={sunakothiMedia[sunakothiIndex]} 
                      alt="Sunakothi Residence" 
                      className="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  )}
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={() => prevSlide(setSunakothiIndex, sunakothiMedia, sunakothiIndex)} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm text-navy-800 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => nextSlide(setSunakothiIndex, sunakothiMedia, sunakothiIndex)} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm text-navy-800 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Video Controls */}
                {isVideo(sunakothiMedia[sunakothiIndex]) && (
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 bg-navy-900/80 backdrop-blur-sm px-5 py-2.5 rounded-full">
                    <button onClick={() => togglePlayPause(sunakothiVideoRef)} className="text-white hover:text-blue-400 transition">
                      {sunakothiVideoRef.current?.paused !== false ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                    </button>
                    <button onClick={() => goFullscreen(sunakothiVideoRef)} className="text-white hover:text-blue-400 transition">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {sunakothiMedia.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setSunakothiIndex(i)} 
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === sunakothiIndex ? 'bg-blue-600 w-6' : 'bg-white/70 hover:bg-white'}`} 
                    />
                  ))}
                </div>
              </div>

              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-700 bg-amber-100 rounded-full mb-4">
                  Ongoing Construction
                </span>
                <h3 className="text-subtitle font-display text-navy-800 mb-6">
                  Sunakothi Residence
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-8">
                  Contemporary luxury villa currently under construction. Designed for abundant natural light, seamless indoor-outdoor flow, energy efficiency, and modern family living.
                </p>
                <button
                  onClick={goToContactTop}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                >
                  Inquire About This Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Balkumari Project */}
          <div className="mb-24 animate-on-scroll">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-700 bg-amber-100 rounded-full mb-4">
                  Ongoing Construction
                </span>
                <h3 className="text-subtitle font-display text-navy-800 mb-6">
                  Balkumari (Imadol) Residence
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-8">
                  Modern family home in progress featuring intelligent space planning, sustainable building practices, high-quality finishes, and full compliance with Nepal's seismic standards.
                </p>
                <button
                  onClick={goToContactTop}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                >
                  Inquire About This Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="order-1 lg:order-2 relative group">
                <div className="overflow-hidden rounded-2xl shadow-strong">
                  <img 
                    src={balkumariMedia[balkumariIndex]} 
                    alt="Balkumari Residence" 
                    className="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                {/* Navigation Arrows (visible when more photos are added) */}
                {balkumariMedia.length > 1 && (
                  <>
                    <button 
                      onClick={() => prevSlide(setBalkumariIndex, balkumariMedia, balkumariIndex)} 
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm text-navy-800 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => nextSlide(setBalkumariIndex, balkumariMedia, balkumariIndex)} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm text-navy-800 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {balkumariMedia.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setBalkumariIndex(i)} 
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === balkumariIndex ? 'bg-blue-600 w-6' : 'bg-white/70 hover:bg-white'}`} 
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
            Get Started
          </span>
          <h2 className="text-title font-display text-white">Start Your Dream Home Today</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From initial concept to final handover, we handle every aspect of your home construction with expertise and care.
          </p>
          <div className="mt-10">
            <button 
              onClick={goToContactTop} 
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullHomeConstruction;
