// src/components/NavBar.jsx
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/images/website-images/Logo.png";

export default function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto">
        {/* Modern Glass-morphism Header */}
        <div 
          className={`transition-all duration-500 ease-out ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-xl shadow-medium border-b border-slate-200/50' 
              : 'bg-white/80 backdrop-blur-lg border-b border-slate-100/30'
          }`}
        >
          <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-4 group"
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="BEAM" 
                  className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <h1 className="text-2xl font-display font-semibold tracking-wider text-navy-800 group-hover:text-blue-600 transition-colors duration-300">
                  BEAM
                </h1>
                <p className="text-[10px] tracking-[0.35em] uppercase text-slate font-sans font-medium">
                  Engineering Consultancy
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-5 py-2.5 text-sm font-medium uppercase tracking-wider rounded-full transition-all duration-300 ${
                      active 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-navy-800 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </Link>
                );
              })}
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl text-navy-800 hover:bg-slate-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-4 right-4 transition-all duration-300 ease-out ${
            open 
              ? 'opacity-100 translate-y-2 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-strong border border-slate-200/50 overflow-hidden p-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`px-5 py-4 text-sm font-medium uppercase tracking-wider rounded-xl transition-all duration-200 ${
                      active
                        ? "text-blue-600 bg-blue-50"
                        : "text-navy-800 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 mx-2 mb-2 px-5 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium uppercase tracking-wider rounded-xl text-center shadow-lg"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
