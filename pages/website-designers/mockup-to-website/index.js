import { useSetTheme } from "../../../lib/hooks/useSetTheme";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { mockupToWebsiteContent } from "../../../pages-content/mockup-to-website";
import EditorialContrastLandingTemplate from "../../../components/templates/EditorialContrastLandingTemplate";

export default function MockupToWebsitePage() {
  useSetTheme("red");

  const {
    pagePath,
    metaTitle,
    metaDescription,
    serviceSchema,
    hero,
    sections,
    cta,
  } = mockupToWebsiteContent;

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
