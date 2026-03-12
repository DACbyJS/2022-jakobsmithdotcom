import { useEffect } from "react";

import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { campaignLandingPagesContent } from "../../../pages-content/landing-pages";
import StackedPanelsLandingTemplate from "../../../components/templates/StackedPanelsLandingTemplate";

export default function CampaignLandingPagesPage() {
  const { setTheme } = useTheme();

  const {
    pagePath,
    metaTitle,
    metaDescription,
    serviceItems,
    serviceSchema,
    templateContent,
  } = campaignLandingPagesContent;

  useEffect(() => {
    setTheme("yellow");
  }, [setTheme]);

  const serviceSchemaWithUrls = {
    ...serviceSchema,
    mainEntityOfPage: getCanonicalUrl(pagePath),
    url: getCanonicalUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Campaign Landing Page Development Services",
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
