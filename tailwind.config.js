/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-2px 0px 4px rgba(38, 38, 38, 0.1)'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/heroo.jpg')"
      }
    }
  },
  plugins: []
}
