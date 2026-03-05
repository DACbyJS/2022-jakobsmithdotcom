// Next
import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

// Constants
import { pageData, personSchema } from "../lib/constants";
import { getCanonicalUrl } from "../lib/utilities/seo";
import {
  portfolioClientCategories,
  portfolioData,
} from "../lib/constants/portfolioData";
import { servicesData } from "../lib/constants/servicesData";
import { portfolioPageContent } from "../pages-content/portfolio";

// Custom
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import BigRedTriangle from "../components/svg/BigRedTriangle";
import BigYellowSquare from "../components/svg/BigYellowSquare";

export default function Portfolio() {
  const portfolioPageData = pageData.find((page) => page.slug === "portfolio");
  const { muxWords, hero } = portfolioPageContent;
  const [activeClientCategory, setActiveClientCategory] = useState("all");
  const [displayedPortfolioData, setDisplayedPortfolioData] = useState(portfolioData);
  const [isListVisible, setIsListVisible] = useState(true);
  const categoryThemeClasses = {
    all: {
      inactive: "bg-transparent text-js-black hover:bg-js-black hover:text-js-white",
      active: "bg-js-black text-js-white",
    },
    "web-designers": {
      inactive: "bg-transparent text-js-black hover:bg-js-red hover:text-js-black",
      active: "bg-js-red text-js-black",
    },
    "digital-marketing": {
      inactive: "bg-transparent text-js-black hover:bg-js-yellow hover:text-js-black",
      active: "bg-js-yellow text-js-black",
    },
    "public-good": {
      inactive: "bg-transparent text-js-black hover:bg-js-blue hover:text-js-white",
      active: "bg-js-blue text-js-white",
    },
  };
  const categoryAccentClasses = {
    all: {
      divider: "border-js-black",
      arrow: "text-js-black",
    },
    "web-designers": {
      divider: "border-js-red",
      arrow: "text-js-red",
    },
    "digital-marketing": {
      divider: "border-js-yellow",
      arrow: "text-js-yellow",
    },
    "public-good": {
      divider: "border-js-blue",
      arrow: "text-js-blue",
    },
  };

  const categoryCounts = useMemo(() => {
    return portfolioClientCategories.reduce(
      (accumulator, category) => {
        accumulator[category.id] = portfolioData.filter((item) =>
          item.clientCategories?.includes(category.id)
        ).length;
        return accumulator;
      },
      { all: portfolioData.length }
    );
  }, []);

  const getPortfolioByCategory = useCallback((categoryId) => {
    if (categoryId === "all") {
      return portfolioData;
    }

    return portfolioData.filter((item) =>
      item.clientCategories?.includes(categoryId)
    );
  }, []);

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setDisplayedPortfolioData(getPortfolioByCategory(activeClientCategory));
      requestAnimationFrame(() => {
        setIsListVisible(true);
      });
    }, 160);

    return () => clearTimeout(transitionTimeout);
  }, [activeClientCategory, getPortfolioByCategory]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeClientCategory) return;
    setIsListVisible(false);
    setActiveClientCategory(categoryId);
  };

  const servicesBySlug = useMemo(
    () =>
      servicesData.reduce((accumulator, service) => {
        accumulator[service.slug] = service;
        return accumulator;
      }, {}),
    []
  );

  return (
    <>
      <Head>
        <title>{portfolioPageData.metaTitle}</title>
        <meta name="description" content={portfolioPageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={portfolioPageData.metaKeywords} />
        <link rel="canonical" href={getCanonicalUrl(portfolioPageData.data.href)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </Head>

      <MuxHero
        playbackId="011xEpegVtj401cHWeHsnZVBU00HsqQ02WtwliwMpekPktw"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={muxWords}
      />

      <BelowTheFold>
        <BigBlueCircle className="border-js -top-[50rem] md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[15%]" />
        <Spacer />

        <BigRedTriangle className="border-js -top-[55rem] md:-top-[60rem] -right-[90rem] md:-right-[80rem] rotate-[41deg] scale-[20%]" />

        <NextIntersectionObserver
          thresholdValue={0.3}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[700px] lg:max-w-[1000px] py-6 md:py-10 lg:py-12 z-10">
            <div className="font-js-math text-center mb-8 md:mb-12">
              <h1 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide -mb-1 sm:-mb-2 2xl:-mb-6">
                {hero.title.line1}
              </h1>
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide">
                {hero.title.line2}
              </h2>
            </div>

            <p className="text-center font-overpass font-light text-[1.5ch] lg:text-[1.8ch] 2xl:text-[2.2ch] leading-[1.6] max-w-2xl mx-auto mb-12 px-6">
              {hero.subheading}
            </p>

            <div className="flex items-center justify-center px-6 mb-8 sm:mb-10">
              <div className="inline-flex flex-wrap items-center justify-center gap-y-2">
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`font-overpass uppercase tracking-widest text-[1.1ch] sm:text-[1.2ch] lg:text-[1.3ch] px-3 py-1.5 my-0.5 transition-colors ${
                  activeClientCategory === "all"
                    ? categoryThemeClasses.all.active
                    : categoryThemeClasses.all.inactive
                }`}
              >
                All ({categoryCounts.all})
              </button>

              {portfolioClientCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`font-overpass uppercase tracking-widest text-[1.1ch] sm:text-[1.2ch] lg:text-[1.3ch] px-3 py-1.5 my-0.5 transition-colors ${
                    activeClientCategory === category.id
                      ? categoryThemeClasses[category.id]?.active
                      : categoryThemeClasses[category.id]?.inactive
                  }`}
                >
                  {category.label} ({categoryCounts[category.id] || 0})
                </button>
              ))}
              </div>
            </div>

            <div className={`zero:px-6 sm:px-10 transition-opacity duration-200 ${isListVisible ? "opacity-100" : "opacity-0"}`}>
              {displayedPortfolioData.map((item, index) => {
                const itemCategory = item.clientCategories?.[0] || "all";
                const itemAccentClasses =
                  categoryAccentClasses[itemCategory] || categoryAccentClasses.all;

                return (
                <div
                  key={item.id}
                  className={`flex items-start sm:items-baseline justify-between gap-4 md:gap-8 py-4 md:py-8 border-b border-js-black group transition-all duration-300 ${
                    isListVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                  } ${itemAccentClasses.divider}`}
                  style={{ transitionDelay: isListVisible ? `${index * 35}ms` : "0ms" }}
                >
                  <div className="min-w-0 flex-1">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-js-math text-[1.7ch] sm:text-[2ch] lg:text-[2.4ch] 2xl:text-[3ch] tracking-wide leading-tight hover:opacity-60 transition-opacity"
                    >
                      {item.name}
                    </Link>
                    <span className="font-overpass font-normal text-[1.05ch] uppercase tracking-widest sm:hidden flex flex-wrap gap-x-2 gap-y-1 mt-2 text-left">
                      {item.services.map((serviceSlug, i) => {
                        const service = servicesBySlug[serviceSlug];
                        if (!service) return null;
                        return (
                          <span key={serviceSlug} className="flex items-center gap-x-2">
                            {i > 0 && <span className="opacity-30">/</span>}
                            <Link
                              href={`/services/${serviceSlug}`}
                              className="opacity-70 hover:opacity-100 transition-opacity"
                            >
                              {service.title}
                            </Link>
                          </span>
                        );
                      })}
                    </span>
                  </div>
                  <span className="font-overpass font-normal text-[1.2ch] sm:text-[1.4ch] lg:text-[1.5ch] 2xl:text-[1.8ch] uppercase tracking-widest shrink-0 hidden sm:flex gap-x-3 items-baseline ml-auto justify-end text-right">
                    {item.services.map((serviceSlug, i) => {
                      const service = servicesBySlug[serviceSlug];
                      if (!service) return null;
                      return (
                        <span key={serviceSlug} className="flex items-baseline gap-x-3">
                          {i > 0 && <span className="opacity-30">/</span>}
                          <Link
                            href={`/services/${serviceSlug}`}
                            className="opacity-50 hover:opacity-100 transition-opacity"
                          >
                            {service.title}
                          </Link>
                        </span>
                      );
                    })}
                  </span>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-overpass font-black text-[1.5ch] sm:text-[1.8ch] lg:text-[2ch] leading-none shrink-0 self-center sm:self-auto bg-js-black px-1.5 py-0.5 group-hover:translate-x-1 transition-transform hover:opacity-80 ${itemAccentClasses.arrow}`}
                  >
                    &rarr;
                  </Link>
                </div>
                );
              })}
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <BigYellowSquare className="rotate-[16deg] -top-[55rem] md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[35%]" />
        <Spacer />
      </BelowTheFold>
    </>
  );
}
