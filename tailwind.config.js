/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "640px" },
        gf: { min: "0px", max: "280px" },
        ...defaultTheme.screens,
      },
      fontFamily: {
        poppins: ["Inter", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        bannerfistbg: "url('assets/bedroom-banner.png.png')",
        bannersecbg: "url('assets/grid-img1.svg')",
      },
    },
  },
  plugins: [],
};
