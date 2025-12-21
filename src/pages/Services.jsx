// src/pages/Services.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import servicesImg from '../assets/images/website-images/services.jpg';

const Services = () => {
  const navigate = useNavigate();

  const regularServices = [
    { title: "Structural Design & Analysis", desc: "Complete structural engineering for residential, commercial, and industrial projects with latest standards." },
    { title: "Civil Engineering Consultancy", desc: "Site supervision, feasibility studies, project planning, and construction management." },
    { title: "Seismic & Retrofit Design", desc: "Earthquake-resistant design and strengthening of existing structures." },
    { title: "Quantity Surveying & Costing", desc: "Accurate BOQ, material takeoff, and cost optimization." },
    { title: "3D Modeling & BIM", desc: "Revit & Tekla models for clash-free construction." },
    { title: "Government Approval Support", desc: "Full assistance with drawings and municipal approvals in Nepal." }
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white">
              SERVICES
            </h1>
            <div className="mx-auto mt-8 h-px w-40 bg-white/20" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Full Home Construction – FIRST (top priority) with featured box style */}
            <div
              onClick={goToFullHomeConstruction}
              className="group bg-gray-50 p-12 rounded-2xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition duration-500 flex flex-col h-full cursor-pointer border border-gray-200 md:col-span-2 lg:col-span-3"
            >
              <h3 className="text-3xl md:text-4xl font-medium text-[#0A1A2F] mb-8 tracking-wide text-center">
                Full Home Construction
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 flex-grow text-center">
                BEAM now offers complete turnkey home construction from concept design to final handover. 
                We deliver luxury residences with precision, safety and timeless elegance across Kathmandu Valley.
              </p>

              <span className="inline-block text-[#D4B65A] text-xl font-medium uppercase tracking-wider self-center group-hover:underline">
                View Projects →
              </span>
            </div>

            {/* Regular Services – Original simple list style */}
            {regularServices.map((service, i) => (
              <div key={i}>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="h-px bg-gray-300 w-20 mt-8"></div>
              </div>
            ))}
          </div>

          {/* Main CTA Button */}
          <div className="text-center mt-20">
            <button
              onClick={goToContactTop}
              className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium transition duration-300 hover:bg-[#c2a54d] hover:shadow-xl"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;