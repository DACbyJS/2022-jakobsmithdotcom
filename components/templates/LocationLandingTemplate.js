import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { useTheme } from "../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../lib/utilities/seo";
import { getThemeClasses } from "../../lib/utilities/themeColors";
import { getSiteFaviconUrl } from "../../lib/utilities/favicon";
import NextIntersectionObserver from "../layout/NextIntersectionObserver";
import WigglyButton from "../layout/WigglyButton";

const SectionPhoto = ({ src, priority = false }) => (
  <div className="w-full max-w-[220px] aspect-[4/5] mx-auto lg:mx-0 overflow-hidden">
    <Image
      src={src}
      alt="Jakob Smith"
      width={640}
      height={800}
      className="w-full h-full object-cover"
      priority={priority}
    />
  </div>
);

export default function LocationLandingTemplate({
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
  const isYellowTheme = theme === "yellow";

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

      <main className="bg-js-black text-js-white px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="mx-auto max-w-[1100px] space-y-10 sm:space-y-14">
          <section className={classNames("border-2 p-6 sm:p-10 bg-js-black", borderColorClass)}>
            <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
              <SectionPhoto src="/images/jakob-2.jpg" priority />
              <div>
                <p className={classNames("font-overpass-mono uppercase tracking-[0.16em] text-xs sm:text-sm", accentColorClass)}>
                  {content.eyebrow}
                </p>
                <h1 className="font-js-math text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] mt-4 text-balance">
                  {content.h1}
                </h1>
                <p className="font-overpass text-lg sm:text-xl mt-6 max-w-[70ch]">
                  {content.heroLead}
                </p>
              </div>
            </div>
          </section>

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className="border-2 border-js-white p-6 sm:p-10 bg-js-black">
              <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
                <SectionPhoto src="/images/jakob-3.jpg" />
                <div>
                  <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">Serving {content.locationName}</h2>
                  <div className="mt-5 space-y-4 max-w-[76ch]">
                    {content.introParagraphs.map((paragraph) => (
                      <p key={paragraph} className="font-overpass text-lg sm:text-xl">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </NextIntersectionObserver>

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className={classNames("border-2 p-6 sm:p-10 bg-js-white text-js-black", borderColorClass)}>
              <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">Services Overview</h2>
              <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[74ch]">{content.servicesOverview}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.serviceLinks.map((service) => (
                  <li key={service.id} className="border-2 border-js-black p-4 bg-js-white">
                    <Link
                      href={service.href}
                      className="font-overpass-mono uppercase tracking-[0.06em] underline transition-opacity duration-300 hover:opacity-70"
                    >
                      {service.label}
                    </Link>
                    <p className="font-overpass text-base sm:text-lg mt-2">{service.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </NextIntersectionObserver>

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className={classNames("border-2 p-6 sm:p-10 text-js-black", bgColorClass, borderColorClass)}>
              <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
                <SectionPhoto src="/images/jakob-4.jpg" />
                <div>
                  <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">Local Market Context</h2>
                  <div className="mt-5 space-y-4 max-w-[76ch]">
                    {content.marketParagraphs.map((paragraph) => (
                      <p key={paragraph} className="font-overpass text-lg sm:text-xl">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {content.marketCta && (
                    <div className="mt-7">
                      <WigglyButton
                        href={content.marketCta.href}
                        target={content.marketCta.target}
                        rel={content.marketCta.rel}
                        colorName={content.marketCta.colorName}
                      >
                        {content.marketCta.text}
                      </WigglyButton>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </NextIntersectionObserver>

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className="border-2 border-js-white p-6 sm:p-10 bg-js-black">
              <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">Relevant Portfolio Clients</h2>
              <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[72ch]">{content.portfolioIntro}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.portfolioLinks.map((item) => {
                  const faviconUrl = getSiteFaviconUrl(item.href, 32);

                  return (
                    <li key={item.id} className="border-2 border-js-white p-4 bg-js-black">
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classNames("inline-flex items-center gap-2 font-overpass-mono uppercase tracking-[0.06em] underline transition-opacity duration-300 hover:opacity-70", accentColorClass)}
                      >
                        {faviconUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={faviconUrl}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                            className="w-4 h-4 shrink-0 rounded-[2px] opacity-75"
                          />
                        )}
                        {item.label}
                      </Link>
                      <p className="font-overpass text-base sm:text-lg mt-2 text-js-white">{item.note}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          </NextIntersectionObserver>

          <NextIntersectionObserver thresholdValue={0.2} classes="animate-init fade-up-init" topIn="fade-up-animate">
            <section className="border-2 border-js-white p-6 sm:p-10 bg-js-white text-js-black">
              <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
                <SectionPhoto src="/images/jakob-2.jpg" />
                <div>
                  <h2 className="font-js-math text-[2rem] sm:text-[2.7rem] leading-tight">{content.cta.title}</h2>
                  <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[72ch]">{content.cta.body}</p>
                  <div className="mt-7 flex flex-wrap gap-5 font-overpass-mono uppercase tracking-[0.06em] text-sm sm:text-base">
                    {content.cta.links.map((linkItem, index) => (
                      <Link
                        key={linkItem.id}
                        href={linkItem.href}
                        className={classNames("underline transition-opacity duration-300 hover:opacity-75", {
                          [accentColorClass]: index === content.cta.links.length - 1,
                          "bg-js-black px-2 py-1 inline-block": index === content.cta.links.length - 1 && isYellowTheme,
                        })}
                      >
                        {linkItem.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </NextIntersectionObserver>
        </div>
      </main>
    </>
  );
}
