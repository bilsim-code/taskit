/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "nav-xs":"400px",
        "nav-xxs": "200px"
      }
    },
  },
  plugins: [],
}