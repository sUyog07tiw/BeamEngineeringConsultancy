// src/components/HeroSection.jsx
// src/components/HeroSection.jsx

const HeroSection = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Engineering Background"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white">
            {title}
          </h1>

          {subtitle && (
            <div className="mt-10">
              <div className="mx-auto mb-8 h-px w-48 bg-white/30" />
              <p className="text-lg md:text-xl lg:text-2xl tracking-wide text-gray-300">
                {subtitle}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-14 flex justify-center gap-6">
            <a
              href="/services"
              className="rounded-full border border-white/60 px-8 py-3 text-sm uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="rounded-full bg-[#D4B65A] px-8 py-3 text-sm uppercase tracking-widest text-black transition hover:bg-[#c2a54d]"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
