/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing:{
        'custom-gap1': '50px',
        'custom-gap2': '90px',
        'custom-gap3': '20px',
      }
    },
  },
  plugins: [],
}

