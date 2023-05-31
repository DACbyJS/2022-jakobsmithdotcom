/* Next */
import { Overpass, Overpass_Mono } from 'next/font/google';
import localFont from 'next/font/local';

/* Fonts */
/* Why here? These fonts css vars need to be declared in multiple scopes (App, Pop-ups and Modals) */
export const overpass = Overpass({
  subsets: ['latin'],
  weight: ['variable'],
  variable: '--font-overpass',
});

export const overpassMono = Overpass_Mono({
  subsets: ['latin'],
  weight: ['variable'],
  variable: '--font-overpass-mono',
});

export const jsMath = localFont({
  variable: '--font-js-math',
  src: '../../public/fonts/jsmath-cmti10.woff2',
});

/* Header - Nav Drawer */
export const navDrawerMainClass = 'overlay-navigation';
export const navDrawerActiveClass = 'overlay-active';
export const navDrawerUpClass = 'overlay-slide-up';
export const navDrawerDownClass = 'overlay-slide-down';

/* Header - Nav Links */
export const navLinkMainClass = 'js-nav-link';
export const navLinkSlideIn = 'slide-in-nav-item';
