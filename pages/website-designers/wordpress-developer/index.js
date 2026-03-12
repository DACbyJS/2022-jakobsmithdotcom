import { useEffect } from "react";

import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { wordpressDeveloperContent } from "../../../pages-content/wordpress-developer";
import StackedPanelsLandingTemplate from "../../../components/templates/StackedPanelsLandingTemplate";

export default function WordpressDeveloperPage() {
  const { setTheme } = useTheme();

  const {
    pagePath,
    metaTitle,
    metaDescription,
    serviceItems,
    serviceSchema,
    templateContent,
  } = wordpressDeveloperContent;

  useEffect(() => {
    setTheme("red");
  }, [setTheme]);

  const serviceSchemaWithUrls = {
    ...serviceSchema,
    mainEntityOfPage: getCanonicalUrl(pagePath),
    url: getCanonicalUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Agency WordPress Development Services",
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
