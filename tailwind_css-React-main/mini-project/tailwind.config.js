
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight:
    {
      'minHeight':
      {
        'extra': '3125%',
      }
    },
    extend: {},
  },
  variants: {
    // Tailwind css only generates responsive variants for width utilities.To modify width on hover, you need to add the following
    width: ["hover"],
    // You can control which variants are generated for the background image utilities by modifying the backgroundImage property
    backgroundImage: ["hover"],
    // variants are generated for the text sizing utilities by modifying the fontSize property
    fontSize: ["hover"],
    fontWeight: ["hover"],
    fontFamily: ["hover"],
    extend: {},
  },
  plugins: [],
}
