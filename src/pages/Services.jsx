import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: "Structural Design & Analysis", desc: "Complete structural engineering for residential, commercial, and industrial projects with latest standards." },
    { title: "Civil Engineering Consultancy", desc: "Site supervision, feasibility studies, project planning, and construction management." },
    { title: "Seismic & Retrofit Design", desc: "Earthquake-resistant design and strengthening of existing structures." },
    { title: "Quantity Surveying & Costing", desc: "Accurate BOQ, material takeoff, and cost optimization." },
    { title: "3D Modeling & BIM", desc: "Revit & Tekla models for clash-free construction." },
    { title: "Government Approval Support", desc: "Full assistance with drawings and municipal approvals in Nepal." }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative text-center px-8">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white">
            SERVICES
          </h1>
          <div className="h-px bg-white/20 w-40 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {services.map((service, i) => (
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

          <div className="text-center mt-24">
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-12 py-5 text-lg tracking-widest uppercase hover:bg-gray-900 transition"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;