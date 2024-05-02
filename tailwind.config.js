/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
