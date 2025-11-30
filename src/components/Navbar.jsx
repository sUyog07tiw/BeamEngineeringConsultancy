import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      
      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center justify-between h-20 px-10 lg:px-20 xl:px-32">
      <div className="m-10 flex flex-row items-center justify-between w-full">
      

        {/* LEFT MENU */}
        <div className="p-5 flex items-center gap-5 space-x-10">
          <Link to="/" className="nav-link text-white">Home</Link>
          <Link to="/about" className="nav-link text-white">About</Link>
        </div>

        {/* CENTER LOGO */}
        <div className="flex flex-col items-center leading-tight">
          <h1 className="text-4xl font-light tracking-[0.25em] text-white">
            BEAM
          </h1>
          <p className="text-[0.55rem] text-gray-400 tracking-[0.5em] uppercase">
            Engineering Consultancy
          </p>
        </div>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-5 space-x-10">
          <Link to="/services" className="nav-link text-white">Services</Link>
          <Link to="/contact" className="nav-link text-white">Contact</Link>
        </div>

      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden flex flex-col items-center py-4 space-y-3">

        <div className="flex space-x-6 text-gray-300 text-sm uppercase tracking-wider">
          <Link to="/" className="mobile-link">Home</Link>
          <Link to="/about" className="mobile-link">About</Link>
          <Link to="/services" className="mobile-link">Services</Link>
          <Link to="/contact" className="mobile-link">Contact</Link>
        </div>

        <h1 className="text-3xl text-white font-light tracking-[0.2em]">BEAM</h1>
        <p className="text-[0.55rem] text-gray-400 tracking-[0.4em] uppercase">
          Engineering Consultancy
        </p>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
