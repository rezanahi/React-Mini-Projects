/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '90-screen': '90vw',
      },
      gridTemplateColumns: {
        '2-auto-fr': 'auto 1fr',
      }
    },
  },
  plugins: [],
}

