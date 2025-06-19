// Next
import Head from "next/head";
import Link from "next/link";

// Libs
import { v4 as uuidv4 } from "uuid";

// Constants
import { pageData } from "../lib/constants";
import { homePageContent } from "../pages-content";

// Custom
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import SvgRainbow from "../components/svg/Rainbow";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";

export default function About() {
  const homePageData = pageData.find((page) => page.slug === "home");
  const { muxWords, firstWhiteBlackBox } = homePageContent;
  
  return (
    <>
      <Head>
        <title>{homePageData.metaTitle}</title>
        <meta description={homePageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MuxHero
        playbackId="lj3tm5zsAwuRRC3xAxbMq1aCheG8qL1NRhbaj01wNIW4"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={muxWords}
      />
      <BelowTheFold>
        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.3}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[1200px] py-6 md:py-10 lg:py-12 z-10">
            <div className="font-js-math text-center">
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide -mb-1 sm:-mb-2 2xl:-mb-6">
                Who Is
              </h2>
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide">
                Jakob Smith?
              </h2>
            </div>
            <div className="grid zero:grid-cols-1 sm:grid-cols-2 gap-10 zero:p-6 sm:p-10">
              <div className="flex-col">
                <h3 className="btn w-full text-center">Recent Work</h3>
                <ul className="grid zero:grid-cols-1 xs:grid-cols-2 gap-y-4 my-6 mx-2 font-light font-overpass uppercase leading-[1.7] text-justify  text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] w-full max-w-[475px]">
                  <li className="">
                    <Link target="_blank" href="https://carristo.com" className="line-link red hover-on">Carristo Creative</Link>
                  </li>
                  <li className="">
                    <Link target="_blank" href="https://skisantafe.com" className="line-link red hover-on">Ski Santa Fe</Link>
                  </li>
                  <li className="">
                    <Link target="_blank" href="https://thefirebird.com" className="line-link red hover-on">The Firebird</Link>
                  </li>
                  <li className="">
                    <Link target="_blank" href="https://northstardentalabq.com/" className="line-link yellow hover-on">North Star Dental</Link>
                  </li>
                  <li className="">
                    <Link  target="_blank" href="https://getagrip.com" className="line-link yellow hover-on">Get A Grip</Link>
                  </li>
                  <li className="">
                    <Link target="_blank" href="https://sunvista.com" className="line-link yellow  hover-on">NAI Sunvista</Link>
                  </li>
                  <li className="">
                    <Link target="_blank" href="https://1stvalley.com/" className="line-link yellow  hover-on">NAI First Valley</Link>
                  </li>
                  <li className="">
                    <Link target="_blank" href="https://commgate.com" className="line-link yellow hover-on">Commgate</Link>
                  </li>
                  <li className="">
                    <Link target="_blank" href="https://gridworks.com/" className="line-link blue hover-on">Gridworks</Link>
                  </li>
                  <li className="">
                    <Link  target="_blank" href="https://skinewmexico.com" className="line-link blue hover-on">Ski New Mexico</Link>
                  </li>
                  <li className="">
                    <Link  target="_blank" href="https://greaterabq.com/" className="line-link blue hover-on">GACOC</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-col">
                <h3 className="btn w-full text-center">Values</h3>
                <ul className="grid zero:grid-cols-1 xs:grid-cols-2 gap-y-4 my-6 mx-2 font-light font-overpass uppercase leading-[1.8] text-justify text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] w-full max-w-[475px]">
                  <li className="">Communication</li>
                  <li className="">Prosperity</li>
                  <li className="">Responsibility</li>
                  <li className="">Thoughtfulness</li>
                  <li className="">Determination</li>
                  <li className="">Artistry</li>
                  <li className="">Liberty</li>
                  <li className="">Creativity</li>
                  <li className="">Compassion</li>
                </ul>
              </div>
              <div className="flex-col col-span-1 sm:col-span-2">
                <h3 className="btn w-full text-center">Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-10 mt-6">
                  <ul className="flex flex-col justify-start items-start px-2 space-y-4 font-light font-overpass uppercase leading-[1.8] text-justify text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] w-full max-w-[475px]">
                    <li className="">Craft CMS \ WordPress \ Contentful \ Sanity \ Expression Engine \ Joomla</li>
                    <li className="">PHP \ Ruby \ Python</li>
                    <li className="">Laravel \ Symfony \ Yii \ Ruby on Rails</li>
                    <li className="">HTML \ Twig \ Blade</li>
                    <li className="">CSS \ SCSS \ SASS \ PCSS</li>
                    <li className="">Tailwind \ Bootstrap \ Pure</li>
                    <li className="">JS \ jQuery \ React \ AngularJS \ Next.js \ Alpine.js</li>
                  </ul>
                  <ul className="flex flex-col justify-start items-start mx-2 space-y-4 font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] w-full max-w-[475px]">
                    <li className="">Kinsta \ WpEngine \ Linode \ Servd</li>
                    <li className="">S3 \ Cloudfront \ Object Storage \ Google Cloud</li>
                    <li className="">DDEV \ Lando \ Docker \ Git \ Trellis</li>
                    <li className="">MySQL \ PostgreSQL \ MariaDB \ GraphQL \ REST</li>
                    <li className="">50+ Server-side Websites</li>
                    <li className="">20+ Client-side Websites</li>
                    <li className="">7 Production React/Angular Web Apps</li>
                    <li className="">VS Code on Linux Mint Cinammon is my daily driver!</li>
                  </ul>
                </div>
              </div>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>
        <Spacer />
      </BelowTheFold>
    </>
  );
}
