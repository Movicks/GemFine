/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 1px 10px rgba(0, 0, 0, 0.15)",
      },
      borderWidth: {
        2: "2px",
      },
      backgroundImage: {
        redGradient: 'linear-gradient(45deg, #ff7f7f, #9b2687, #ff4d4d, #ff0000, #9b2687, #da322a)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '100': '100',
      }
    },
  },
  plugins: [],
}
