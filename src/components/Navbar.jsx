// src/components/NavBar.jsx
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/website-images/Logo.png";

export default function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto">
        {/* Minimal elegant header */}
        <div className="bg-beige backdrop-blur-md border-b border-beam-dark/10 md:px-5 shadow-lg">
          <div className="flex h-20 items-center justify-between px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="BEAM" className="h-12 object-contain" />
              <div className="hidden sm:block leading-tight">
                <h1 className="text-3xl font-light tracking-widest text-blue">BEAM</h1>
                <p className="text-[10px] tracking-[0.4em] uppercase text-blue/80">
                  Engineering Consultancy
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative text-sm uppercase tracking-widest transition-colors px-2 py-1 rounded-md
                      ${active ? "text-blue font-semibold" : "text-blue/80 hover:text-blue"}`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute -bottom-2 left-1/2 h-[2px] w-7 -translate-x-1/2 rounded-full bg-blue-light" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-blue"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl bg-beige backdrop-blur-md shadow-xl border border-beam-dark/10 overflow-hidden">
            <div className="flex flex-col divide-y divide-blue/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`px-6 py-4 text-sm uppercase tracking-widest transition-colors rounded-none
                    ${location.pathname === item.path
                      ? "text-blue font-medium bg-blue-light/10"
                      : "text-blue/80 hover:text-blue hover:bg-blue-light/5"}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
