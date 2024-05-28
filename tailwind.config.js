/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        navyblue: "#153448",
        solidblack: "#171717",
        paperwhite: "#F5F5F5",
        grey: "#686D76",
        skyblue: "#4793AF",
        thickred: "#921224",
        hoverblue: "#B0DAFF",
        hoverred: "#FF6969",
        armygreen: "#40A578",
        hovergreen: "#7ED7C1",
      },
      screen: {
        sm: "480px",
        md: "768px",
        lg: "1024",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
