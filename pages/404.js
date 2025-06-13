import Head from "next/head";
import Link from "next/link";

// Libs
import { v4 as uuidv4 } from "uuid";

// Constants
import { pageData } from "../lib/constants";

// Custom
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import Spacer from "../components/layout/Spacer";
import TransBox from "../components/layout/TransBox";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import GridOfBoxes from "../components/belowthefold/GridOfBoxes";

export default function Custom404() {
  // Content for the grid of boxes
  const gridOfBoxesContent = pageData.map((item) => ({
    id: uuidv4(),
    text: (
      <Link className="underline" href={item.data.href}>
        {item.title}
      </Link>
    ),
  }));

  return (
    <>
      <Head>
        <title>404 | Page Not Found </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This page is not found." />
      </Head>

      <MuxHero
        playbackId="jnDZcW3XgvTAs1JP7XT4LvOUw02a00Il4Djkwqh00i762g"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={["404.", "Page.", "Not.", "Found."]}
        suppressHydrationWarning
      />
      <BelowTheFold>
        <Spacer />

        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h2 className="text-[5ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Index of Site
            </h2>
          </div>
        </TransBox>

        <Spacer />

        <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20 z-10 pt-10 sm:pt-16">
          <GridOfBoxes items={gridOfBoxesContent} />
        </WhiteBlackBorderBox>

        <Spacer />
      </BelowTheFold>
    </>
  );
}
