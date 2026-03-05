// Next
import Head from "next/head";
import Link from "next/link";

// Constants
import { pageData, personSchema } from "../lib/constants";
import { getCanonicalUrl } from "../lib/utilities/seo";
import { contactPageContent } from "../pages-content/contact.js";

// Custom
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import BigYellowSquare from "../components/svg/BigYellowSquare";
import BigRedTriangle from "../components/svg/BigRedTriangle";

export default function Contact() {
  const contactPageData = pageData.find((page) => page.slug === "contact");
  const { muxWords, hero, email, booking } = contactPageContent;

  return (
    <>
      <Head>
        <title>{contactPageData.metaTitle}</title>
        <meta name="description" content={contactPageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={contactPageData.metaKeywords} />
        <link rel="canonical" href={getCanonicalUrl(contactPageData.data.href)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </Head>

      <MuxHero
        playbackId="011xEpegVtj401cHWeHsnZVBU00HsqQ02WtwliwMpekPktw"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={muxWords}
      />

      <BelowTheFold>
        <BigBlueCircle className="border-js -top-[50rem]  md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[15%]" />
        <Spacer />

        <BigRedTriangle className="border-js -top-[55rem] md:-top-[60rem] -right-[90rem] md:-right-[80rem] rotate-[41deg] scale-[20%]" />
        <NextIntersectionObserver
          thresholdValue={0.3}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[900px] py-6 md:py-10 lg:py-12 z-10">
            <div className="font-js-math text-center mb-8 md:mb-12">
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide -mb-1 sm:-mb-2 2xl:-mb-6">
                {hero.title.line1}
              </h2>
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide">
                {hero.title.line2}
              </h2>
            </div>

            <p className="text-center font-overpass font-light text-[1.5ch] lg:text-[1.8ch] 2xl:text-[2.2ch] leading-[1.6] max-w-2xl mx-auto mb-12 px-6">
              {hero.subheading}
            </p>

            <div className="zero:p-6 sm:p-10">
              <div className="grid zero:grid-cols-1 md:grid-cols-2 gap-10">
                {/* Email */}
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-js-math text-[2.5ch] lg:text-[3ch] 2xl:text-[4ch] tracking-wide w-full text-center mb-6">
                    {email.heading}
                  </h3>
                  <Link
                    href={email.href}
                    className="font-overpass font-light underline text-[1.4ch] lg:text-[1.6ch] 2xl:text-[2ch] uppercase tracking-wide hover:opacity-70 transition-opacity"
                  >
                    {email.address}
                  </Link>
                </div>

                {/* Book a Meeting */}
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-js-math text-[2.5ch] lg:text-[3ch] 2xl:text-[4ch] tracking-wide w-full text-center mb-6">
                    {booking.heading}
                  </h3>
                  <Link
                    href={booking.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-overpass font-light underline text-[1.4ch] lg:text-[1.6ch] 2xl:text-[2ch] uppercase tracking-wide hover:opacity-70 transition-opacity"
                  >
                    {booking.label}
                  </Link>
                </div>
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
