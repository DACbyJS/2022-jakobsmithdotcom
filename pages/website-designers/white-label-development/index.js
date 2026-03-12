import { useSetTheme } from "../../../lib/hooks/useSetTheme";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { whiteLabelDevelopmentContent } from "../../../pages-content/white-label-development";
import EditorialContrastLandingTemplate from "../../../components/templates/EditorialContrastLandingTemplate";

export default function WhiteLabelDevelopmentPage() {
  useSetTheme("red");

  const {
    pagePath,
    metaTitle,
    metaDescription,
    serviceSchema,
    hero,
    sections,
    cta,
  } = whiteLabelDevelopmentContent;

  const serviceSchemaWithUrls = {
    ...serviceSchema,
    url: getCanonicalUrl(pagePath),
    mainEntityOfPage: getCanonicalUrl(pagePath),
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
      accentColorClass="text-js-red"
    />
  );
}
