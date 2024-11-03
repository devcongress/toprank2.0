/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px', 
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        blue:               "#0033FD",
        borderGrey:         "#C1C1C1",
        ctaGrey:            "#403E3E",
        textGrey:           "#383838",
        iconGreen:          "#5BD422",
        yellowBg:           "#FCF2CF",
        cardOrange:         "#FB8543",
        cardTeal:           "#2CADF5",
        cardBeige:          "#FAEFD3",
        cardWebTeal:        "#29B3D2",
        webTeal:            "#00A3FF",
        cardGreen:          "#B5FE93",
        textGreen:          "#14532d",
        cardPurple:         "#7000FF",
        typeGreen:          "#A6D229",
        devCongressPink:    "#EC008B",
      },
    },
  },
  plugins: [],
}