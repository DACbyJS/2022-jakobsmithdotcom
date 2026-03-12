import Head from "next/head";
import Link from "next/link";

import { getCanonicalUrl } from "../../lib/utilities/seo";
import { getThemeClasses } from "../../lib/utilities/themeColors";
import { useTheme } from "../../lib/contexts/ThemeProvider";
import NextIntersectionObserver from "../layout/NextIntersectionObserver";

export default function StackedPanelsLandingTemplate({
  metaTitle,
  metaDescription,
  pagePath,
  schemaObjects = [],
  content,
}) {
  const { theme } = useTheme();
  const {
    accent: accentColorClass,
    bg: bgColorClass,
    border: borderColorClass,
  } = getThemeClasses(theme);

  const {
    eyebrow,
    heroTitle,
    problemSection,
    offersSection,
    detailSections,
    proofSection,
    ctaSection,
  } = content;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={getCanonicalUrl(pagePath)} />
        {schemaObjects.map((schemaObject, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
          />
        ))}
      </Head>

      <main className="bg-js-black text-js-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <section className={`border-2 p-6 sm:p-10 bg-js-black ${borderColorClass}`}>
            <p className={`font-overpass-mono uppercase tracking-[0.18em] text-xs sm:text-sm ${accentColorClass}`}>{eyebrow}</p>
            <h1 className="font-js-math text-[2.3rem] sm:text-[3.4rem] lg:text-[4.1rem] leading-[1.08] mt-4 text-balance">
              {heroTitle}
            </h1>
          </section>

          <section className="mt-10 sm:mt-14 border-2 border-js-white p-6 sm:p-10 bg-js-black">
            <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">{problemSection.title}</h2>
            <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[70ch]">{problemSection.body}</p>
          </section>

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className={`mt-10 sm:mt-14 border-2 p-6 sm:p-10 bg-js-white text-js-black ${borderColorClass}`}>
              <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">{offersSection.title}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {offersSection.items.map((item) => (
                  <li key={item} className="border-2 border-js-black px-4 py-3 font-overpass text-lg bg-js-white">
                    {item}
                  </li>
                ))}
              </ul>
              {offersSection.relatedLinks?.length > 0 && (
                <p className="font-overpass text-base sm:text-lg mt-8">
                  {offersSection.relatedLabel}{" "}
                  {offersSection.relatedLinks.map((linkItem, index) => (
                    <span key={linkItem.href}>
                      {index > 0 && index === offersSection.relatedLinks.length - 1 ? " and " : ""}
                      {index > 0 && index < offersSection.relatedLinks.length - 1 ? ", " : ""}
                      <Link href={linkItem.href} className="underline transition-opacity duration-300 hover:opacity-70">
                        {linkItem.text}
                      </Link>
                    </span>
                  ))}
                  .
                </p>
              )}
            </section>
          </NextIntersectionObserver>

          {detailSections.map((section) => (
            <NextIntersectionObserver
              key={section.id}
              thresholdValue={0.2}
              classes="animate-init fade-up-init"
              topIn="fade-up-animate"
            >
              <section className={`mt-10 sm:mt-14 border-2 p-6 sm:p-10 ${section.classes}`}>
                <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">{section.title}</h2>
                <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[70ch]">{section.body}</p>
              </section>
            </NextIntersectionObserver>
          ))}

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className={`mt-10 sm:mt-14 border-2 p-6 sm:p-10 bg-js-white text-js-black ${borderColorClass}`}>
              <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">{proofSection.title}</h2>
              <p className="font-overpass text-base sm:text-lg mt-4">{proofSection.body}</p>
              <ul className="mt-5 flex flex-wrap gap-4 text-base sm:text-lg font-overpass-mono uppercase tracking-[0.05em]">
                {proofSection.links.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition-opacity duration-300 hover:opacity-70"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </NextIntersectionObserver>

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className={`mt-10 sm:mt-14 border-2 p-6 sm:p-10 text-js-black ${borderColorClass} ${bgColorClass}`}>
              <h2 className="font-js-math text-[2rem] sm:text-[2.7rem] leading-tight text-balance">{ctaSection.title}</h2>
              <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[68ch]">{ctaSection.body}</p>
              <div className="mt-7 flex flex-wrap gap-5 font-overpass-mono uppercase tracking-[0.06em] text-sm sm:text-base">
                {ctaSection.links.map((linkItem) => (
                  <Link key={linkItem.id} href={linkItem.href} className="underline transition-opacity duration-300 hover:opacity-75">
                    {linkItem.text}
                  </Link>
                ))}
              </div>
            </section>
          </NextIntersectionObserver>
        </div>
      </main>
    </>
  );
}
