// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Ruler, Shield, Box, Calculator, FileCheck, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import sunakoti from '../assets/images/construction-projects/sunakothi/sunakoti3.jpeg';
import budanilkantha from '../assets/images/construction-projects/budanilkantha/budanilkantha4jpeg.jpeg';


// Import Balkumari photo
import balkumariImg from '../assets/images/construction-projects/balkumari/balkumari1.jpeg';

const services = [
  {
    title: "Structural Design & Analysis",
    desc: "Earthquake-resistant structural engineering for residential, commercial, and industrial projects using latest Nepali and international standards.",
    icon: Building2,
  },
  {
    title: "Architectural Design",
    desc: "Elegant, functional, and modern architectural solutions tailored to your vision and lifestyle.",
    icon: Ruler,
  },
  {
    title: "Seismic Retrofit & Strengthening",
    desc: "Expert assessment and reinforcement of existing buildings for enhanced earthquake safety.",
    icon: Shield,
  },
  {
    title: "3D Modeling & BIM",
    desc: "Advanced Revit & Tekla modeling for clash-free, efficient construction coordination.",
    icon: Box,
  },
  {
    title: "Quantity Surveying & Costing",
    desc: "Accurate BOQ preparation, material estimation, and cost optimization.",
    icon: Calculator,
  },
  {
    title: "Government Approval Support",
    desc: "Complete assistance with drawings, documentation, and municipal approvals in Nepal.",
    icon: FileCheck,
  }
];

const stats = [
  { value: "21+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "300+", label: "Trusted Clients" },
];

const Home = () => {
  const statsRef = useRef(null);

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

  return (
    <>
      <HeroSection
        title="Elegant Dream Homes & Iconic Commercial Spaces"
        subtitle={true}
      />

      {/* Stats Section - Glass Morphism Style */}
      <section className="relative -mt-20 z-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div 
            ref={statsRef}
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-strong border border-slate-200/50 p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll text-center group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold gradient-text group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-sm md:text-base text-slate-dark mt-3 tracking-wide font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Residential Projects */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 bg-blue-50 rounded-full mb-6">
              Portfolio
            </span>
            <h2 className="text-title font-display text-navy-800">
              Featured Residential Projects
            </h2>
            <div className="section-divider mt-6" />
            <p className="text-lg text-slate mt-8 max-w-2xl mx-auto leading-relaxed">
              We are proud to deliver luxury dream homes across Kathmandu Valley. From completed masterpieces to ongoing excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Budanilkantha */}
            <div className="animate-on-scroll group">
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] mb-6 shadow-soft group-hover:shadow-strong transition-all duration-500">
                  <img 
                  src={budanilkantha} 
                  alt="Budanilkantha Residence" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs uppercase tracking-wider rounded-full">Completed</span>
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-navy-800 group-hover:text-blue-600 transition-colors duration-300">
                Budanilkantha Residence
              </h3>
              <p className="text-slate mt-1">Completed Luxury Home</p>
            </div>

            {/* Sunakothi */}
            <div className="animate-on-scroll group" style={{ transitionDelay: '100ms' }}>
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] mb-6 shadow-soft group-hover:shadow-strong transition-all duration-500">
                <img
                  src={sunakoti}
                  alt="Sunakothi Residence"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs uppercase tracking-wider rounded-full">Ongoing</span>
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-navy-800 group-hover:text-blue-600 transition-colors duration-300">
                Sunakothi Residence
              </h3>
              <p className="text-slate mt-1">Ongoing Construction</p>
            </div>

            {/* Balkumari – Real photo */}
            <div className="animate-on-scroll group" style={{ transitionDelay: '200ms' }}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-soft group-hover:shadow-strong transition-all duration-500">
                <img 
                  src={balkumariImg} 
                  alt="Balkumari (Imadol) Residence" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs uppercase tracking-wider rounded-full">Ongoing</span>
                </div>
              </div>      
              <h3 className="text-xl font-display font-medium text-navy-800 group-hover:text-blue-600 transition-colors duration-300">
                Balkumari (Imadol) Residence
              </h3>
              <p className="text-slate mt-1">Ongoing Construction</p>
            </div>
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <Link
              to="/full-home-construction"
              className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-navy-800 text-navy-800 text-sm uppercase tracking-widest font-medium rounded-full hover:bg-navy-800 hover:text-white transition-all duration-300"
            >
              View Full Home Construction
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 bg-blue-50 rounded-full mb-6">
              What We Do
            </span>
            <h2 className="text-title font-display text-navy-800">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>
            
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="animate-on-scroll group p-8 lg:p-10 bg-gradient-to-br from-white to-cream-100 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-strong transition-all duration-500"
                  style={{ transitionDelay: `${index * 50}ms` }}
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
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 mt-6 text-blue-600 font-medium text-sm link-underline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
            Get Started
          </span>
          <h2 className="text-title font-display text-white">
            Ready to Build Your Dream?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
            Let's discuss your project requirements. Our team of experts is ready to bring your vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 text-sm uppercase tracking-widest font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+9779851048896"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/30 text-white text-sm uppercase tracking-widest font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;