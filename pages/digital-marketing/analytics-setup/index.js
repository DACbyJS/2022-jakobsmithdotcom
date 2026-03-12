import { useEffect } from "react";

import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { analyticsSetupContent } from "../../../pages-content/analytics-setup";
import EditorialContrastLandingTemplate from "../../../components/templates/EditorialContrastLandingTemplate";

export default function AnalyticsSetupPage() {
  const { setTheme } = useTheme();

  const {
    pagePath,
    metaTitle,
    metaDescription,
    serviceSchema,
    hero,
    sections,
    cta,
  } = analyticsSetupContent;

  useEffect(() => {
    setTheme("yellow");
  }, [setTheme]);

  const serviceSchemaWithUrls = {
    ...serviceSchema,
    mainEntityOfPage: getCanonicalUrl(pagePath),
    url: getCanonicalUrl(pagePath),
    offers: {
      "@type": "Offer",
      url: getCanonicalUrl("/pricing/"),
    },
  };

  return (
    <EditorialContrastLandingTemplate
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      pagePath={pagePath}
      schemaObjects={[serviceSchemaWithUrls]}
      hero={hero}
      sections={sections}
      cta={cta}
    />
  );
}
