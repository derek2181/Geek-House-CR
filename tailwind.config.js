/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing-mobile': "url('/assets/images/backgroundLandingMobile.png)",
        'landing-desktop': "url('/assets/images/backgroundLanding.png')",
      }
    },
  },
  plugins: [],
}
