module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      maxHeight: {
        accordion: '75rem',
      },
      outline: {
        majorelleBlue: ['1px solid #7373F9', '8px'],
      },
      transitionProperty: {
        height: 'height',
      },
      lineHeight: {
        10: '3.938rem',
      },
      spacing: {
        9.5: '41px',
        '11.5/12': '96%',
      },
      boxShadow: {
        card: '0px 2px 6px #DCE0E7',
        main: '0px 5px 10px #DCE0E7',
        buttonHover: '0px 2px 2px #BAC6D8',
        selectedRow: '0px 0px 0px 2px #7373F9',
      },
      fontSize: {
        '7xl': '4.125rem', //66px Head 1
        '6Xl': '3.5rem', //56px Head 2
        xl: '2rem', //30px Head 5
        '2xl': '2.875rem', //46px Head 3
        '4xl': '2.25rem', //36px Head 4
        '3xl': '1.875rem', //30px Head 5
        ttl1: '1.5rem', //24px Title 1
        ttl2: '1.25rem', //20px Title 2
        sbt: '1rem', //16px Subtitle
        p1: '0.875rem', //14px Paragraph 1
        p2: '0.813rem', //13px Paragraph 2
        xs: '0.75rem', //12px Note 1
        xxs: '0.625rem', //10px
        xxs2: '0.688rem', //11px
      },
      padding: {
        1.5: '5px',
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        15: '67px',
        84: '335px',
        98: '410px',
        60: '60rem',
        form: '944px',
      },
      height: {
        90: '350px',
        6.125: '98px',
      },
      colors: {
        'blue-600': '#1477BD',
        'blue-pantone': '#2B23A3',
        'medium-slate-blue': '#7373F9',
        'majorelle-blue': '#5B3DEA',
        'oxford-blue': '#101F35',
        'oxford-blue-2': '#BAC6D8',
        'oxford-blue-3': '#DCE0E7',
        'oxford-blue-4': '#818D9E',
        'oxford-blue-5': '#44444F',
        'suburn-red': '#FF8179',
        'suburn-red-2': '#C13030',
        'green-jade': '#20D0AC',
        'pearl-river-100': '#F6F6F5',
        'pearl-river-80': '#F8F8F7',
        'pearl-river-20': '#FDFDFD',
        'bg-light-gray-1': '#F1F1F5',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        '3xl': '1702px',
        '2xl': '1502px',
        xl: '1351px',
        lg: '1103px',
        md: '1007px',
        sm: '997px',
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}