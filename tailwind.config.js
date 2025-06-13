module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      zero: '0px',
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1025px', // for ipads and below
      header: '1200px', // the header max width
      xl: '1280px',
      laptop: '1377px', // that annoying laptop size
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
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
    extend: {
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      transitionTimingFunction: {
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /text-js-(white|black|red|blue|yellow)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /bg-js-(white|black|red|blue|yellow)/,
      variants: ['hover', 'focus'],
    },
  ],
};
