// Next
import Head from "next/head";
import Link from "next/link";

// Libs
import { v4 as uuidv4 } from "uuid";

// Constants
import { pageData } from "../lib/constants";
import { homePageContent } from "../pages-content";

// Custom
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import SvgRainbow from "../components/svg/Rainbow";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import AbstractShape from "../components/svg/AbstractShape";

export default function Home() {
  // Content
  const homePageData = pageData.find((page) => page.slug === "home");
  const { muxWords, firstBox, secondBox } = homePageContent;

  return (
    <>
      <Head>
        <title>{homePageData.metaTitle}</title>
        <meta description={homePageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MuxHero
        playbackId="lj3tm5zsAwuRRC3xAxbMq1aCheG8qL1NRhbaj01wNIW4"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={muxWords}
      />
      <BelowTheFold>
        <Spacer />

        <SvgRainbow />

        <NextIntersectionObserver
          thresholdValue={0.4}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[900px] py-6 md:py-10 lg:py-12 z-10">
            <div className="font-js-math text-center">
              <h1 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] -mb-1 -lg:mb-[0.5ch]">
                {firstBox.headerOne}
              </h1>
              <h2 className="text-[3.25ch] sm:text-[3.75ch] lg:text-[4.25ch] 2xl:text-[6ch] tracking-[0.35ch]">
                {firstBox.headerTwo}
              </h2>
            </div>
            <div className="flex flex-col items-center mb-4 mt-6 lg:mt-10 space-y-6 lg:space-y-10 font-overpass font-light uppercase text-[2.5ch] lg:text-[4ch] 2xl:text-[5.5ch] tracking-wider text-center">
              {firstBox.links.map((link) => (
                <Link
                  key={uuidv4()}
                  className={link.cssClasses}
                  href={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.3}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[900px] pt-6 pb-10 md:py-10 lg:py-12 z-10 relative">
            <AbstractShape
              className="absolute z-30 -bottom-5 md:-bottom-[50px] -left-4 md:-left-[50px] -translate-x-1/2 translate-y-1/2 w-[100px] sm:w-[180px] lg:w-[200px] h-auto"
              linkTo="/portfolio"
              linkText="See Portfolio"
            />
            <div className="font-js-math text-center">
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] -mb-1 lg:-mb-[1.5]">
                {secondBox.headerOne}
              </h2>
            </div>
            <p className="text-center font-overpass font-light text-md lg:text-xl px-4 mt-4 max-w-[600px] mx-auto">
              {secondBox.headerTwo}
            </p>
            <div className="flex flex-col items-center mb-4 mt-6 lg:mt-10 space-y-6 lg:space-y-10 font-overpass font-light uppercase text-[2.5ch] lg:text-[4ch] 2xl:text-[5.5ch] tracking-wider text-center">
              {secondBox.links.map((link) => (
                <Link
                  key={uuidv4()}
                  className={link.cssClasses}
                  href={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>
        <Spacer />
      </BelowTheFold>
    </>
  );
}
