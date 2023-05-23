/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      'gdt-primary': '#CA8A04',
      colors: {
        primary: '#CA8A04',
        secondary: '#4E4B66',
        white: '#FFFFFF',
        grayScale: '#F4F4F4',
        faint: '#6E7191',
        ternary: '#14142B',
        irish: '#5D5FEF',
        footer: '#333546',
    },

    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
