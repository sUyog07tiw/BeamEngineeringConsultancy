// src/pages/Contact.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import contactImg from '../assets/images/website-images/contact.jpg';

const Contact = () => {
  const contactInfoRef = useRef(null);

  const scrollToContactInfo = () => {
    contactInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactImg} alt="BEAM Office" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white">
              Get in Touch
            </h1>
            <div className="mx-auto mt-8 h-px w-40 bg-white/20" />
            <div className="mt-20">
              <button
                onClick={scrollToContactInfo}
                className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium hover:bg-[#c2a54d] hover:shadow-xl transition"
              >
                Consult Our Experts About Your Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contactInfoRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          {/* Contact Info – Only ONE Phone Icon for all 3 numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 mb-32 text-center">
            {/* Phone Numbers – Single Icon */}
            <div className="flex flex-col items-center space-y-6">
              <Phone className="w-14 h-14 text-gray-800" />
              <div className="space-y-5">
                <p className="text-3xl font-light text-gray-900 tracking-wider">9851048896</p>
                <p className="text-3xl font-light text-gray-900 tracking-wider">9851314760</p>
                <p className="text-3xl font-light text-gray-900 tracking-wider">9851324141</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-6">
              <Mail className="w-14 h-14 text-gray-800" />
              <a
                href="mailto:beamconsultancy123@gmail.com"
                className="text-2xl lg:text-3xl font-light text-gray-900 hover:text-gray-600 transition tracking-wide break-all"
              >
                beamconsultancy123@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center space-y-6">
              <Instagram className="w-14 h-14 text-gray-800" />
              <a
                href="https://www.instagram.com/beamengineering_consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl lg:text-3xl font-light text-gray-900 hover:text-gray-600 transition tracking-wide break-all"
              >
                @beamengineering_consultancy
              </a>
            </div>

            {/* Empty slot to maintain grid balance on large screens */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Opening Hours & Location – Side by Side */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-16 text-center">
              <div className="flex flex-col items-center">
                <Clock className="w-20 h-20 text-[#D4B65A] mb-8" />
                <h3 className="text-4xl font-light text-gray-900 tracking-wider mb-8">Opening Hours</h3>
                <p className="text-2xl text-gray-700 leading-loose">
                  Sunday – Friday<br />
                  10:00 AM – 5:00 PM
                </p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-20 h-20 text-[#D4B65A] mb-8" />
                <h3 className="text-4xl font-light text-gray-900 tracking-wider mb-8">Our Location</h3>
                <p className="text-2xl text-gray-700 leading-loose">
                  Pulchowk, Lalitpur<br />
                  Opposite Lalitpur Metropolitan City Office<br />
                  <span className="text-xl block mt-6">(ललितपुर महानगरपालिका कार्यालयको सामुन्ने)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="max-w-5xl mx-auto mb-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.267704940149!2d85.322499!3d27.674999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8f0b6bd5d%3A0x52cdea82029ebcd3!2sBeam%20Engineering%20Consultancy!5e0!3m2!1sen!2snp!4v1700000000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BEAM Location"
              className="rounded-xl shadow-2xl"
            ></iframe>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              to="/"
              onClick={scrollToTop}
              className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium hover:bg-[#c2a54d] hover:shadow-xl transition"
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