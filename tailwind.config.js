/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      foreground: 'hsl(19, 100%, 97%)',
      'gray-100': 'hsl(0, 0%, 87%)',
      'gray-300': 'hsl(240, 4%, 62%)',
      'gray-700': 'hsl(0, 0%, 11%)',
      'gray-900': 'hsl(240, 3%, 6%)',
      primary: 'hsl(345, 68%, 44%)',
      secondary: 'hsl(18, 89%, 67%)',
    },
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', sans-serif",
        yeseva: "'Yeseva One', serif",
      },
      keyframes: {
        'spin-left': {
          '0%': { transform: 'rotate(0)' },
          '99%, 100%': { transform: 'rotate(-360deg)' },
        },
        'spin-right': {
          '0%': { transform: 'rotate(0)' },
          '99%, 100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
