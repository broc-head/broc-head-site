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
        //implemented
        'yellow': '#FADF63', //Naples yellow
        'sunray': '#EDAE49', //sunray yellow
        'purple': '#645593', //purple navy
        'space': '#3A365E', //space purple
        'seaweed': '#028090', //metallic seaweed
        //currently unimplemented
        'redviolet': '#C64191', //red violet crayola
        'tiffany': '#00BFB2', //pale spring bud
        'green': '#69B578', //medium sea green
        'hunter': '#3C6651',  //hunter green
        'spring': '#F0F3BD', //pale spring bud
        'slate': '#1A5E63' //dark slate gray


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
