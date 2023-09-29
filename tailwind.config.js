/* @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        custom:[ 'Manrope', 'sans-serif'],
      },
      colors:{
      LightCyan: 'hsl(193, 38%, 86%)',
      NeonGreen: 'hsl(150, 100%, 66%)',
      GrayishBlue: 'hsl(217, 19%, 38%)',
      DarkGrayishBlue: 'hsl(217, 19%, 24%)',
      DarkBlue: 'hsl(218, 23%, 16%)',
      },
      boxShadow:{
        'custom-hover': ' 0 0 2.5rem 1rem  hsl(150, 100%, 66%)',
      },
    },
  },
  plugins: [],
}

