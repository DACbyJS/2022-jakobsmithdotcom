import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import { whiteLabelDevelopmentContent } from "../../../pages-content/white-label-development";
import NextIntersectionObserver from "../../../components/layout/NextIntersectionObserver";

export default function WhiteLabelDevelopmentPage() {
  const { setTheme } = useTheme();

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

  useEffect(() => {
    setTheme("red");
  }, [setTheme]);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={getCanonicalUrl(pagePath)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchemaWithUrls),
          }}
        />
      </Head>

      <section className="bg-js-black text-js-white px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14 sm:pb-18">
        <div className="mx-auto max-w-[1100px] flex flex-col gap-y-4">
          <p className="font-overpass-mono uppercase tracking-[0.22em] text-xs sm:text-sm text-js-red mb-6 pl-2">
            {hero.eyebrow}
          </p>
          <h1 className="leading-[1.02] flex flex-col gap-y-4">
            <span className="block font-js-math text-[2.4rem] sm:text-[3.15rem] lg:text-[4.1rem]">
              {hero.lines[0]}
            </span>
            <span className="block font-overpass-mono uppercase tracking-[0.08em] text-[1.35rem] sm:text-[1.7rem] lg:text-[2.1rem] mt-2 pl-2 text-js-red">
              {hero.lines[1]}
            </span>
            <span className="block font-js-math text-[2.15rem] sm:text-[2.9rem] lg:text-[3.7rem] mt-2">
              {hero.lines[2]}
            </span>
          </h1>
          <p className="font-overpass text-lg sm:text-xl text-js-white max-w-[70ch] pl-2 mt-10">
            {hero.body}
          </p>
        </div>
      </section>

      <section className="bg-js-white text-js-black px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mx-auto max-w-[1100px] space-y-16">
          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
          <div>
            <h2 className="font-js-math text-[2.1rem] sm:text-[2.7rem]">
              {sections.processTitle}
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {sections.processSteps.map((step, index) => (
                <li
                  key={step.id}
                  className="border-2 border-js-black p-5 bg-js-white"
                >
                  <p className="font-overpass-mono text-xs tracking-[0.16em] uppercase">
                    Step {index + 1}
                  </p>
                  <p className="font-overpass text-lg mt-2">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
          <div>
            <h2 className="font-js-math text-[2.1rem] sm:text-[2.7rem]">
              {sections.buildTitle}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {sections.buildOptions.map((item) => (
                <li
                  key={item.id}
                  className="border-2 border-js-black bg-js-red text-white px-4 py-3 font-overpass-mono uppercase tracking-[0.04em] text-base"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
          <div>
            <h2 className="font-js-math text-[2.1rem] sm:text-[2.7rem]">
              {sections.includedTitle}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {sections.includedItems.map((item) => (
                <li
                  key={item.id}
                  className="border-2 border-js-black px-4 py-3 font-overpass text-lg bg-white"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
          <div>
            <h2 className="font-js-math text-[2.1rem] sm:text-[2.7rem]">
              {sections.whyMeTitle}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {sections.differentiators.map((item) => (
                <li
                  key={item.id}
                  className="border-2 border-js-black px-4 py-3 font-overpass text-lg bg-js-red text-white"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
          <div>
            <h2 className="font-js-math text-[2.1rem] sm:text-[2.7rem]">
              {sections.testimonialTitle}
            </h2>
            <blockquote className="mt-6 border-2 border-dashed border-js-red p-6 bg-js-white">
              <p className="font-overpass text-lg italic">
                <span className="font-js-math text-[1.6em] leading-none align-[-0.12em] mr-1">
                  &ldquo;
                </span>
                {sections.testimonialPlaceholder}
                <span className="font-js-math text-[1.6em] leading-none align-[-0.12em] ml-1">
                  &rdquo;
                </span>
              </p>
              <p className="font-overpass-mono uppercase tracking-[0.08em] text-xs sm:text-sm mt-4 text-js-black">
                {sections.testimonialPersonHref ? (
                  <a
                    href={sections.testimonialPersonHref}
                    target="_blank"
                    rel="noreferrer"
                    className="underline cursor-pointer transition-opacity duration-300 hover:opacity-70"
                  >
                    {sections.testimonialPerson}
                  </a>
                ) : (
                  sections.testimonialPerson
                )}
              </p>
            </blockquote>
          </div>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
          <div>
            <h2 className="font-js-math text-[2.1rem] sm:text-[2.7rem]">
              {sections.pricingTitle}
            </h2>
            <p className="font-overpass text-lg mt-4">
              {sections.pricingPrefix}{" "}
              <Link
                href="/pricing/"
                className="underline font-overpass-mono uppercase tracking-[0.06em] transition-opacity duration-300 hover:opacity-70"
              >
                {sections.pricingLinkText}
              </Link>{" "}
              {sections.pricingSuffix}
            </p>
          </div>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
          <div className="border-2 border-js-black p-6 sm:p-8 bg-js-black text-js-white">
            <h2 className="font-js-math text-[2rem] sm:text-[2.5rem]">
              {cta.title}
            </h2>
            <p className="font-overpass text-lg mt-3 text-js-white">
              {cta.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-base font-overpass-mono uppercase tracking-[0.06em]">
              {cta.links.map((linkItem, index) => (
                <Link
                  key={linkItem.id}
                  href={linkItem.href}
                  className={`underline transition-opacity duration-300 hover:opacity-75 ${
                    index === cta.links.length - 1 ? "text-js-red" : ""
                  }`}
                >
                  {linkItem.text}
                </Link>
              ))}
            </div>
          </div>
          </NextIntersectionObserver>
        </div>
      </section>
    </>
  );
}
