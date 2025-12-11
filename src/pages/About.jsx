// src/pages/About.jsx
import React, { useRef } from 'react';
import Button from '../components/Button';

const team = [
  { name: "Basu Dev Tiwari",       role: "Managing Director",          phone: "9851048896", img: "/team/basu-dev.jpg" },
  { name: "Er. Briraj Tiwari",     role: "Civil Engineer",             phone: "9851314760", img: "/team/briraj.jpg" },
  { name: "Er. Utsav Shakya",      role: "Civil Engineer",             phone: "9851324141", img: "/team/utsav.jpg" },
  { name: "Er. Rahul Yadav",       role: "Senior Structural Engineer", img: "/team/rahul.jpg" },
  { name: "Er. Samir Tapendra",    role: "Structural Design Engineer", img: "/team/samir.jpg" },
  { name: "Suman Shrestha",        role: "Site Engineer & Project Coordinator", img: "/team/suman.jpg" },
];

const About = () => {
  const teamSectionRef = useRef(null);

  const scrollToTeam = () => {
    teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO – Clean with "Meet the Team" Button */}
      <section className="relative h-screen bg-[#0A1A2F] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0f2744] to-[#0A1A2F]"></div>

        <div className="relative text-center px-8 z-10">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white">
            ABOUT
          </h1>

          {/* Leadership & Team + Golden Lines */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px bg-[#D4B65A] w-32 md:w-40 lg:w-48"></div>
            <div className="mx-8 text-center">
              <p className="text-[#D4B65A] text-base md:text-lg tracking-[0.3em] uppercase font-light leading-tight">
                LEADERSHIP & TEAM
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
                A dedicated team of engineers and professionals delivering precision, safety, and excellence in every project.
              </p>
            </div>
            <div className="h-px bg-[#D4B65A] w-32 md:w-40 lg:w-48"></div>
          </div>

          {/* MEET THE TEAM BUTTON – Smooth Scroll */}
          <div className="mt-20">
            <Button
              size="lg"
              onClick={scrollToTeam}
              className="bg-[#D4B65A] text-[#0A1A2F] hover:bg-white transition"
            >
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      {/* TEAM SECTION – This is where it scrolls to */}
      <section ref={teamSectionRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          {/* Leadership – Top 3 */}
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            {team.slice(0, 3).map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden mb-6 rounded-lg">
                  <img src={member.img} alt={member.name} className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0A1A2F]">{member.name}</h3>
                <p className="text-[#D4B65A] text-lg tracking-wider mt-2 font-medium">{member.role}</p>
                {member.phone && (
                  <a href={`tel:+977${member.phone}`} className="block text-gray-700 text-lg mt-3 hover:text-[#0A1A2F] transition font-medium">
                    {member.phone}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Supporting Team */}
          <div className="grid md:grid-cols-3 gap-12">
            {team.slice(3).map((member) => (
              <div key={member.name} className="group text-center">
                <img src={member.img} alt={member.name} className="w-full h-80 object-cover rounded-lg grayscale group-hover:grayscale-0 transition" />
                <h3 className="text-xl font-medium text-[#0A1A2F] mt-6">{member.name}</h3>
                <p className="text-[#D4B65A] text-sm tracking-wider mt-1">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-24">
            <Button size="lg" to="/contact">
              Contact the Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;