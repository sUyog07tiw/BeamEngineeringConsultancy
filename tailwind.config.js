/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                beige: {
                  DEFAULT: '#EDE8D0', // Elegant beige for navbar
                },
                blue: {
                  DEFAULT: '#2563EB', // Vibrant blue for buttons
                  light: '#3B82F6',
                  dark: '#1D4ED8',
                },
        primary: {
          DEFAULT: '#1B365D', // Deep blue for engineering
          light: '#2C4A7A',
          dark: '#14243A',
        },
        accent: {
          DEFAULT: '#F9A826', // Vibrant orange for energy
          light: '#FFD580',
          dark: '#C97A0A',
        },
        secondary: {
          DEFAULT: '#E5E7EB', // Light gray for backgrounds
          dark: '#A3A7AD',
        },
        success: '#3CB371', // For positive actions
        error: '#E53E3E', // For errors
        info: '#2563EB', // For info highlights
        beam: {
          DEFAULT: '#4C5C2D', // Client's preferred elegant green
          light: '#5E7036',
          dark: '#3A471F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
