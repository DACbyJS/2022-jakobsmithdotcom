// Next
import Link from "next/link";

// Libraries
import classNames from "classnames";

// Constants
import { pageData, personSchema } from "../lib/constants";
import { pricingPageContent } from "../pages-content/pricing";

// Components
import PageHead from "../components/head/PageHead";
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import DisclaimerBox from "../components/layout/DisclaimerBox";
import SiteTooltip from "../components/belowthefold/SiteTooltip";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import BigRedTriangle from "../components/svg/BigRedTriangle";
import BigYellowSquare from "../components/svg/BigYellowSquare";

export default function Pricing() {
  const pricingPageData = pageData.find((page) => page.slug === "pricing");
  const { muxWords, firstWhiteBlackBox } = pricingPageContent;
  const {
    firstPricingColumn,
    secondPricingColumn,
    bottomLinks,
    disclaimer,
    disclaimer2,
    disclaimer3,
  } = firstWhiteBlackBox;

  return (
    <>
      <PageHead pageData={pricingPageData} schemaObjects={[personSchema]} />

      <MuxHero
        playbackId="7LLlXC2CqEay7REvuvq6xPeXvnXbB9I3HLJiaDry02P8"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={muxWords}
      />

      <BelowTheFold>
        <BigBlueCircle className="-top-[50rem] md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[15%]" />

        <Spacer />

        <BigRedTriangle className="-top-[40rem] md:-top-[35rem] lg:-top-[25rem] -left-[55rem] sm:-left-[45rem] md:-left-[35rem] lg:-left-[2rem] rotate-[81deg] scale-[20%]" />

        <NextIntersectionObserver
          thresholdValue={0.3}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[1200px] pad-box-section z-10">
            <div className="font-js-math text-center px-4">
              <h1 className="type-hero">
                {firstWhiteBlackBox.title}
              </h1>
            </div>

            <div className="grid zero:grid-cols-1 sm:grid-cols-2 gap-12 pad-inline-section py-8 md:py-12">
              <div className="flex-col">
                <h3 className="btn w-full text-center">
                  {firstPricingColumn.title}
                </h3>

                {firstPricingColumn.items.map((item) => (
                  <ul
                    key={item.id}
                    className="flex flex-row pt-4 font-light font-overpass uppercase leading-[1.7] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] w-full"
                  >
                    <li
                      id={`item-${item.id}`}
                      className="flex-0 text-left flex-row justify-center items-center font-bold cursor-help"
                    >
                      {item.title}
                    </li>

                    <SiteTooltip item={item} />

                    <li className="flex-1 flex w-full flex-row justify-center items-center">
                      <span className="border-1 w-[90%] mb-[3px] border-dashed"></span>
                    </li>
                    <li className="flex-0 text-right flex-row justify-center items-center">
                      {item.price}
                    </li>
                  </ul>
                ))}
              </div>

              <div className="flex-col">
                <h3 className="btn w-full text-center">
                  {secondPricingColumn.title}
                </h3>

                {secondPricingColumn.items.map((item) => (
                  <ul
                    key={item.id}
                    className="flex flex-row pt-4 font-light font-overpass uppercase leading-[1.7] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] w-full"
                  >
                    <li
                      id={`item-${item.id}`}
                      className="flex-0 text-left flex-row justify-center items-center font-bold cursor-help"
                    >
                      {item.title}
                    </li>
                    <SiteTooltip item={item} />

                    <li className="flex-1 flex w-full flex-row justify-center items-center">
                      <span className="border-1 w-[90%] mb-[3px] border-dashed"></span>
                    </li>
                    <li className="flex-0 text-right flex-row justify-center items-center">
                      {item.price}
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            {bottomLinks.map((link) => (
              <div
                key={link.id}
                className="flex flex-col items-center justify-center py-3 md:py-6"
              >
                <Link
                  href={link.href}
                  target={link.target}
                  className={classNames(
                    "line-link hover-on type-cta",
                    link.color
                  )}
                >
                  {link.title}
                </Link>
              </div>
            ))}

            <div className="pad-inline-section mt-10">
              <DisclaimerBox>
                {disclaimer}
              </DisclaimerBox>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>
        <BigYellowSquare className="rotate-[16deg] -top-[55rem] md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[35%]" />
        <Spacer />
      </BelowTheFold>
    </>
  );
}
