/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px', 
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        heroTeal:     "#00B2FF",
        borderGrey:   "#C1C1C1",
        ctaGrey:      "#403E3E",
        textGrey:     "#383838",
        iconGreen:    "#5BD422",
        yellowBg:     "#FCF2CF",
        cardOrange:   "#FB8543",
        cardTeal:     "#2CADF5",
        cardBeige:    "#FAEFD3",
        cardWebTeal:  "#29B3D2",
        frameWebTeal: "#00A3FF",
        cardGreen:    "#B5FE93",
        textGreen:    "#14532d",
        cardPurple:   "#7000FF",
        typeGreen:    "#A6D229",
      }
    },
  },
  plugins: [],
}