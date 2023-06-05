import { Overpass, Overpass_Mono } from 'next/font/google';
import localFont from 'next/font/local';

/* Why here? These fonts css vars need to be declared in multiple scopes (App, Pop-ups and Modals) */
const overpass = Overpass({
  subsets: ['latin'],
  weight: ['variable'],
  variable: '--font-overpass',
});

const overpassMono = Overpass_Mono({
  subsets: ['latin'],
  weight: ['variable'],
  variable: '--font-overpass-mono',
});

const jsMath = localFont({
  variable: '--font-js-math',
  src: '../../public/fonts/jsmath-cmti10.woff2',
});

export const fonts = {overpass, overpassMono, jsMath};
