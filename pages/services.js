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

const getRandomIndex = (max) => Math.floor(Math.random() * max);

export default function Services() {
  const servicesPageData = pageData.find((page) => page.slug === "services");
  const { muxWords, firstWhiteBlackBox } = servicesPageContent;
  const { disclaimer } = firstWhiteBlackBox;

  const getServiceTheme = () => {
    const themeIndex = ["blue", "red", "yellow"];
    return themeIndex[getRandomIndex(3)];
  };

  const getBorderStyle = (serviceTheme) => {
    if (serviceTheme === undefined) {
      serviceTheme = getServiceTheme();
    }

    const borderStyleIndex = [
      `border-t-js-black border-l-js-${serviceTheme} border-r-js-white border-b-js-white`,
      `border-l-js-black border-t-js-${serviceTheme} border-r-js-white border-b-js-white`,
    ];

    return classNames(
      borderStyleIndex[getRandomIndex(2)],
      "border-solid border-t-[10px] border-l-[15px] border-r-[15px] border-b-[10px]"
    );
  };

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
        <BigBlueCircle className="-top-[50rem] border-js md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[15%]" />

        <Spacer />

        <BigRedTriangle className="-top-[40rem] md:-top-[35rem] lg:-top-[25rem] -left-[55rem] sm:-left-[45rem] md:-left-[35rem] lg:-left-[2rem] rotate-[81deg] scale-[20%]" />

        <NextIntersectionObserver
          thresholdValue={0.1}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[1200px] py-6 md:py-10 lg:py-12 z-10">
            <div className="text-center px-6 md:px-10 lg:px-12">
              <h1 className="font-js-math text-[4ch] md:text-[5ch] 2xl:text-[8ch] tracking-wide pb-8">
                {firstWhiteBlackBox.title}
              </h1>

              <div className="border-[10px] border-js-black font-js-math w-full max-w-[500px] mx-auto text-center p-8 mb-12">
                {disclaimer}
              </div>

              <div className="text-left">
                <ul className="list-none p-0 m-0 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
                  {firstWhiteBlackBox.services.map((service) => {
                    const serviceTheme = getServiceTheme();
                    const borderStyle = getBorderStyle(serviceTheme);
                    const blurbStyle = `blurb-style-${serviceTheme}`;
                    return (
                      <li
                        key={service.id}
                        className={classNames(
                          borderStyle,
                          "p-6 sm:p-8 lg:p-10"
                        )}
                      >
                        <h2 className="text-[2ch] md:text-[3ch] font-overpass-mono uppercase font-bold">
                          {service.title}
                        </h2>
                        <p className="text-sm text-gray-600 font-overpass">
                          {service.tooltip}
                        </p>
                        <p className="text-[1.8ch] md:text-[2.2ch] font-semibold font-js-math mt-2 mb-3">
                          {service.price}
                        </p>
                        <div
                          className={classNames(
                            blurbStyle,
                            "mt-2 default-blurb-style"
                          )}
                        >
                          {service.html}
                        </div>
                      </li>
                    );
                  })}
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
