/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      translate: {
        '1/1' : '100%'
      },
      colors: {
        gold: {
          200: '#dcc49f',
          500: '#c59d5f',
        }
      },
      width: {
        '90-screen': '90vw',
        'full-64px': 'calc(100% - 64px)',
      },
      aspectRatio: {
        '1/2' : 1 / 2,
      },
      gridTemplateColumns: {
        '2-auto-fr': 'auto 1fr',
        '2-200px-fr': '200px 1fr',
        'auto-fit-cols': 'repeat(auto-fit, minmax(223.33px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit-rows': 'repeat(auto-fit, minmax(128px, 1fr))',
      },
      gridAutoColumns: {
        'auto-fit-cols': 'minmax(223.33px, 1fr)',
      },
      gridAutoRows: {
        'auto-fit-rows': 'minmax(96px, 1fr)',
      },
      fontFamily: {
        'vazir': ['Vazirmatn']
      },
      backgroundImage: {
        hero: "url('../public/images/hero.svg')", // مسیر تصویر
      },
      keyframes: {
        load1: {
          '0%, 80%, 100%': {
            boxShadow: '0 0',
            height: '4em',
          },
          '40%': {
            boxShadow: '0 -2em',
            height: '5em',
          },
        },
      },
      animation: {
        load1: 'load1 1.5s 0.5s infinite ease-in-out',
        load1after: 'load1 1.5s 1s infinite ease-in-out',
        load1before: 'load1 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}



