import Head from "next/head";
import { getCanonicalUrl } from "../../lib/utilities/seo";

export default function PageHead({ pageData, schemaObjects = [] }) {
  return (
    <Head>
      <title>{pageData.metaTitle}</title>
      <meta name="description" content={pageData.metaDescription} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={pageData.metaKeywords} />
      <link rel="canonical" href={getCanonicalUrl(pageData.data.href)} />
      {schemaObjects.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
