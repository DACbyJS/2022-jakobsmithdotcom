// React
import { useEffect } from "react";

// Next
import Head from "next/head";

// Context
import { useTheme } from "../lib/contexts/ThemeProvider";

// Constent
import { pageData } from "../lib/constants/pageData";
import { personSchema } from "../lib/constants/schema";
import { getCanonicalUrl } from "../lib/utilities/seo";
import { pgPageContent } from "../pages-content/public-good";

// Components
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import Spacer from "../components/layout/Spacer";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import TransBox from "../components/layout/TransBox";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import Questions from "../components/belowthefold/Questions";
import TwoColumnLineItems from "../components/belowthefold/TwoColumnLineItems";
import GridOfBoxes from "../components/belowthefold/GridOfBoxes";
import PinnedBadge from "../components/svg/PinnedBadge";

export default function PublicGood() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("blue");
  }, [setTheme]);

  const pgPageData = pageData.find((page) => page.slug === "public-good");
  const {
    muxWords,
    pageTitle,
    twoColumnLineItemsContent,
    gridOfBoxesTitle,
    gridOfBoxesContent,
    questionsTitle,
    questionsContent,
    questionsBadge,
  } = pgPageContent;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questionsContent.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>{pgPageData.metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={pgPageData.metaDescription} />
        <meta name="keywords" content={pgPageData.metaKeywords} />
        <link rel="canonical" href={getCanonicalUrl(pgPageData.data.href)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <MuxHero
        playbackId="cJw0100x5602VGYXamVp5j6FAW1g02AM2AEzDXZkBN9NSro"
        metadata={{
          video_id: "blue-and-white-liquid-looping-bg",
          video_title: "Blue and White Liquid Looping Video Background",
        }}
        words={muxWords}
        suppressHydrationWarning
      />

      <BelowTheFold>
        <BigBlueCircle
          svgProps={{
            className: "scale-[100%] -translate-x-[200px] translate-y-[450px]",
          }}
        />

        <Spacer />

        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h2 className="type-display">
              {pageTitle}
            </h2>
          </div>
        </TransBox>

        <Spacer />

        <TwoColumnLineItems items={twoColumnLineItemsContent} />

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20 z-10 pt-12 sm:pt-20">
            <div className="font-js-math text-center">
              <h2 className="type-section px-8 sm:px-12 pb-2 sm:pb-14">
                {gridOfBoxesTitle}
              </h2>
            </div>

            <GridOfBoxes items={gridOfBoxesContent} />
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <BigBlueCircle
          svgProps={{
            className: "scale-[100%] translate-x-[180px] translate-y-[350px]",
          }}
        />

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[1300px] py-12 sm:py-20 lg:-mt-20 z-10">
            <PinnedBadge
              className="absolute z-30 -top-6 md:-top-[20px] -left-4 md:-left-[50px] -translate-x-1/2 translate-y-1/2 w-[100px] sm:w-[150px] lg:w-[200px] h-auto"
              linkTo={questionsBadge.linkTo}
              linkText={questionsBadge.linkText}
            />
            <div className="font-js-math text-center">
              <h2 className="type-section px-8 sm:px-12 pb-2 sm:pb-14">
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
