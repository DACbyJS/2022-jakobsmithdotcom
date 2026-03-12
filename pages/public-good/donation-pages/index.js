import { useEffect } from "react";

import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { donationPagesContent } from "../../../pages-content/donation-pages";
import StackedPanelsLandingTemplate from "../../../components/templates/StackedPanelsLandingTemplate";

export default function DonationPagesPage() {
  const { setTheme } = useTheme();

  const {
    pagePath,
    metaTitle,
    metaDescription,
    serviceItems,
    serviceSchema,
    templateContent,
  } = donationPagesContent;

  useEffect(() => {
    setTheme("blue");
  }, [setTheme]);

  const serviceSchemaWithUrls = {
    ...serviceSchema,
    mainEntityOfPage: getCanonicalUrl(pagePath),
    url: getCanonicalUrl(pagePath),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Donation Page Services for Nonprofits",
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
