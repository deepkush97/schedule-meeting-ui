const defaultConfig = require("tailwindcss/stubs/defaultConfig.stub");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultConfig.theme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
