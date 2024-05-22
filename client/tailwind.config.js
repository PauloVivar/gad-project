// tailwind.config.js
//const { nextui } = require("@nextui-org/react");
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'azogues': "url('./src/assets/img/azogues.jpeg')",
        'azoguesDesktop': "url('./src/assets/img/azogues.jpeg')",
        'sanFrancisco': "url('./src/assets/img/sanFrancisco.jpeg')",
        'sanFrancisco2': "url('./src/assets/img/sanFrancisco2.jpeg')",
        'sanFrancisco3': "url('./src/assets/img/sanFrancisco3.jpeg')",
        'gadAzogues': "url('./src/assets/img/gadAzogues.jpeg')",
        'gadAzogues2': "url('./src/assets/img/gadAzogues2.jpeg')",
        'catedral2': "url('./src/assets/img/catedral2.jpeg')",
        'catedralNoche': "url('./src/assets/img/catedralNoche.jpeg')",
        'cojitambo': "url('./src/assets/img/cojitambo.jpeg')",
        'estatua': "url('./src/assets/img/estatua.jpeg')"
      },
      backgroundColor: theme => ({
        ...theme('color'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  // eslint-disable-next-line no-undef 
  // require(tailwind-scrollbar-hide)
  plugins: [nextui()],
};

