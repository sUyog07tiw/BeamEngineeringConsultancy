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
        {/* ... hero ... */}
        <div className="mt-20 flex justify-center">
          <button onClick={scrollToContactInfo} className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium transition duration-300 hover:bg-[#c2a54d] hover:shadow-xl">
            Consult Our Experts About Your Projects
          </button>
        </div>
      </section>

      <section ref={contactInfoRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* ... contact info, map ... */}

          <div className="text-center mt-32">
            <Link
              to="/"
              onClick={scrollToTop}
              className="rounded-full bg-[#D4B65A] px-10 py-4 text-base uppercase tracking-widest text-[#0A1A2F] font-medium transition duration-300 hover:bg-[#c2a54d] hover:shadow-xl"
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