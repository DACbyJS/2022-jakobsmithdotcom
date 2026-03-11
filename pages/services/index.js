// Next
import Head from "next/head";
import Link from "next/link";

// Libraries
import classNames from "classnames";

// Constants
import { pageData, personSchema } from "../../lib/constants";
import { getCanonicalUrl } from "../../lib/utilities/seo";
import { servicesPageContent } from "../../pages-content/services";

// Custom
import NextIntersectionObserver from "../../components/layout/NextIntersectionObserver";
import MuxHero from "../../components/belowthefold/MuxHero";
import BelowTheFold from "../../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../../components/layout/WhiteBlackBorderBox";
import Spacer from "../../components/layout/Spacer";
import DisclaimerBox from "../../components/layout/DisclaimerBox";
import BigBlueCircle from "../../components/svg/BigBlueCircle";
import BigRedTriangle from "../../components/svg/BigRedTriangle";
import BigYellowSquare from "../../components/svg/BigYellowSquare";
import WigglyButton from "../../components/layout/WigglyButton";

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
        <meta name="description" content={servicesPageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={servicesPageData.metaKeywords} />
        <link rel="canonical" href={getCanonicalUrl(servicesPageData.data.href)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[1200px] pad-box-section z-10">
            <div className="text-center pad-inline-section">
              <h1 className="type-hero pb-10 md:pb-12">
                {firstWhiteBlackBox.title}
              </h1>

              <DisclaimerBox className="mb-12">
                {disclaimer}
              </DisclaimerBox>

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
                          "p-6 sm:p-8 lg:p-10 flex flex-col"
                        )}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="block hover:opacity-70 transition-opacity"
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
                        </Link>
                        <div
                          className={classNames(
                            blurbStyle,
                            "mt-2 default-blurb-style"
                          )}
                        >
                          <p>{service.shortDescription}</p>
                        </div>

                        <div className="mt-6 pt-2">
                          <WigglyButton href={`/services/${service.slug}`} colorName={serviceTheme}>
                            Learn More
                          </WigglyButton>
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
