/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creame': '#F8E9A1',
        'peach': '#F76C6C',
        'sky-blue': '#A8D0E6',
        'dark-blue': '#374785',
        'navy-blue': '#24305E',
      },
    },
  },
  plugins: [],
}

