/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      xs: '450px',
      sm: '550px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
   
    extend: {
      colors:{
        colorPrimary: '#070D59',
        colorSecondary: '#1F3C88',
        colorTertiary: '#5893D4',
        accentColor: '#CEDDEF'
       },
      
    },
  },
  plugins: [],
}

