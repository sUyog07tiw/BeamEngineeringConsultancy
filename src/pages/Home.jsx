// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import hero from '../assets/images/website-images/hero.avif';

// Import Balkumari photo
import balkumariImg from '../assets/images/construction-projects/balkumari/balkumari1.jpeg'; // Adjust to .jpg if needed

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
            <span className="font-bold text-[#D4B65A]">ELEGANT DREAM HOMES</span> 
            
            <span className="font-bold text-[#D4B65A]"> ]ICONIC COMMERCIAL SPACES</span>
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
              Building Engineering & Architectural Multitude
            </span>
            <span className="block mt-8 text-lg md:text-xl lg:text-2xl tracking-wider text-gray-300">
              Structural • Architectural • Naksa Pass • Civil Engineering Consultancy
            </span>
          </>
        }
        image={hero}
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <h3 className="text-5xl md:text-6xl font-bold text-[#D4B65A] group-hover:scale-110 transition-transform duration-300">
                21+
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 mt-4 tracking-wide group-hover:text-[#0A1A2F] transition-colors duration-300">
                Years of Excellence
              </p>
            </div>
            <div className="group">
              <h3 className="text-5xl md:text-6xl font-bold text-[#D4B65A] group-hover:scale-110 transition-transform duration-300">
                500+
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 mt-4 tracking-wide group-hover:text-[#0A1A2F] transition-colors duration-300">
                Projects Delivered
              </p>
            </div>
            <div className="group">
              <h3 className="text-5xl md:text-6xl font-bold text-[#D4B65A] group-hover:scale-110 transition-transform duration-300">
                98%
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 mt-4 tracking-wide group-hover:text-[#0A1A2F] transition-colors duration-300">
                Client Satisfaction
              </p>
            </div>
            <div className="group">
              <h3 className="text-5xl md:text-6xl font-bold text-[#D4B65A] group-hover:scale-110 transition-transform duration-300">
                300+
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 mt-4 tracking-wide group-hover:text-[#0A1A2F] transition-colors duration-300">
                Trusted Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Residential Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-widest text-[#0A1A2F]">
              Featured Residential Projects
            </h2>
            <div className="mx-auto mt-6 h-px w-48 bg-[#D4B65A]/60" />
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              We are proud to deliver luxury dream homes across Kathmandu Valley. From completed masterpieces to ongoing excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Budanilkantha */}
            <div className="group text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 mb-6 group-hover:border-[#D4B65A] transition" />
              <h3 className="text-2xl font-medium text-[#0A1A2F] mb-2">Budanilkantha Residence</h3>
              <p className="text-gray-600">Completed Luxury Home</p>
            </div>

            {/* Sunakothi */}
            <div className="group text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 mb-6 group-hover:border-[#D4B65A] transition" />
              <h3 className="text-2xl font-medium text-[#0A1A2F] mb-2">Sunakothi Residence</h3>
              <p className="text-gray-600">Ongoing Construction</p>
            </div>

            {/* Balkumari – Real photo */}
            <div className="group text-center">
              <div className="overflow-hidden rounded-xl mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={balkumariImg} 
                  alt="Balkumari (Imadol) Residence" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#0A1A2F] mb-2">Balkumari (Imadol) Residence</h3>
              <p className="text-gray-600">Ongoing Construction</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/full-home-construction"
              className="inline-block bg-[#D4B65A] text-[#0A1A2F] px-14 py-5 text-xl uppercase tracking-widest font-medium rounded-full hover:bg-[#c2a54d] transition duration-300 shadow-xl"
            >
              View Full Home Construction
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
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