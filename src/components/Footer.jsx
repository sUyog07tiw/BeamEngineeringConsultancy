import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-6xl md:text-8xl font-thin tracking-widest mb-8">BEAM</h2>
        <p className="text-gray-500 text-sm tracking-[0.5em] uppercase mb-12">ENGINEERING CONSULTANCY</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg mb-12">
          <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> 9851048896</div>
          <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> 9851314760</div>
          <div className="flex items-center gap-3"><Mail className="w-5 h-5" /> beamconsultancy123@gmail.com</div>
          <div className="flex items-center gap-3"><Instagram className="w-5 h-5" /> @beamengineering_consultancy</div>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Beam Engineering Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;