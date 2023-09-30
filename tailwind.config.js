/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '385': '1540px',
        '250': '1000px',
      },
      width: {
        '110': '440px',
        '102': '408px',
        '40': '160px',
        '50vw': '50vw',
      },
      height: {
        '50': '200px',
        '65': '260px',
      },
      fontSize: {
        '4.5': '18px',
      },
      lineHeight: {
        '0': '0px',
      },
      fontFamily: {
        'poppins-bold': ['poppins-bold', 'sans-serif'],
        'poppins-semibold': ['poppins-semibold', 'sans-serif'],
        'poppins-medium': ['poppins-medium', 'sans-serif'],
        'poppins-regular': ['poppins-regular', 'sans-serif'],
      },
      padding: {
        '30': '120px',
      },
      margin: {
        '0': '0px',
      },
      borderRadius: {
        '0': '0px',
      },
      spacing: {
        '0': '0px',
      },
      opacity: {
        '8': '0.8',
      },
      gap: {
        '0px': '0px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      colors: {
        'black-color': '#222',
        'black-light-color': '#333',
        'violet': '#7A08FA',
        'orange-color': '#FF9B50',
        'pink-color': '#F508FA',
        'red-color': '#CE1312',
        'blue-color': '#5096FF',
        'green-color': '#50FF62',
      },
      backgroundImage:{
        'violet-pink':'linear-gradient(114deg, #7A08FA 0%, #CE00D2 99.18%)'
      },
      boxShadow: {
        '25': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
    screens: {
      '300': '1200px',
    },
  },
  plugins: [],
}