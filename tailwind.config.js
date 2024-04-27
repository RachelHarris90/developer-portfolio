/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rachel: {
          extraLight: "#fff1f2",
          light: "#fde6e9",
          medium: "#e63f66",
          dark: "#470a1f",
          extraDark: "#4c0519",
        },
      },
    },
  },
  plugins: [],
};
