/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage:{
      //   'termsHero': 'url(/src/assets/banners/terms-condition-banner.jpg)'
      // },
    },
  },
  plugins: [require("daisyui")],
}