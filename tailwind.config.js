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
        'yellow': '#E7B57C', //middle yellow red
        'desert': '#DAAE7B', //burlywood
        'purple': '#6A75CC', //violet blue crayola
        'purple-light': '#AAAFD9', //wild blue yonder
        'pink': '#C4B1AE',
        'cam': '#C3DECC', //cambridge blue
        'jet': '#34312D',
        'green': '#0E402D',
        'red': '#B80A31',
      },
      li: {
        DEFAULT: 'list-disc'
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif', ...fontFamily.sans],
        serif: ['Merriweather', 'serif', ...fontFamily.serif],
        mono: [],
      },
    },
  },
  plugins: [],
}
