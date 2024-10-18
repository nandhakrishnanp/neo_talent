/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily":{
        "poppins":["Poppins", "sans-serif"],
        "montserrat":["Montserrat", "serif"],
        "mochiy" :["Mochiy Pop P One", "sans-serif"]
      },
      colors:{
        "Primary": '#8F63EE',
        "secondary": '#F0C24C',
        "teritary": '#53B9AB',
        "accent": '#0A0D14',
      }
    },
    
  },
  plugins: [],
}