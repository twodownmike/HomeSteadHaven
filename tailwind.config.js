/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        game: {
          wood: '#8B4513',
          stone: '#787878',
          food: '#4CAF50',
          iron: '#A9A9A9',
        }
      }
    },
  },
  plugins: [],
}
