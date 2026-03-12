import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../../lib/utilities/seo";
import NextIntersectionObserver from "../../../components/layout/NextIntersectionObserver";

const PAGE_PATH = "/public-good/nonprofit-website-management/";
const PAGE_TITLE = "Website Management for Nonprofits";
const PAGE_DESCRIPTION = "Affordable website management for nonprofits — hosting, SEO, maintenance, and donation page optimization. Albuquerque-based, mission-driven.";

const serviceItems = [
  "Ongoing hosting and maintenance (keep the lights on)",
  "SEO so donors and volunteers can find you",
  "Donation page optimization (better conversion = more funds)",
  "Accessibility and compliance (WCAG, ADA)",
  "Monthly reporting you can show your board",
  "Content updates without the learning curve",
];

const portfolioItems = [
  { id: "wtba", label: "WTBA", href: "https://wtba.org/" },
  { id: "kraemer-fields", label: "Kraemer Fields", href: "https://kraemerfields.com/" },
];

export default function NonprofitWebsiteManagementPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("blue");
  }, [setTheme]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: PAGE_TITLE,
    serviceType: "Nonprofit website management",
    description: PAGE_DESCRIPTION,
    provider: {
      "@type": "LocalBusiness",
      name: "Jakob Smith Website Management",
      url: getCanonicalUrl("/"),
    },
    areaServed: {
      "@type": "City",
      name: "Albuquerque",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Management Services for Nonprofits",
      itemListElement: serviceItems.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    mainEntityOfPage: getCanonicalUrl(PAGE_PATH),
    url: getCanonicalUrl(PAGE_PATH),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jakob Smith Website Management",
    image: getCanonicalUrl("/images/jakob-1.jpg"),
    url: getCanonicalUrl("/"),
    email: "hello@jakobsmith.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Albuquerque",
      addressRegion: "NM",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Albuquerque",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/jakob-smith-webdev/",
      "https://github.com/DACbyJS",
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={getCanonicalUrl(PAGE_PATH)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>

      <main className="bg-js-black text-js-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <section className="border-2 border-js-blue p-6 sm:p-10 bg-js-black">
            <p className="font-overpass-mono uppercase tracking-[0.18em] text-xs sm:text-sm text-js-blue">
              Nonprofit Website Management
            </p>
            <h1 className="font-js-math text-[2.3rem] sm:text-[3.4rem] lg:text-[4.1rem] leading-[1.08] mt-4 text-balance">
              Your mission matters more than your budget. Let&apos;s make your website work harder for both.
            </h1>
          </section>

          <section className="mt-10 sm:mt-14 border-2 border-js-white p-6 sm:p-10 bg-js-black">
            <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">
              The problem
            </h2>
            <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[70ch]">
              Most nonprofits have outdated websites managed by volunteers or past contractors. Technical debt piles up. Donations suffer. Board members ask hard questions about ROI.
            </p>
          </section>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
            <section className="mt-10 sm:mt-14 border-2 border-js-blue p-6 sm:p-10 bg-js-white text-js-black">
              <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">
                What I do
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {serviceItems.map((item) => (
                  <li key={item} className="border-2 border-js-black px-4 py-3 font-overpass text-lg bg-js-white">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-overpass text-base sm:text-lg mt-8">
                Explore related services: {" "}
                <Link href="/services/foundations/" className="underline transition-opacity duration-300 hover:opacity-70">
                  Foundations
                </Link>{" "}
                and{" "}
                <Link href="/services/simple-seo/" className="underline transition-opacity duration-300 hover:opacity-70">
                  Simple SEO
                </Link>
                .
              </p>
            </section>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
            <section className="mt-10 sm:mt-14 border-2 border-js-white p-6 sm:p-10 bg-js-black">
              <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">
                Budget-friendly approach
              </h2>
              <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[70ch]">
                Monthly value pricing, no surprise invoices, open-source tools to keep costs low.
              </p>
            </section>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
            <section className="mt-10 sm:mt-14 border-2 border-js-blue p-6 sm:p-10 bg-js-white text-js-black">
              <h2 className="font-js-math text-[1.9rem] sm:text-[2.5rem] leading-tight">
                Who I&apos;ve helped
              </h2>
              <p className="font-overpass text-base sm:text-lg mt-4">
                A few examples of organizations and associations I&apos;ve supported:
              </p>
              <ul className="mt-5 flex flex-wrap gap-4 text-base sm:text-lg font-overpass-mono uppercase tracking-[0.05em]">
                {portfolioItems.map((item) => (
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

          <NextIntersectionObserver
            thresholdValue={0.2}
            classes="animate-init fade-up-init"
            topIn="fade-up-animate"
          >
            <section className="mt-10 sm:mt-14 border-2 border-js-blue p-6 sm:p-10 bg-js-blue text-js-black">
              <h2 className="font-js-math text-[2rem] sm:text-[2.7rem] leading-tight text-balance">
                Let&apos;s talk about your nonprofit&apos;s website
              </h2>
              <p className="font-overpass text-lg sm:text-xl mt-4 max-w-[68ch]">
                If your team needs dependable web support without enterprise pricing, I can help you stabilize, improve, and grow your site.
              </p>
              <div className="mt-7 flex flex-wrap gap-5 font-overpass-mono uppercase tracking-[0.06em] text-sm sm:text-base">
                <Link href="/contact/" className="underline transition-opacity duration-300 hover:opacity-75">
                  Contact
                </Link>
                <Link href="/public-good/" className="underline transition-opacity duration-300 hover:opacity-75">
                  Back to Public Good
                </Link>
              </div>
            </section>
          </NextIntersectionObserver>
        </div>
      </main>
    </>
  );
}
