/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#E7EFF6",
        secondary: "#ADCBE3",
        headerFooter: "#4B86B4", // bg-green-300
        textColor: "#2A4D69",
        grisFigma: "#878787"
      },
      fontFamily: {
        neoSansArabic: ['"Neo Sans Arabic"', 'sans-serif']
      }
    },
  },
  plugins: [],
};

// extend: {
//   spacing: {
//     '128': '32rem',
//     '144': '36rem',
//   },
//   borderRadius: {
//     '4xl': '2rem',
//   },
//   fontFamily: {
//     sans: ['Graphik', 'sans-serif'],
//     serif: ['Merriweather', 'serif'],
//   },
//   fontSize: {
//     'xs': '.75rem',
//     'sm': '.875rem',
//     'tiny': '.875rem',
//     'base': '1rem',
//     'lg': '1.125rem',
//     'xl': '1.25rem',
//     '2xl': '1.5rem',
//     '3xl': '1.875rem',
//     '4xl': '2.25rem',
//     '5xl': '3rem',
//     '6xl': '4rem',
//     '7xl': '5rem',
//   },
// },
