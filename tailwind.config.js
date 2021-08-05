module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      lightside: {
        light: '#85d7ff',
        DEFAULT: '#f39819',
        dark: '#009eeb',
      },
      darkside: {
        light: '#85d7ff',
        DEFAULT: '#2a1d31',
        dark: '#009eeb',
      },
      pinka: {
        light: '#EACBF9',
        DEFAULT: '#DAA2F4',
        dark: '#8415B7',
      },
    },

    extend: {
      backgroundImage: theme => ({
        'hello-there': "url('/src/assets/hello-there.png')",
        'accueil': "url('/src/assets/accueil.png')",
      })
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
