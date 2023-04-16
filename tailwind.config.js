// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-green": "#006400",
        "dark-cyan": "#008B8B",
        mint: "#98FB98",
        celadon: "#ACE1AF",
        aquamarine: "#7FFFD4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};