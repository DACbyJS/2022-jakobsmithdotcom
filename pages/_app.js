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

const overpassLight = Overpass({
  subsets: ['latin'],
  weight: ['200'],
  variable: '--font-overpass',
});

const overpassMonoLight = Overpass_Mono({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-overpass-mono',
});

const jsMath = localFont({ 
  variable: '--font-js-math',
  src: '../public/fonts/jsMath-cmti10.woff2'
});

function App({ Component, pageProps }) {
  return (
      <Layout className={`${overpassLight.variable} ${overpassMonoLight.variable} ${jsMath.variable}`}>
        <Component {...pageProps} />
      </Layout>
  );
}

export default App;
