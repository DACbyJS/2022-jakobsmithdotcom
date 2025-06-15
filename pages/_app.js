import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom Components
import Layout from "../components/layout/Layout";
import ThemeProvider from "../lib/contexts/ThemeProvider";
import Analytics from "../components/head/analytics";

// External Dependencies
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Styles
import "../styles/index.scss";

// Fonts
import { fonts } from "../lib/constants";

// App
function App({ Component, pageProps }) {
  const router = useRouter();

  // pageview tracking for Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pageview",
        page: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    handleRouteChange(window.location.pathname);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    
    <ThemeProvider>
      <Analytics />
      <Layout
        className={`${fonts?.overpass?.variable} ${fonts?.overpassMono?.variable} ${fonts?.jsMath?.variable}`}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
