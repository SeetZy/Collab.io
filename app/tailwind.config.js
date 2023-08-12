/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cube: 'rgba(8, 10, 14, 0.25)',
      },
    },
  },
  plugins: [],
}
