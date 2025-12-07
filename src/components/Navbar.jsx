// src/components/NavBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png'; // make sure the file name matches exactly

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-[#D4B65A] shadow-lg">

      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between h-full px-8 lg:px-16">

        {/* LEFT LINKS */}
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

        {/* CENTER LOGO + TEXT */}
        <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          <img
            src={logo}
            alt="Beam Engineering Consultancy"
            className="h-10 md:h-12 object-contain"
          />
          <div className="text-center leading-none">
            <h1 className="text-5xl md:text-6xl font-thin text-[#0A1A2F]">
              BEAM
            </h1>
            <p className="text-[#0A1A2F]/80 text-[10px] md:text-xs tracking-[0.6em] uppercase -mt-1">
              ENGINEERING CONSULTANCY
            </p>
          </div>
        </Link>

        {/* RIGHT LINKS */}
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

      {/* MOBILE */}
      <div className="md:hidden flex items-center justify-center h-full gap-3 px-6">
        <img src={logo} alt="Beam" className="h-9 object-contain" />
        <div className="text-center leading-none">
          <div className="text-4xl font-thin text-[#0A1A2F]">BEAM</div>
          <div className="text-[9px] text-[#0A1A2F]/80 tracking-[0.5em] uppercase -mt-1">
            ENGINEERING CONSULTANCY
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;