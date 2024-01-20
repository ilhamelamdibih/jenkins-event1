/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '12':'5rem',
      },
      zIndex: {
        '100': '100',
        '90':'90'
      },
      colors:{
        'main':'#D92525 ',
        'custBlack':'#1F2024',
        'Cblue' :'#001022',
        'dashBlack':'#212529',
        'custGreen':'#0ab39c',
        'dashGreen':'#023535',
        'custBlue' : '#1B2C3F'
      },
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
        'archivo': ['Archivo Narrow', 'sans-serif'],
        'work':['Work Sans', 'sans-serif']
      },
      backgroundImage:{
        'banner':'url("/images/banner.png")',
        'stats':'url("/images/image14.png")',
        'detailbanner':'url("/images/detailbanner.png")',
        'eventbanner':'url("/images/eventbanner.png")',
        'dashUser':'url("/images/owner.jpg")',
        'field1':'url("/images/field-1.jpg")'
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 0rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 3rem',
      }
    },
  },
  plugins: []
}
