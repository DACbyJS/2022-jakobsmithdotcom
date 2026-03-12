// Next
import Link from "next/link";

// Constants
import { pageData, personSchema } from "../lib/constants";
import { homePageContent } from "../pages-content";

// Components
import PageHead from "../components/head/PageHead";
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import SvgRainbow from "../components/svg/Rainbow";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import PinnedBadge from "../components/svg/PinnedBadge";

export default function Home() {
  // Content
  const homePageData = pageData.find((page) => page.slug === "home");
  const { muxWords, firstBox, secondBox } = homePageContent;

  return (
    <>
      <PageHead pageData={homePageData} schemaObjects={[personSchema]} />

      <MuxHero
        playbackId="aO00BRcAmAul3tQQHdU4bTk7UovQ5AHZ017zz4ynexq6E"
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
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[900px] pad-box-section z-10">
            <div className="font-js-math text-center">
              <h1 className="type-hero -mb-1 lg:-mb-[0.5ch]">
                {firstBox.headerOne}
              </h1>
              <h2 className="text-[3.25ch] sm:text-[3.75ch] lg:text-[4.25ch] 2xl:text-[6ch] tracking-[0.35ch]">
                {firstBox.headerTwo}
              </h2>
            </div>
            <div className="flex flex-col items-center mb-4 type-cta stack-group">
              {firstBox.links.map((link) => (
                <Link
                  key={`home-first-${link.href}`}
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
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[900px] pad-box-section z-10 relative">
            <PinnedBadge
              className="absolute z-30 -bottom-5 md:-bottom-[50px] -left-4 md:-left-[50px] -translate-x-1/2 translate-y-1/2 w-[100px] sm:w-[180px] lg:w-[200px] h-auto"
              linkTo={secondBox.badge.href}
              linkText={secondBox.badge.text}
            />
            <div className="font-js-math text-center">
              <h2 className="type-hero -mb-1 lg:-mb-[1.5]">
                {secondBox.headerOne}
              </h2>
            </div>
            <p className="text-center type-body px-4 mt-6 max-w-[600px] mx-auto">
              {secondBox.headerTwo}
            </p>
            <div className="flex flex-col items-center mb-4 type-cta stack-group">
              {secondBox.links.map((link) => (
                <Link
                  key={`home-second-${link.href}`}
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
