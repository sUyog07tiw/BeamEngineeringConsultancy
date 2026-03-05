// src/pages/About.jsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Phone, ArrowRight, User } from 'lucide-react';
import aboutImg from '../assets/images/website-images/about.jpg';

// Import team images
import basuDev from '../assets/images/teams/basudev.jpg';
import biraj from '../assets/images/teams/biraj.jpg';

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
    img: "",
    desc: "Specializes in structural analysis, design, and safety for residential and commercial projects."
  },
  {
    name: "Er. Rahul Yadav",
    role: "Engineer, Employee",
    img: "",
    desc: "Engineer and employee at BEAM Engineering Consultancy, contributing technical expertise to projects."
  },
  {
    name: "Er. Samir Tapendra",
    role: "Engineer, Employee",
    img: "",
    desc: "Engineer and employee at BEAM Engineering Consultancy, supporting engineering and project delivery."
  },
  {
    name: "Suman Shrestha",
    role: "Employee",
    img: "",
    desc: "Employee at BEAM Engineering Consultancy."
  }
];

const About = () => {
  const teamSectionRef = useRef(null);
  const navigate = useNavigate();

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
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImg}
            alt="BEAM Engineering Consultancy"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-transparent to-navy-900/50" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">
          <div className="mx-auto w-full max-w-5xl text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
              About Us
            </span>
            <h1 className="text-hero font-display font-medium text-white tracking-wide text-shadow-hero">
              Leadership & Team
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg lg:text-xl text-slate-300 leading-relaxed">
              A dedicated team of engineers and professionals delivering precision, safety, and excellence in every project.
            </p>
            <div className="section-divider mt-10" />

            <div className="mt-12">
              <button
                onClick={scrollToTeam}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToTeam}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Our Team</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </section>

      {/* Team Section */}
      <section ref={teamSectionRef} className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 bg-blue-50 rounded-full mb-6">
              Our People
            </span>
            <h2 className="text-title font-display text-navy-800">Leadership Team</h2>
            <div className="section-divider mt-6" />
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate leading-relaxed">
              The experienced professionals behind BEAM's success and reputation for excellence.
            </p>
          </div>

          {/* Leadership – Top 3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {team.slice(0, 3).map((member, index) => (
              <div 
                key={member.name} 
                className="animate-on-scroll group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <User className="w-24 h-24 text-slate-300" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover overlay with phone */}
                    {member.phone && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <a
                          href={`tel:+977${member.phone}`}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-white/95 backdrop-blur-sm rounded-full text-navy-800 font-medium hover:bg-white transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-display font-medium text-navy-800">{member.name}</h3>
                    <p className="text-blue-600 text-sm font-medium uppercase tracking-wider mt-1">{member.role}</p>
                    <p className="text-slate text-sm mt-4 leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Team Section */}
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-subtitle font-display text-navy-800">Supporting Team</h3>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.slice(3).map((member, index) => (
              <div 
                key={member.name} 
                className="animate-on-scroll group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-10 h-10 text-slate-300" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-display font-medium text-navy-800">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-medium uppercase tracking-wider mt-1">{member.role}</p>
                  <p className="text-slate text-sm mt-3 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
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
            Work With Us
          </span>
          <h2 className="text-title font-display text-white">Ready to Start Your Project?</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Connect with our experienced team to discuss your engineering and construction needs.
          </p>
          <div className="mt-10">
            <button 
              onClick={goToContactTop} 
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact the Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

