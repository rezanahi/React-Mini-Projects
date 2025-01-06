/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#c59d5f'
        }
      },
      width: {
        '90-screen': '90vw',
      },
      gridTemplateColumns: {
        '2-auto-fr': 'auto 1fr',
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

