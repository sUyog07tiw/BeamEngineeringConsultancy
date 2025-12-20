// src/pages/Services.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import servicesImg from '../assets/images/website-images/services.jpg';

const Services = () => {
  const navigate = useNavigate();

  const goToContactTop = () => {
    navigate('/contact');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const goToFullHomeConstruction = () => {
    navigate('/full-home-construction');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  // ... regularServices array ...

  return (
    <>
      {/* HERO - unchanged */}
      {/* ... */}

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Full Home Construction box */}
            <div onClick={goToFullHomeConstruction} className="group bg-gray-50 p-12 rounded-2xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition duration-500 flex flex-col h-full cursor-pointer border border-gray-200 md:col-span-2 lg:col-span-3">
              {/* ... content ... */}
            </div>

            {/* Regular services */}
            {regularServices.map((service, i) => (
              <div key={i}>
                {/* ... simple list style ... */}
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <button onClick={goToContactTop} className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium transition duration-300 hover:bg-[#c2a54d] hover:shadow-xl">
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;