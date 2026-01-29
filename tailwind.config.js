/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zalando-sans-expanded': ['Zalando Sans Expanded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}