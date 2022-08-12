/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      'red-hat':['Red Hat Display', 'sans-serif']
    },  
    extend: {
      textColor: theme => ({
        'pale-blue':'var(--pale-blue)',
        'bright-blue':'var(--bright-blue)',
        'very-pale-blue':'var(--very-pale-blue)',
        'desaturated-blue':'var(--desaturated-blue)',
        'dark-blue':'var(--dark-blue)',
      }),
      backgroundImage: theme => ({
        'desktop':"url('../images/pattern-background-desktop.svg')" ,
        'mobile':"url('../images/pattern-background-mobile.svg')" ,
        'illustration-hero':"url('../images/illustration-hero.svg')"
      }),
      backgroundColor: theme => ({
        'pale-blue':'var(--pale-blue)',
        'bright-blue':'var(--bright-blue)',
        'very-pale-blue':'var(--very-pale-blue)',
        'desaturated-blue':'var(--desaturated-blue)',
        'dark-blue':'var(--dark-blue)',
      })
    },
  },
  plugins: [],
}
