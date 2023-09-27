/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '250': '1000px',
      },
      width: {
        '40': '160px',
      },
      height: {
        '50': '200px',
      },
      fontSize: {
        '4.5': '18px',
      },
      lineHeight: {
        '0': '0px',
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
    },
    screens: {
      '300': '1200px',
    },
  },
  plugins: [],
}