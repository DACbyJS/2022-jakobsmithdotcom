// Next
import Head from "next/head";
import Link from "next/link";

// Libraries
import classNames from "classnames";

// Constants
import { pageData } from "../lib/constants";
import { servicesPageContent } from "../pages-content/services";

// Custom
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import BigRedTriangle from "../components/svg/BigRedTriangle";
import BigYellowSquare from "../components/svg/BigYellowSquare";

export default function Services() {
  const servicesPageData = pageData.find((page) => page.slug === "services");
  const { muxWords, firstWhiteBlackBox } = servicesPageContent;

  return (
    <>
      <Head>
        <title>{servicesPageData.metaTitle}</title>
        <meta description={servicesPageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MuxHero
        playbackId="lFKXc01pKRKTB901fBGpDaUx2MKzgwf3MuYLUZwTPKvTM"
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
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[1200px] py-6 md:py-10 lg:py-12 z-10">
            <div className="text-center px-6 md:px-10 lg:px-12">
              <h1 className="font-js-math text-[4ch] md:text-[5ch] 2xl:text-[8ch] tracking-wide pb-16">
                {firstWhiteBlackBox.title}
              </h1>

              <div className="text-left">
                <ul className="list-none p-0 m-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {firstWhiteBlackBox.services.map((service) => (
                    <li key={service.id}>
                      <h2 className="text-[2ch] md:text-[3ch] font-overpass-mono uppercase font-bold">
                        {service.title}
                      </h2>
                      <p className="text-sm text-gray-600 font-overpass">
                        {service.tooltip}
                      </p>
                      <p className="text-[1.8ch] md:text-[2.3ch] font-semibold font-overpass mt-2">
                        {service.price}
                      </p>
                      <div className="mt-2 default-blurb-style">
                        {service.html}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <BigYellowSquare className="rotate-[16deg] -top-[55rem] md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[35%]" />

        <Spacer />
      </BelowTheFold>
    </>
  );
}
