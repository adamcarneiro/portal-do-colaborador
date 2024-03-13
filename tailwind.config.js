/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    colors:{
      'brave-purble':'#41154A',
      'brave-magenta':'#ED2891',
      'brave-gray': '#f2f2f2'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

