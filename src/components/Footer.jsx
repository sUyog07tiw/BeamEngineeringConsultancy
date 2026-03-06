import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/full-home-construction' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Structural Design',
    'Architectural Design',
    'Seismic Retrofit',
    '3D Modeling & BIM',
    'Government Approvals',
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block group">
              <h2 className="text-4xl lg:text-5xl font-display font-light tracking-wider group-hover:text-blue-400 transition-colors duration-300">
                BEAM
              </h2>
              <p className="text-xs tracking-[0.4em] uppercase text-slate-400 mt-1">
                Engineering Consultancy
              </p>
            </Link>
            <p className="mt-6 text-slate-400 leading-relaxed text-sm max-w-xs">
              Building your dreams with precision, safety, and excellence since 2003. Your trusted partner for all engineering consultancy needs.
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a 
                href="https://www.instagram.com/beamengineering_consultancy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+9779851048896" 
                  className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span className="text-sm">
                    9851048896 / 9851314760 / 9851324141
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:beamconsultancy123@gmail.com" 
                  className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span className="text-sm break-all">
                    beamconsultancy123@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  Pulchowk, Lalitpur<br />
                  Opposite Lalitpur Metropolitan City Office
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Beam Engineering Consultancy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span>Kathmandu, Nepal</span>
              <span className="hidden md:inline">•</span>
              <span>Sun - Fri: 10 AM - 5 PM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;