/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
    },
    extend: {
      colors: {
        eerie: '#23272A',
        jet: '#2C2F33',
        neon: '#5865F2',
        hunyadi: '#F3B359',
        imperial: '#ED4245',
        alice: '#E3EDF7',
        black: '#1B1B1B',
        rich: '#020316',
        aliceBlue: '#F0F8FF',
      },
    },
  },
  plugins: [],
};
