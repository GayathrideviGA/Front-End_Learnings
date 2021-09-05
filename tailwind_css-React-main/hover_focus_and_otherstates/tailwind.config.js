module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
      backgroundColor: ['active'],
      divideColor: ['group-hover'],
      animation: ['motion-safe'],
    }
  },
  plugins: [],
}