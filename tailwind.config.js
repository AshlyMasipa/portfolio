// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
  extend: {
    fontSize: {
      'hero': ['4rem', '1.1'],
      'section-title': ['2.25rem', '1.2'],
      'body': ['1.125rem', '1.6'],
    },
    colors: {
      primary: '#000',          // primary black
      secondary: '#444',        // dark gray text
      accent: '#0ea5e9',        // blue accent
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    },
  },

plugins: [require('@tailwindcss/typography')],
};
