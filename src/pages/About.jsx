// src/pages/About.jsx
import React, { useRef } from 'react';
import Button from '../components/Button';
import aboutImg from '../assets/images/about.jpg';  // Your image path

const team = [
  { 
    name: "Basu Dev Tiwari",       
    role: "Managing Director",          
    phone: "9851048896", 
    img: "/team/basu-dev.jpg",
    desc: "Leads BEAM with 20+ years in engineering consultancy, overseeing strategy and project excellence."
  },
  { 
    name: "Er. Biraj Tiwari",     
    role: "Civil Engineer",             
    phone: "9851314760", 
    img: "/team/briraj.jpg",
    desc: "Expert in civil design, site execution, feasibility studies, and sustainable construction practices."
  },
  { 
    name: "Er. Utsav Shakya",      
    role: "Civil Engineer",             
    phone: "9851324141", 
    img: "/team/utsav.jpg",
    desc: "Specializes in civil detailing, drainage, roadworks, and compliance with Nepali building codes."
  },
  { 
    name: "Er. Rahul Yadav",       
    role: "Senior Structural Engineer", 
    img: "/team/rahul.jpg",
    desc: "Leads seismic design and structural analysis using ETABS/SAP for safe high-rise projects."
  },
  { 
    name: "Er. Samir Tapendra",    
    role: "Structural Design Engineer", 
    img: "/team/samir.jpg",
    desc: "Designs RC/steel structures with BIM and earthquake-resistant solutions for Nepal."
  },
  { 
    name: "Suman Shrestha",        
    role: "Site Engineer & Project Coordinator", 
    img: "/team/suman.jpg",
    desc: "Manages site operations, materials, progress, and seamless design-to-construction coordination."
  },
];

const About = () => {
  const teamSectionRef = useRef(null);

  const scrollToTeam = () => {
    teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO – Exactly like Home page */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutImg}
            alt="BEAM Engineering Consultancy"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white">
              ABOUT
            </h1>

            <div className="mt-10">
              <div className="mx-auto mb-8 h-px w-48 bg-[#D4B65A]/60" />
              <p className="text-2xl md:text-3xl lg:text-4xl tracking-widest text-[#D4B65A] uppercase font-light">
                Leadership & Team
              </p>
              <p className="text-lg md:text-xl lg:text-2xl tracking-wide text-gray-300 mt-6 max-w-3xl mx-auto">
                A dedicated team of engineers and professionals delivering precision, safety, and excellence in every project.
              </p>
            </div>

            {/* Meet the Team Button */}
            <div className="mt-14">
              <Button
                size="lg"
                onClick={scrollToTeam}
                className="rounded-full bg-[#D4B65A] px-10 py-4 text-lg uppercase tracking-widest text-[#0A1A2F] hover:bg-[#c2a54d] transition"
              >
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section ref={teamSectionRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          {/* Leadership – Top 3 */}
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            {team.slice(0, 3).map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden mb-6 rounded-lg">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0A1A2F]">{member.name}</h3>
                <p className="text-[#D4B65A] text-lg tracking-wider mt-2 font-medium">{member.role}</p>
                <p className="text-gray-600 text-base mt-4 max-w-md mx-auto leading-relaxed">
                  {member.desc}
                </p>
                {member.phone && (
                  <a 
                    href={`tel:+977${member.phone}`} 
                    className="block text-gray-700 text-lg mt-4 hover:text-[#0A1A2F] transition font-medium"
                  >
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
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-80 object-cover rounded-lg grayscale group-hover:grayscale-0 transition" 
                />
                <h3 className="text-xl font-medium text-[#0A1A2F] mt-6">{member.name}</h3>
                <p className="text-[#D4B65A] text-sm tracking-wider mt-1">{member.role}</p>
                <p className="text-gray-600 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                  {member.desc}
                </p>
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