/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // Enable dark mode via class toggle
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        border: "border 4s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      colors: {
        ...colors,
        primary: colors.yellow,
        secondary: colors.pink,
        // Add custom colors for light and dark mode
        lightBackground: "rgb(255, 255, 255)",  // Light background color
        darkBackground: "rgb(0, 0, 0)",         // Dark background color
        lightText: "rgb(0, 0, 0)",              // Light text color
        darkText: "rgb(255, 255, 255)",         // Dark text color
      },
    },
  },
  plugins: [],
};
