// React
import { useEffect } from "react";

// Next
import Head from "next/head";

// Constants
import { pageData } from "../lib/constants/pageData";
import { dmPageContent } from "../pages-content/digital-marketing";

// Context
import { useTheme } from "../lib/contexts/ThemeProvider";

// Components
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import Spacer from "../components/layout/Spacer";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import TransBox from "../components/layout/TransBox";
import BigYellowSquare from "../components/svg/BigYellowSquare";
import Questions from "../components/belowthefold/Questions";
import TwoColumnLineItems from "../components/belowthefold/TwoColumnLineItems";
import GridOfBoxes from "../components/belowthefold/GridOfBoxes";
import PinnedBadge from "../components/svg/PinnedBadge";

export default function DigitalMarketing() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("yellow");
  }, [setTheme]);

  const {
    muxWords,
    pageTitle,
    twoColumnLineItemsContent,
    gridOfBoxesTitle,
    gridOfBoxesContent,
    questionsTitle,
    questionsContent,
    questionsBadge,
  } = dmPageContent;

  return (
    <>
      <Head>
        <title>{pageData[2].metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={pageData[2].metaDescription} />
      </Head>

      <MuxHero
        playbackId="F6ai7ooWZewp2Prle00Mkgz1bfQEPMOB8o1y02AFiNVmQ"
        metadata={{
          video_id: "yellow-liquid-looping-bg",
          video_title: "Yellow Liquid Looping Video Background",
        }}
        words={muxWords}
        suppressHydrationWarning
      />

      <BelowTheFold>
        <BigYellowSquare
          svgProps={{
            className:
              "scale-[120%] rotate-45 -translate-x-[180px] translate-y-[200px]",
          }}
        />

        <Spacer />

        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h1 className="text-[5ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              {pageTitle}
            </h1>
          </div>
        </TransBox>

        <Spacer />

        <TwoColumnLineItems items={twoColumnLineItemsContent} />

        <Spacer />

        <BigYellowSquare
          svgProps={{ className: "scale-[125%] rotate-[81deg]" }}
        />

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

        <BigYellowSquare
          svgProps={{ className: "scale-[110%] rotate-[121deg]" }}
        />

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[1300px] py-10 sm:py-16 lg:-mt-20 z-10">
            <PinnedBadge
              className="absolute z-30 -top-6 md:-top-[20px] -left-4 md:-left-[50px] -translate-x-1/2 translate-y-1/2 w-[100px] sm:w-[150px] lg:w-[200px] h-auto"
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
