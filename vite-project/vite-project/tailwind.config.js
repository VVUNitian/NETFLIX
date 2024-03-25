/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        "nsans-light": ["Nsans Light"],
        "nsans-bold":["Nsans Bold"],
        "nsans-medium":["Nsans Medium"]
      },
      backgroundImage : {
        'netflix': "url('/netflix.svg')",
        'netflixback': "url('/Netflix Background image.jpg')",
      }
    },
  },
  plugins: [],
}

