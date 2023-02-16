/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#131316",
        middleBlack: "#18181C",
        subBlack: "#26262C",
        pointColor: "#E6274F",
        gray: "#C3C3C3",
        darkGray: "#575E69",
      },
      fontSize: {
        h1: "28pt",
        h3: "20pt",
        paragraph: "16pt",
        small: "12pt",
      },
    },
  },
  plugins: [],
});
