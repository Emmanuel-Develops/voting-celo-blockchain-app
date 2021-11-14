module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'oxBlue' : '#14213d',
      'orangeWeb' : '#fca311',
      'platinum' : '#e5e5e5',
    }),
    
    textColor: {
      'oxBlue' : '#14213d',
      'orangeWeb' : '#fca311',
      'platinum' : '#e5e5e5',
    },

    fontFamily: {
      'genos': ['Genos', 'sans-serif'],
      'mw': ['"Merriweather"', 'serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
