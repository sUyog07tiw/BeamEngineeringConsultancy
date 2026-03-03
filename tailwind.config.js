/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
