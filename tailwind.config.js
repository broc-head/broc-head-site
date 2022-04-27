const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sunray': '#EDAE49', //sunray yellow
        'brick': '#D1495B',  //brick red
        'command': '#2274A5', //star command blue
        'desert': '#DAAE7B', //burlywood
        'purple': '#6A75CC', //violet blue crayola
        'purple-light': '#AAAFD9', //wild blue yonder
        'pink': '#C4B1AE',
        'cam': '#C3DECC', //cambridge blue
        'jet': '#34312D',
        'green': '#0E402D',
        
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif', ...fontFamily.sans],
        serif: ['Merriweather', 'serif', ...fontFamily.serif],
        mono: [],
      },
      typography: (theme) => ({}),
    },  
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')],
}
