// Next Components
import { Overpass, Overpass_Mono } from '@next/font/google';
import localFont from '@next/font/local';

// Custom Components
import Layout from '../components/Layout';

// External Dependencies
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Styles
import '../styles/global.css';

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
  src: '../public/fonts/jsmath-cmti10.woff2'
});

function App({ Component, pageProps }) {
  return (
      <Layout className={`${overpass.variable} ${overpassMono.variable} ${jsMath.variable}`}>
        <Component {...pageProps} />
      </Layout>
  );
}

export default App;
