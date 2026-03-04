// src/pages/About.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../assets/images/website-images/about.jpg';

// Import team images from src/assets (correct path)
import basuDev from '../assets/images/teams/basudev.jpg';
import biraj from '../assets/images/teams/biraj.jpg';
// import utsav from '../assets/images/teams/utsav.jpg';
// import rahul from '../assets/images/teams/rahul.jpg';
// import samir from '../assets/images/teams/samir.jpg';
// import suman from '../assets/images/teams/suman.jpg';

const team = [
  { 
    name: "Basu Dev Tiwari",       
    role: "Managing Director",          
    phone: "9851048896", 
    img: basuDev, 
    desc: "Leads BEAM with 20+ years in engineering consultancy, overseeing strategy and project excellence."
  },
  { 
    name: "Er. Biraj Tiwari",     
    role: "Civil Engineer",             
    phone: "9851314760", 
    img: biraj,  
    desc: "Expert in civil design, site execution, feasibility studies, and sustainable construction practices."
  },
  {
    name: "Utsav Shakya",
    role: "Structural Engineer",
    phone: "9851324141",
    img: "", // No image available
    desc: "Specializes in structural analysis, design, and safety for residential and commercial projects."
  },
  {
    name: "Er. Rahul Yadav",
    role: "Engineer, Employee",
    img: "", // No image available
    desc: "Engineer and employee at BEAM Engineering Consultancy, contributing technical expertise to projects."
  },
  {
    name: "Er. Samir Tapendra",
    role: "Engineer, Employee",
    img: "", // No image available
    desc: "Engineer and employee at BEAM Engineering Consultancy, supporting engineering and project delivery."
  },
  {
    name: "Suman Shrestha",
    role: "Employee",
    img: "", // No image available
    desc: "Employee at BEAM Engineering Consultancy."
  }
];

const About = () => {
  const teamSectionRef = useRef(null);
  const navigate = useNavigate();

  const scrollToTeam = () => {
    teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToContactTop = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImg}
            alt="BEAM Engineering Consultancy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary-dark/90" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading tracking-widest text-white">
              ABOUT
            </h1>
            <div className="mt-10">
              <div className="mx-auto mb-8 h-px w-48 bg-info/60" />
              <p className="text-2xl md:text-3xl lg:text-4xl tracking-widest text-white uppercase font-light font-heading">
                Leadership & Team
              </p>
              <p className="text-lg md:text-xl lg:text-2xl tracking-wide text-white mt-6 max-w-3xl mx-auto">
                A dedicated team of engineers and professionals delivering precision, safety, and excellence in every project.
              </p>
            </div>
            <div className="mt-20 flex justify-center">
              <button
                onClick={scrollToTeam}
                className="rounded-full bg-blue-900 px-10 py-4 text-base uppercase tracking-widest text-white font-bold shadow-lg transition duration-300 hover:bg-blue-800 hover:shadow-xl"
              >
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section ref={teamSectionRef} className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-8">
          {/* Leadership – Top 3 */}
          <div className="grid grid-cols-3 gap-16 mb-20">
            {team.slice(0, 3).map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden mb-6 rounded-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className={`w-full h-96 object-cover border-4 border-primary-dark`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-primary-dark">{member.name}</h3>
                <p className="text-info text-lg tracking-wider mt-2 font-medium">{member.role}</p>
                <p className="text-primary text-base mt-4 max-w-md mx-auto leading-relaxed">
                  {member.desc}
                </p>
                {member.phone && (
                  <a
                    href={`tel:+977${member.phone}`}
                    className="block text-primary-dark text-lg mt-4 hover:text-info transition font-medium"
                  >
                    {member.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
          {/* Supporting Team */}
          <div className="grid grid-cols-3 gap-12">
            {team.slice(3).map((member) => (
              <div key={member.name} className="group text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg grayscale group-hover:grayscale-0 transition border-2 border-primary"
                />
                <h3 className="text-xl font-heading font-medium text-primary-dark mt-6">{member.name}</h3>
                <p className="text-info/80 text-sm tracking-wider mt-1">{member.role}</p>
                <p className="text-primary-dark text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Contact the Team button */}
          <div className="text-center mt-24">
            <button
              onClick={goToContactTop}
              className="rounded-full bg-blue-900 px-10 py-4 text-base uppercase tracking-widest text-white font-medium transition duration-300 hover:bg-blue-800 hover:shadow-xl"
            >
              Contact the Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

               