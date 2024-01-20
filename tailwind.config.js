/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,vue,jsx,ts}"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
