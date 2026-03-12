import { useEffect } from "react";

import LocationLandingTemplate from "../../components/templates/LocationLandingTemplate";
import { useTheme } from "../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../lib/utilities/seo";
import { newMexicoWebDeveloperContent } from "../../pages-content/location-pages";

export default function NewMexicoWebDeveloperPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("blue");
  }, [setTheme]);

  const {
    pagePath,
    metaTitle,
    metaDescription,
    localBusinessSchema,
    ...content
  } = newMexicoWebDeveloperContent;

  const localBusinessSchemaWithUrls = {
    ...localBusinessSchema,
    image: getCanonicalUrl("/images/jakob-1.jpg"),
    url: getCanonicalUrl(pagePath),
    mainEntityOfPage: getCanonicalUrl(pagePath),
  };

  return (
    <LocationLandingTemplate
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      pagePath={pagePath}
      schemaObjects={[localBusinessSchemaWithUrls]}
      content={content}
    />
  );
}
