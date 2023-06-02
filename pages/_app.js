// Custom Components
import Layout from '../components/layout/Layout';

// External Dependencies
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Styles
import '../styles/index.scss';

// Fonts
import { overpass, overpassMono, jsMath } from '../lib/constants';

// App
function App({ Component, pageProps }) {
  return (
    <Layout
      className={`${overpass.variable} ${overpassMono.variable} ${jsMath.variable}`}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
