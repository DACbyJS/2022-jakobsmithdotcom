module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'js-white': '#E8E9EB',
      'js-black': '#121416',
      'js-red': '#FF4747',
      'js-blue': '#5295CB',
      'js-yellow': '#FDCD49',
    },
    fontFamily: {
      'js-math': ['var(--font-js-math)'],
      overpass: ['var(--font-overpass)'],
      'overpass-mono': ['var(--font-overpass-mono)'],
    },
    extend: {},
  },
  plugins: [],
};
