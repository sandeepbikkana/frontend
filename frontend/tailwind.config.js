/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      textShadow: {
        glow: '0 0 4px #ffffff, 0 0 8px #7f00ff, 0 0 12px #7f00ff',
      },
      animation: {
        glow: 'glow 0.3s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 4px #ffffff, 0 0 8px #7f00ff, 0 0 12px #7f00ff',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
