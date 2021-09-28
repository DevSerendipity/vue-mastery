module.exports = {
  purge: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#C4C4C4'
    }),
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
