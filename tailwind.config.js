const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      indigo: colors.indigo,
      blue: colors.blue,
      primary: {
        50: '#ecfdf8',
        100: '#d1faee',
        200: '#a7f3dd',
        300: '#6ee7c5',
        400: '#34d3a6',
        500: '#10b989',
        600: '#05966d',
        700: '#047857',
        800: '#065f46',
        900: '#064e3a',
        950: '#022c20',
      },
    },
    extend: {},
  },
  plugins: [],
};
