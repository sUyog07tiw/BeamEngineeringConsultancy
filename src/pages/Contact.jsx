// src/pages/Contact.jsx
import React, { useRef } from 'react';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';
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
      <section className="relative w-full overflow-hidden min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0">
          <img src={contactImg} alt="BEAM Office" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-20">
          <div className="mx-auto w-full max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Contact</p>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.18em] text-white">
              Get in Touch
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              Tell us about your project. We’ll guide you on structural design, construction planning, and engineering consulting.
            </p>
            <div className="mx-auto mt-10 h-px w-48 bg-white/15" />

            <div className="mt-12 flex items-center justify-center">
              <Button
                onClick={scrollToContactInfo}
                className="rounded-full bg-[#D4B65A] text-[#0A1A2F] hover:bg-[#c2a54d] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4B65A]/60 focus:ring-offset-2"
              >
                Consult Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contactInfoRef} className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light tracking-wider text-gray-900">Contact Details</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
              Reach us directly by phone, email, or Instagram. We typically respond during office hours.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4B65A]/15 text-[#0A1A2F]">
                <Phone className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-wider text-gray-900 text-center">Call Us</h3>
              <div className="mt-6 flex justify-center">
                <div className="grid grid-cols-2  gap-x-3 gap-y-3 justify-items-center">
                  <a
                    href="tel:+9779851048896"
                    className="text-2xl font-light tracking-wide text-gray-900 hover:text-gray-600 transition focus:outline-none focus:ring-2 focus:ring-[#D4B65A]/60 focus:ring-offset-2 rounded"
                    aria-label="Call 9851048896"
                  >
                    9851048896,
                  </a>
                  <a
                    href="tel:+9779851314760"
                    className="text-2xl font-light tracking-wide text-gray-900 hover:text-gray-600 transition focus:outline-none focus:ring-2 focus:ring-[#D4B65A]/60 focus:ring-offset-2 rounded"
                    aria-label="Call 9851314760"
                  >
                    9851314760,
                  </a>
                  <a
                    href="tel:+9779851324141"
                    className=" text-2xl font-light tracking-wide text-gray-900 hover:text-gray-600 transition focus:outline-none focus:ring-2 focus:ring-[#D4B65A]/60 focus:ring-offset-2 rounded"
                    aria-label="Call 9851324141"
                  >
                    9851324141
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4B65A]/15 text-[#0A1A2F]">
                <Mail className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-wider text-gray-900 text-center">Email</h3>
              <p className="mt-4 text-center text-gray-600">Send us your requirements anytime.</p>
              <a
                href="mailto:beamconsultancy123@gmail.com"
                className="mt-6 block text-center text-lg sm:text-xl font-light text-gray-900 hover:text-gray-600 transition break-all focus:outline-none focus:ring-2 focus:ring-[#D4B65A]/60 focus:ring-offset-2 rounded"
              >
                beamconsultancy123@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4B65A]/15 text-[#0A1A2F]">
                <Instagram className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-wider text-gray-900 text-center">Instagram</h3>
              <p className="mt-4 text-center text-gray-600">See our updates and message us.</p>
              <a
                href="https://www.instagram.com/beamengineering_consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center text-lg sm:text-xl font-light text-gray-900 hover:text-gray-600 transition break-all focus:outline-none focus:ring-2 focus:ring-[#D4B65A]/60 focus:ring-offset-2 rounded"
              >
                @beamengineering_consultancy
              </a>
            </div>
          </div>

          {/* Opening Hours & Location */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center shadow-sm">
              <Clock className="mx-auto h-12 w-12 text-[#D4B65A]" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-light tracking-wider text-gray-900">Opening Hours</h3>
              <p className="mt-5 text-lg text-gray-700 leading-loose">
                Sunday – Friday<br />
                10:00 AM – 5:00 PM
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center shadow-sm">
              <MapPin className="mx-auto h-12 w-12 text-[#D4B65A]" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-light tracking-wider text-gray-900">Our Location</h3>
              <p className="mt-5 text-lg text-gray-700 leading-loose">
                Pulchowk, Lalitpur<br />
                Opposite Lalitpur Metropolitan City Office
                <span className="mt-4 block text-base text-gray-600">(ललितपुर महानगरपालिका कार्यालयको सामुन्ने)</span>
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12 overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.267704940149!2d85.322499!3d27.674999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8f0b6bd5d%3A0x52cdea82029ebcd3!2sBeam%20Engineering%20Consultancy!5e0!3m2!1sen!2snp!4v1700000000000"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BEAM Location"
              className="block w-full"
            />
          </div>

          {/* Back to Home */}
          <div className="mt-14 text-center">
            <Button
              to="/"
              onClick={scrollToTop}
              className="rounded-full bg-[#D4B65A] text-[#0A1A2F] hover:bg-[#c2a54d] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4B65A]/60 focus:ring-offset-2"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;