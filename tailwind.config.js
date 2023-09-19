/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tx,jsx,tsx}"],
  theme: {
    screens: {
        'mob': {'min': '0px', 'max': '800px'},
        // => @media (min-width: 640px) { ... }
  
        'tab': {'min': '801px', 'max': '1200px'},
        // => @media (min-width: 1024px) { ... }
  
        'lap': {'min': '1201px'},
        // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'grot': ['"Bricolage Grotesque"', 'sans-serif'],
      'voll': ['Vollkorn', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

