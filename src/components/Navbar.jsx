// src/components/NavBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 md:h-24 bg-[#D4B65A] shadow-lg">

      {/* DESKTOP – Clean & Spacious */}
      <div className="hidden md:flex items-center justify-between h-full px-10 lg:px-20">

        {/* Left Links */}
        <div className="flex items-center gap-12 lg:gap-20">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[#0A1A2F] text-sm lg:text-base tracking-widest font-medium uppercase transition-all
                ${location.pathname === item.path ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
              `}
            >
              {item.name}
              {location.pathname === item.path && (
                <div className="h-0.5 bg-[#0A1A2F] mt-1 w-8 mx-auto" />
              )}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO + TEXT – Spacious & Elegant */}
        <Link to="/" className="flex items-center gap-6">
          <img src={logo} alt="Beam Logo" className="h-14 md:h-16 object-contain" />

          <div className="leading-tight">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-widest text-[#0A1A2F]">
              BEAM
            </h1>
            <p className="text-[#0A1A2F]/85 text-[11px] md:text-xs tracking-[0.7em] uppercase mt-1">
              ENGINEERING CONSULTANCY
            </p>
            <p className="text-[#0A1A2F]/60 text-[8px] md:text-[9px] tracking-[0.5em] uppercase mt-1">
              BUILDING ENGINEERING & ARCHITECTURAL MULTITUDE
            </p>
          </div>
        </Link>

        {/* Right Links */}
        <div className="flex items-center gap-12 lg:gap-20">
          {navItems.slice(2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[#0A1A2F] text-sm lg:text-base tracking-widest font-medium uppercase transition-all
                ${location.pathname === item.path ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
              `}
            >
              {item.name}
              {location.pathname === item.path && (
                <div className="h-0.5 bg-[#0A1A2F] mt-1 w-8 mx-auto" />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE – Clean & Balanced */}
      <div className="md:hidden flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Beam" className="h-11 object-contain" />
          <div className="leading-none">
            <div className="text-4xl font-thin text-[#0A1A2F]">BEAM</div>
            <div className="text-[9px] text-[#0A1A2F]/90 tracking-[0.5em] uppercase -mt-1">
              ENGINEERING CONSULTANCY
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-xs tracking-widest text-[#0A1A2F]">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;