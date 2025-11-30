import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative text-center px-8">
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-thin tracking-widest text-white">
            CONTACT
          </h1>
          <div className="h-px bg-white/20 w-40 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Details with Icons */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">

          <div className="space-y-20 text-center">

            {/* Phone 1 */}
            <div className="flex flex-col items-center">
              <Phone className="w-10 h-10 text-gray-800 mb-5" />
              <p className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider">
                9851048896
              </p>
            </div>

            {/* Phone 2 */}
            <div className="flex flex-col items-center">
              <Phone className="w-10 h-10 text-gray-800 mb-5" />
              <p className="text-3xl md:text-4xl font-light text-gray-900 tracking-wider">
                9851314760
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <Mail className="w-10 h-10 text-gray-800 mb-5" />
              <a
                href="mailto:beamconsultancy123@gmail.com"
                className="text-2xl md:text-3xl font-light text-gray-900 hover:text-gray-600 transition tracking-wide"
              >
                beamconsultancy123@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center">
              <Instagram className="w-10 h-10 text-gray-800 mb-5" />
              <a
                href="https://www.instagram.com/beamengineering_consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-light text-gray-900 hover:text-gray-600 transition tracking-wide"
              >
                @beamengineering_consultancy
              </a>
            </div>

          </div>

          {/* Back Button */}
          <div className="text-center mt-28">
            <Link
              to="/"
              className="inline-block bg-black text-white px-14 py-6 text-lg tracking-widest uppercase font-medium hover:bg-gray-900 transition duration-300"
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