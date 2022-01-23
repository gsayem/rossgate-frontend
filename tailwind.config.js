const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'autumn-white': {
          DEFAULT: '#FCFCFA',
        },
        'autumn-yellow': {
          10: '#F7F4EB',
          DEFAULT: '#FAF8F3',
        },
        green: colors.emerald, // need this now that we're on tailwind v3
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
