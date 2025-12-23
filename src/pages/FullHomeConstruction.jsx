// src/pages/FullHomeConstruction.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

// Balkumari media – your new photo
import balkumari1 from '../assets/images/construction-projects/balkumari/balkumari1.jpeg'; 

const FullHomeConstruction = () => {
  const navigate = useNavigate();

  const goToContactTop = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Media arrays
  const budanilkanthaMedia = [budan1, budan2, budan3, budanVideo1, budanVideo2, budanVideo3];
  const sunakothiMedia = [sunakothi1, sunakothiVideo1];
  const balkumariMedia = [balkumari1]; // Add more when you have them

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
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Full Home Construction by BEAM" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white uppercase">
              Full Home Construction
            </h1>
            <div className="mx-auto mt-10 h-px w-64 bg-[#D4B65A]/70" />
            <p className="mt-10 text-2xl md:text-3xl text-white/90 tracking-wide max-w-4xl mx-auto">
              Seamless luxury residences designed and built with precision, safety, and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-widest text-[#0A1A2F]">
              Our Premier Residences
            </h2>
            <div className="mx-auto mt-8 h-px w-48 bg-[#D4B65A]/60" />
          </div>

          {/* Budanilkantha Project */}
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

              <div className="order-1 md:order-2 relative">
                {isVideo(budanilkanthaMedia[budanIndex]) ? (
                  <video ref={budanVideoRef} src={budanilkanthaMedia[budanIndex]} className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-2xl" controls={false} />
                ) : (
                  <img src={budanilkanthaMedia[budanIndex]} alt="Budanilkantha Residence" className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-2xl" />
                )}

                <button onClick={() => prevSlide(setBudanIndex, budanilkanthaMedia, budanIndex)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-[#D4B65A] transition text-2xl">
                  ‹
                </button>
                <button onClick={() => nextSlide(setBudanIndex, budanilkanthaMedia, budanIndex)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-[#D4B65A] transition text-2xl">
                  ›
                </button>

                {isVideo(budanilkanthaMedia[budanIndex]) && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-black/70 px-6 py-3 rounded-full">
                    <button onClick={() => togglePlayPause(budanVideoRef)} className="text-white hover:text-[#D4B65A] transition text-xl">
                      {budanVideoRef.current?.paused !== false ? '▶' : '❚❚'}
                    </button>
                    <button onClick={() => goFullscreen(budanVideoRef)} className="text-white hover:text-[#D4B65A] transition text-xl">
                      ⛶
                    </button>
                  </div>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {budanilkanthaMedia.map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full transition ${i === budanIndex ? 'bg-[#D4B65A]' : 'bg-white/50'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sunakothi Project */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {isVideo(sunakothiMedia[sunakothiIndex]) ? (
                  <video ref={sunakothiVideoRef} src={sunakothiMedia[sunakothiIndex]} className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-2xl" controls={false} />
                ) : (
                  <img src={sunakothiMedia[sunakothiIndex]} alt="Sunakothi Residence" className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-2xl" />
                )}

                <button onClick={() => prevSlide(setSunakothiIndex, sunakothiMedia, sunakothiIndex)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-[#D4B65A] transition text-2xl">
                  ‹
                </button>
                <button onClick={() => nextSlide(setSunakothiIndex, sunakothiMedia, sunakothiIndex)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-[#D4B65A] transition text-2xl">
                  ›
                </button>

                {isVideo(sunakothiMedia[sunakothiIndex]) && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-black/70 px-6 py-3 rounded-full">
                    <button onClick={() => togglePlayPause(sunakothiVideoRef)} className="text-white hover:text-[#D4B65A] transition text-xl">
                      {sunakothiVideoRef.current?.paused !== false ? '▶' : '❚❚'}
                    </button>
                    <button onClick={() => goFullscreen(sunakothiVideoRef)} className="text-white hover:text-[#D4B65A] transition text-xl">
                      ⛶
                    </button>
                  </div>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {sunakothiMedia.map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full transition ${i === sunakothiIndex ? 'bg-[#D4B65A]' : 'bg-white/50'}`} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-light text-[#0A1A2F] mb-6 tracking-wide">
                  Sunakothi Residence
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Contemporary luxury villa currently under construction. Designed for abundant natural light, seamless indoor-outdoor flow, energy efficiency, and modern family living.
                </p>
                <span className="inline-block px-6 py-3 bg-gray-700 text-white text-lg font-medium uppercase tracking-wider rounded-full">
                  Ongoing Construction
                </span>
              </div>
            </div>
          </div>

          {/* Balkumari Project – Now with real photo */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl font-light text-[#0A1A2F] mb-6 tracking-wide">
                  Balkumari (Imadol) Residence
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Modern family home in progress featuring intelligent space planning, sustainable building practices, high-quality finishes, and full compliance with Nepal's seismic standards.
                </p>
                <span className="inline-block px-6 py-3 bg-gray-700 text-white text-lg font-medium uppercase tracking-wider rounded-full">
                  Ongoing Construction
                </span>
              </div>

              <div className="order-1 md:order-2 relative">
                <img src={balkumariMedia[balkumariIndex]} alt="Balkumari Residence" className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-2xl" />

                {/* Next/Previous (will work when you add more photos) */}
                {balkumariMedia.length > 1 && (
                  <>
                    <button onClick={() => prevSlide(setBalkumariIndex, balkumariMedia, balkumariIndex)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-[#D4B65A] transition text-2xl">
                      ‹
                    </button>
                    <button onClick={() => nextSlide(setBalkumariIndex, balkumariMedia, balkumariIndex)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-[#D4B65A] transition text-2xl">
                      ›
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {balkumariMedia.map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full transition ${i === balkumariIndex ? 'bg-[#D4B65A]' : 'bg-white/50'}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button onClick={goToContactTop} className="inline-block bg-[#D4B65A] text-[#0A1A2F] px-16 py-6 text-2xl uppercase tracking-widest font-medium rounded-full hover:bg-[#c2a54d] transition duration-300 shadow-2xl">
              Start Your Dream Home Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullHomeConstruction;