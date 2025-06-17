// React
import { useEffect } from "react";

// Next
import Head from "next/head";

// Context
import { useTheme } from "../lib/contexts/ThemeProvider";
import { pageData } from "../lib/constants/pageData";
import { wdPageContent } from "../pages-content/website-designers";

// Components
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import Spacer from "../components/layout/Spacer";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import TransBox from "../components/layout/TransBox";
import BigRedTriangle from "../components/svg/BigRedTriangle";
import Questions from "../components/belowthefold/Questions";
import TwoColumnLineItems from "../components/belowthefold/TwoColumnLineItems";
import GridOfBoxes from "../components/belowthefold/GridOfBoxes";
import PinnedBadge from "../components/svg/PinnedBadge";

export default function WebsiteDesigners() {
  // Theme
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("red");
  }, [setTheme]);

  // Content
  const wdPageData = pageData.find((page) => page.slug === "website-designers");
  const {
    muxWords,
    pageTitle,
    twoColumnLineItemsContent,
    gridOfBoxesTitle,
    gridOfBoxesContent,
    questionsTitle,
    questionsContent,
    questionsBadge,
  } = wdPageContent;

  return (
    <>
      <Head>
        <title>{wdPageData.metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={wdPageData.metaDescription}
        />
      </Head>

      <MuxHero
        playbackId="jd77Y2gq9U9102yeWVQpIOkyM2uJTzDEWdMzHITUjSOs"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={muxWords}
        suppressHydrationWarning
      />

      <BelowTheFold>

        <BigRedTriangle />

        <Spacer />

        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h2 className="text-[5ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              {pageTitle}
            </h2>
          </div>
        </TransBox>

        <Spacer />

        <TwoColumnLineItems items={twoColumnLineItemsContent} />

        <Spacer />

        <BigRedTriangle className={"rotate-90"} />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20 z-10 pt-10 sm:pt-16">
            <div className="font-js-math text-center">
              <h2 className="text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch] px-12 pb-1 sm:pb-12">
                {gridOfBoxesTitle}
              </h2>
            </div>

            <GridOfBoxes items={gridOfBoxesContent} />
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <Spacer />

        <BigRedTriangle className={"translate-x-[-20%] rotate-45"} />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="relative mx-auto max-w-[1300px] py-10 sm:pt-16 sm:pb-16 lg:-mt-20 z-10">

            <PinnedBadge
              className="absolute z-30 -top-3 md:-top-[20px] -left-4 md:-left-[50px] -translate-x-1/2 translate-y-1/2 w-[100px] sm:w-[150px] lg:w-[200px] h-auto"
              linkTo={questionsBadge.linkTo}
              linkText={questionsBadge.linkText}
            />

            <div className="font-js-math text-center">
              <h2 className="text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch] px-12 pb-1 sm:pb-12">
                {questionsTitle}
              </h2>
            </div>

            <Questions items={questionsContent} />

          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <Spacer />

      </BelowTheFold>
    </>
  );
}
