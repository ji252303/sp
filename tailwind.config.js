/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [], -->
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(285deg, #FFF 22.01%, #F8F6E1 60.89%, #F7F6EE 73.16%)',
        'custom-conic-gradient': 'conic-gradient(from 180deg at 50% 50%, #E9FFEC 0deg, #FFF 180deg, #E9FFEC 360deg)',
      },
    },
  },
  plugins: [],
}