// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import hero from '../assets/images/website-images/hero.avif';  // Your hero image

const services = [
  {
    title: "Structural Design & Analysis",
    desc: "Earthquake-resistant structural engineering for residential, commercial, and industrial projects using latest Nepali and international standards."
  },
  {
    title: "Architectural Design",
    desc: "Elegant, functional, and modern architectural solutions tailored to your vision and lifestyle."
  },
  {
    title: "Seismic Retrofit & Strengthening",
    desc: "Expert assessment and reinforcement of existing buildings for enhanced earthquake safety."
  },
  {
    title: "3D Modeling & BIM",
    desc: "Advanced Revit & Tekla modeling for clash-free, efficient construction coordination."
  },
  {
    title: "Quantity Surveying & Costing",
    desc: "Accurate BOQ preparation, material estimation, and cost optimization."
  },
  {
    title: "Government Approval Support",
    desc: "Complete assistance with drawings, documentation, and municipal approvals in Nepal."
  }
];

const Home = () => {
  return (
    <>
      <HeroSection
        title={
          <>
            <span className="font-bold text-[#D4B65A]">ELEGANT DREAM HOMES</span> & 
            <span className="font-bold text-[#D4B65A]">ICONIC COMMERCIAL SPACES</span>
            <br />
            CRAFTED FOR EXCELLENCE
          </>
        }
        subtitle={
          <>
            <span className="block text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase font-extralight text-[#D4B65A] mb-6">
              BEAM
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl tracking-wide text-gray-200">
              Building Engineering & Architectural Multimind
            </span>
            <span className="block mt-8 text-lg md:text-xl lg:text-2xl tracking-wider text-gray-300">
              Structural • Architectural • Engineering Consultancy
            </span>
          </>
        }
        image={hero}
      />

      {/* Services Overview Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* "OUR EXPERTISE" – Exact same font style as hero title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-[#0A1A2F] leading-tight">
              <span className="font-bold text-[#D4B65A]">OUR</span> EXPERTISE
            </h2>
            <div className="mx-auto mt-8 h-px w-48 bg-[#D4B65A]/60" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition duration-300 flex flex-col h-full"
              >
                <h3 className="text-2xl font-medium text-[#0A1A2F] mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-block text-[#D4B65A] font-medium hover:text-[#c2a54d] transition self-center"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* Explore All Services Button */}
          <div className="text-center mt-20">
            <Link
              to="/services"
              className="inline-block bg-[#D4B65A] text-[#0A1A2F] px-14 py-5 text-xl uppercase tracking-widest font-medium rounded-full hover:bg-[#c2a54d] transition duration-300 shadow-xl"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;