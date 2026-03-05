// src/pages/Contact.jsx
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin, Clock, ChevronDown, ArrowRight } from 'lucide-react';
import contactImg from '../assets/images/website-images/contact.jpg';

const Contact = () => {
  const contactInfoRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContactInfo = () => {
    contactInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-screen">
        <div className="absolute inset-0">
          <img src={contactImg} alt="BEAM Office" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-transparent to-navy-900/50" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">
          <div className="mx-auto w-full max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
              Contact
            </span>
            <h1 className="text-hero font-display font-medium text-white tracking-wide text-shadow-hero">
              Get in Touch
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Tell us about your project. We'll guide you on structural design, construction planning, and engineering consulting.
            </p>
            <div className="section-divider mt-10" />

            <div className="mt-12">
              <button
                onClick={scrollToContactInfo}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm uppercase tracking-widest font-medium rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Consult Our Experts
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContactInfo}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Contact Info</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </section>

      {/* Main Content */}
      <section ref={contactInfoRef} className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 bg-blue-50 rounded-full mb-6">
              Reach Out
            </span>
            <h2 className="text-title font-display text-navy-800">Contact Details</h2>
            <div className="section-divider mt-6" />
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate leading-relaxed">
              Reach us directly by phone, email, or Instagram. We typically respond during office hours.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Phone */}
            <div className="animate-on-scroll group p-8 lg:p-10 bg-gradient-to-br from-white to-cream-100 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-strong transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 mx-auto">
                <Phone className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-6 text-xl font-display font-medium text-navy-800 text-center">Call Us</h3>
              <div className="mt-6 space-y-3 text-center">
                <a
                  href="tel:+9779851048896"
                  className="block text-lg text-slate hover:text-blue-600 transition-colors duration-300"
                >
                  9851048896
                </a>
                <a
                  href="tel:+9779851314760"
                  className="block text-lg text-slate hover:text-blue-600 transition-colors duration-300"
                >
                  9851314760
                </a>
                <a
                  href="tel:+9779851324141"
                  className="block text-lg text-slate hover:text-blue-600 transition-colors duration-300"
                >
                  9851324141
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="animate-on-scroll group p-8 lg:p-10 bg-gradient-to-br from-white to-cream-100 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-strong transition-all duration-500" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 mx-auto">
                <Mail className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-6 text-xl font-display font-medium text-navy-800 text-center">Email</h3>
              <p className="mt-4 text-center text-slate">Send us your requirements anytime.</p>
              <a
                href="mailto:beamconsultancy123@gmail.com"
                className="mt-4 block text-center text-blue-600 hover:text-blue-700 transition-colors duration-300 break-all"
              >
                beamconsultancy123@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="animate-on-scroll group p-8 lg:p-10 bg-gradient-to-br from-white to-cream-100 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-strong transition-all duration-500" style={{ transitionDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 mx-auto">
                <Instagram className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-6 text-xl font-display font-medium text-navy-800 text-center">Instagram</h3>
              <p className="mt-4 text-center text-slate">See our updates and message us.</p>
              <a
                href="https://www.instagram.com/beamengineering_consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                @beamengineering_consultancy
              </a>
            </div>
          </div>

          {/* Opening Hours & Location */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="animate-on-scroll group p-10 bg-cream-100 rounded-2xl text-center hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto shadow-soft">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-display font-medium text-navy-800">Opening Hours</h3>
              <p className="mt-5 text-lg text-slate leading-loose">
                Sunday – Friday<br />
                10:00 AM – 5:00 PM
              </p>
            </div>

            <div className="animate-on-scroll group p-10 bg-cream-100 rounded-2xl text-center hover:shadow-soft transition-all duration-300" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto shadow-soft">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-display font-medium text-navy-800">Our Location</h3>
              <p className="mt-5 text-lg text-slate leading-loose">
                Pulchowk, Lalitpur<br />
                Opposite Lalitpur Metropolitan City Office
                <span className="block mt-2 text-sm text-slate-light">(ललितपुर महानगरपालिका कार्यालयको सामुन्ने)</span>
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12 animate-on-scroll overflow-hidden rounded-2xl shadow-strong">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.267704940149!2d85.322499!3d27.674999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8f0b6bd5d%3A0x52cdea82029ebcd3!2sBeam%20Engineering%20Consultancy!5e0!3m2!1sen!2snp!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BEAM Location"
              className="block w-full"
            />
          </div>

          {/* Back to Home */}
          <div className="mt-14 text-center animate-on-scroll">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-navy-800 text-navy-800 text-sm uppercase tracking-widest font-medium rounded-full hover:bg-navy-800 hover:text-white transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
