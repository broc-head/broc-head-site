const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

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
      typography: (theme) => ({DEFAULT: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.blue.500'),
            '&:hover': {
              color: theme('colors.blue.700')
            },
            code: { color: theme('colors.blue.400') }
          },
          'h2,h3,h4': {
            'scroll-margin-top': spacing[32]
          },
          thead: {
            borderBottomColor: theme('colors.gray.200')
          },
          code: { color: theme('colors.pink.500') },
          'blockquote p:first-of-type::before': false,
          'blockquote p:last-of-type::after': false
        }
      },
      dark: {
        css: {
          color: theme('colors.gray.200'),
          a: {
            color: theme('colors.blue.400'),
            '&:hover': {
              color: theme('colors.blue.600')
            },
            code: { color: theme('colors.blue.400') }
          },
          blockquote: {
            borderLeftColor: theme('colors.gray.700'),
            color: theme('colors.gray.300')
          },
          'h2,h3,h4': {
            color: theme('colors.gray.100'),
            'scroll-margin-top': spacing[32]
          },
          hr: { borderColor: theme('colors.gray.700') },
          ol: {
            li: {
              '&:before': { color: theme('colors.gray.500') }
            }
          },
          ul: {
            li: {
              '&:before': { backgroundColor: theme('colors.gray.500') }
            }
          },
          strong: { color: theme('colors.gray.100') },
          thead: {
            th: {
              color: theme('colors.gray.100')
            },
            borderBottomColor: theme('colors.gray.600')
          },
          tbody: {
            tr: {
              borderBottomColor: theme('colors.gray.700')
            }
          }
        }
      }}),
    },  
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')],
}
