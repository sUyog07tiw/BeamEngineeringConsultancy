/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Navy for trust & authority
        navy: {
          DEFAULT: '#0A1628',
          50: '#E8ECF2',
          100: '#C5CED9',
          200: '#94A3B8',
          300: '#64748B',
          400: '#334155',
          500: '#1E293B',
          600: '#14213D',
          700: '#0F172A',
          800: '#0A1628',
          900: '#050A12',
        },
        // Accent Blue - CTAs & Interactive
        blue: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Warm Cream - Backgrounds
        cream: {
          DEFAULT: '#F8F6F1',
          50: '#FDFCFA',
          100: '#F8F6F1',
          200: '#F1EDE4',
          300: '#E8E2D5',
        },
        // Premium Gold Accent
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C35A',
          dark: '#B8962E',
        },
        // Semantic Colors
        slate: {
          DEFAULT: '#64748B',
          light: '#94A3B8',
          dark: '#334155',
        },
        // Legacy support
        beige: {
          DEFAULT: '#F8F6F1',
        },
        primary: {
          DEFAULT: '#0A1628',
          light: '#1E3A5F',
          dark: '#050A12',
        },
        accent: {
          DEFAULT: '#D4AF37',
          light: '#E5C35A',
          dark: '#B8962E',
        },
        secondary: {
          DEFAULT: '#F1F5F9',
          dark: '#94A3B8',
        },
        success: '#10B981',
        error: '#EF4444',
        info: '#3B82F6',
        beam: {
          DEFAULT: '#0A1628',
          light: '#1E3A5F',
          dark: '#050A12',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.1' }],
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.15' }],
        'title': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2' }],
        'subtitle': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'strong': '0 20px 50px rgba(0, 0, 0, 0.12)',
        'glow-blue': '0 10px 40px rgba(37, 99, 235, 0.25)',
        'glow-gold': '0 10px 40px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #2563EB 100%)',
        'card-gradient': 'linear-gradient(145deg, #FFFFFF 0%, #F8F6F1 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0A1628 0%, #14213D 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
        'scale-in': 'scaleIn 0.4s ease forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};
