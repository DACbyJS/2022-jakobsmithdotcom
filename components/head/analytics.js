import Script from "next/script";

const Analytics = () => (
  <>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-7WG3MPHMZ4"
      strategy="afterInteractive"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7WG3MPHMZ4');
            `,
      }}
    />
  </>
);

export default Analytics;
