// src/pages/About.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../assets/images/website-images/about.jpg';

const team = [ /* your team array - unchanged */ ];

const About = () => {
  const teamSectionRef = useRef(null);
  const navigate = useNavigate();

  const scrollToTeam = () => {
    teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToContactTop = () => {
    navigate('/contact');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <>
      {/* HERO - unchanged */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* ... hero content ... */}
        <div className="mt-20 flex justify-center">
          <button onClick={scrollToTeam} className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium transition duration-300 hover:bg-[#c2a54d] hover:shadow-xl">
            Meet the Team
          </button>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section ref={teamSectionRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* ... team grid ... */}

          <div className="text-center mt-24">
            <button
              onClick={goToContactTop}
              className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium transition duration-300 hover:bg-[#c2a54d] hover:shadow-xl"
            >
              Contact the Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;