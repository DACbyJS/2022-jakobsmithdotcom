// Next
import Head from 'next/head';
import Link from 'next/link';

// Constants
import { pageData } from '../lib/constants';

// Custom
import NextIntersectionObserver from '../components/layout/NextIntersectionObserver';
import MuxHero from '../components/belowthefold/MuxHero';
import SvgRainbow from '../components/svg/Rainbow';
import BelowTheFold from '../components/layout/BelowTheFold';
import WhiteBlackBorderBox from '../components/layout/WhiteBlackBorderBox';
import Spacer from '../components/layout/Spacer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakob Smith | A Creative and Conscientious Web Developer</title>
        <meta description="A digital marketing developer based in Albuquerque, New Mexico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MuxHero
        playbackId="lj3tm5zsAwuRRC3xAxbMq1aCheG8qL1NRhbaj01wNIW4"
        metadata={{
          video_id: 'multi-color-liquid-looping-bg',
          video_title: 'Multi-color Liquid Looping Video Background',
        }}
        words={['Translate.', 'Decide.', 'Develop.', 'Deliver.']}
      />
      <BelowTheFold>
        <Spacer />
        
        <SvgRainbow />

        <NextIntersectionObserver
          thresholdValue={0.5}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[500px] lg:max-w-[900px] py-6 md:py-10 lg:py-12 z-10">
            <div className="font-js-math text-center">
              <h1 className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] -mb-1 lg:-mb-[1.5]">
                Web Development
              </h1>
              <h2 className="text-[3ch] sm:text-[3.5ch] lg:text-[4.25ch] 2xl:text-[6ch] tracking-[0.35ch]">
                Services For
              </h2>
            </div>
            <div className="flex flex-col items-center mt-6 lg:mt-10 space-y-6 lg:space-y-10 font-overpass font-light uppercase text-[2.5ch] lg:text-[4ch] 2xl:text-[5.5ch] tracking-wider text-center">
              <h3
                className="red line-link hover-on"
                href={pageData[1]?.data?.href}
              >
                Designers
              </h3>
              <h3
                className="yellow line-link hover-on"
                href={pageData[2]?.data?.href}
              >
                Creatives
              </h3>
              <h3
                className="blue line-link hover-on"
                href={pageData[3]?.data?.href}
              >
                Public Good
              </h3>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.5}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[500px] lg:max-w-[900px] py-6 md:py-10 lg:py-12 z-10">
            <div className="font-js-math text-center">
              <h2 className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide -mb-1 sm:-mb-2 2xl:-mb-6">
                Who Is
              </h2>
              <h2 className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide">
                Jakob Smith?
              </h2>
            </div>
            <div className="flex flex-row items-center mt-8 space-y-8">
              <div className="flex-col">
                <h3 className="text-[1.2ch] sm:text-[1.5ch] lg:text-[2ch] 2xl:text-[3ch] tracking-wide">
                  Past Clients
                </h3>
                <ul className="text-[0.9ch] sm:text-[1ch] lg:text-[1.25ch] 2xl:text-[1.5ch] tracking-wide">
                  <li>UNM</li>
                  <li>City of Albuquerque</li>
                  <li>Albuquerque Public Schools</li>
                  <li>United Way of Central New Mexico</li>
                  <li>Albuquerque Community Foundation</li>
                  <li>Albuquerque Hispano Chamber of Commerce</li>
                </ul>
              </div>
              <div className="flex-col">
                <h3 className="text-[1.2ch] sm:text-[1.5ch] lg:text-[2ch] 2xl:text-[3ch] tracking-wide">
                  Past Clients
                </h3>
                <ul className="text-[0.9ch] sm:text-[1ch] lg:text-[1.25ch] 2xl:text-[1.5ch] tracking-wide">
                  <li>UNM</li>
                  <li>City of Albuquerque</li>
                  <li>Albuquerque Public Schools</li>
                  <li>United Way of Central New Mexico</li>
                  <li>Albuquerque Community Foundation</li>
                  <li>Albuquerque Hispano Chamber of Commerce</li>
                </ul>
              </div>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>
        <Spacer />
      </BelowTheFold>
    </>
  );
}
