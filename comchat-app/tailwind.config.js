
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure Tailwind scans src folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        background: "#FFFFFF",
        textDark: "#000000",
        textLight: "#555555",
      },
    },
  },
  plugins: [],
};
