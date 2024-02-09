/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#f1f5f9',
        dark: '#0f172a',
        secondary: '#64748b',
        sky: '#0ea5e9'
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

