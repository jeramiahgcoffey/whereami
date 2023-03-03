/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-mode-el': 'hsl(209, 23%, 22%)',
        'dark-mode-bg': 'hsl(207, 26%, 17%)',
        'light-mode-text:': 'hsl(200, 15%, 8%)',
        'light-mode-input': 'hsl(0, 0%, 52%)',
        'light-mode-bg': 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'cursive'],
      },
      fontSize: {
        14: ['14px', { lineHeight: '1.5rem' }],
        16: ['16px', { lineHeight: '1.6rem' }],
      },
    },
  },
  plugins: [],
};
