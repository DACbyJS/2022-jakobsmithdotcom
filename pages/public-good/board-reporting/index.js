import { useEffect } from "react";

import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { boardReportingContent } from "../../../pages-content/board-reporting";
import StackedPanelsLandingTemplate from "../../../components/templates/StackedPanelsLandingTemplate";

export default function BoardReportingPage() {
  const { setTheme } = useTheme();

  const {
    pagePath,
    metaTitle,
    metaDescription,
    serviceItems,
    serviceSchema,
    templateContent,
  } = boardReportingContent;

  useEffect(() => {
    setTheme("blue");
  }, [setTheme]);

  const serviceSchemaWithUrls = {
    ...serviceSchema,
    mainEntityOfPage: getCanonicalUrl(pagePath),
    url: getCanonicalUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Board Reporting Services for Nonprofits",
      itemListElement: serviceItems.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };

  return (
    <StackedPanelsLandingTemplate
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      pagePath={pagePath}
      schemaObjects={[serviceSchemaWithUrls]}
      content={{
        ...templateContent,
        offersSection: {
          ...templateContent.offersSection,
          items: serviceItems,
        },
      }}
    />
  );
}
