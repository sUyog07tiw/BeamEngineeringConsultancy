// src/pages/Services.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Ruler, Shield, Box, Calculator, FileCheck, Home, ArrowRight, ChevronDown } from 'lucide-react';
import servicesImg from '../assets/images/website-images/services.jpg';

const Services = () => {
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

  const regularServices = [
    { 
      title: "Structural Design & Analysis", 
      desc: "Complete structural engineering for residential, commercial, and industrial projects with latest standards.",
      icon: Building2
    },
    { 
      title: "Civil Engineering Consultancy", 
      desc: "Site supervision, feasibility studies, project planning, and construction management.",
      icon: Ruler
    },
    { 
      title: "Seismic & Retrofit Design", 
      desc: "Earthquake-resistant design and strengthening of existing structures.",
      icon: Shield
    },
    { 
      title: "Quantity Surveying & Costing", 
      desc: "Accurate BOQ, material takeoff, and cost optimization.",
      icon: Calculator
    },
    { 
      title: "3D Modeling & BIM", 
      desc: "Revit & Tekla models for clash-free construction.",
      icon: Box
    },
    { 
      title: "Government Approval Support", 
      desc: "Full assistance with drawings and municipal approvals in Nepal.",
      icon: FileCheck
    }
  ];

  const goToContactTop = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const goToFullHomeConstruction = () => {
    navigate('/full-home-construction');
  };

  const scrollToServices = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesImg}
            alt="BEAM Engineering Services"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-transparent to-navy-900/50" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
              Our Expertise
            </span>
            <h1 className="text-hero font-display font-medium text-white tracking-wide text-shadow-hero">
              Services
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive engineering and architectural solutions tailored to bring your vision to life with precision and excellence.
            </p>
            <div className="section-divider mt-10" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Featured Service - Full Home Construction */}
          <div className="animate-on-scroll mb-20">
            <div
              onClick={goToFullHomeConstruction}
              className="group relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 p-10 lg:p-14 rounded-3xl cursor-pointer transition-all duration-500 hover:shadow-strong"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              
              <div className="relative flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-center lg:text-left flex-grow">
                  <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider text-gold bg-gold/10 rounded-full mb-4">
                    Premium Service
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-display font-medium text-white mb-4">
                    Full Home Construction
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                    BEAM now offers complete home construction from concept design to final handover. 
                    We deliver luxury residences with precision, safety and timeless elegance across Kathmandu Valley.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 text-sm font-medium uppercase tracking-wider rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 bg-blue-50 rounded-full mb-6">
              Engineering Services
            </span>
            <h2 className="text-title font-display text-navy-800">
              Our Core <span className="gradient-text">Expertise</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularServices.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={i}
                  className="animate-on-scroll group p-8 lg:p-10 bg-gradient-to-br from-white to-cream-100 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-strong transition-all duration-500"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-display font-medium text-navy-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <button 
                      onClick={goToContactTop}
                      className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Inquire Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main CTA */}
          <div className="text-center mt-20 animate-on-scroll">
            <button
              onClick={goToContactTop}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-title font-display text-navy-800 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's discuss how we can help bring your vision to life. Our expert team is ready to provide tailored solutions for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={goToContactTop}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-navy-800 text-white text-sm uppercase tracking-widest font-medium rounded-full hover:bg-navy-900 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+9779851048896"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-navy-800 text-navy-800 text-sm uppercase tracking-widest font-medium rounded-full hover:bg-navy-800 hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;