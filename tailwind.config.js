/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontSize: {
        "input-sm": "14px",
        "input-md": "15px",
        "input-lg": "20px",
      }
    },
  },
  plugins: [],
}

