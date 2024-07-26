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
        <title>Jakob Smith | Creative and Conscientious Web Developer</title>
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

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.5}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[900px]">
            <div className="font-js-math text-center">
              <h2 className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] -mb-1 lg:-mb-2">
                Web Development
              </h2>
              <h2 className="text-[3ch] sm:text-[3.5ch] lg:text-[4ch] 2xl:text-[6ch] tracking-[0.35ch]">
                Services For
              </h2>
            </div>
            <div className="flex flex-col items-center mt-6 lg:mt-10 space-y-6 lg:space-y-10 font-overpass font-light uppercase text-[2.5ch] lg:text-[4ch] 2xl:text-[5.5ch] tracking-wider text-center">
              <Link
                className="red line-link hover-on"
                href={pageData[1]?.data?.href}
              >
                Designers
              </Link>
              <Link
                className="yellow line-link hover-on"
                href={pageData[2]?.data?.href}
              >
                Creatives
              </Link>
              <Link
                className="blue line-link hover-on"
                href={pageData[3]?.data?.href}
              >
                Businesses
              </Link>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.5}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[900px]">
            <div className="font-js-math text-center">
              <h2 className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide -mb-1 sm:-mb-2 lg:-mb-4 2xl:-mb-6">
                Who Is
              </h2>
              <h2 className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide">
                Jakob Smith?
              </h2>
            </div>
            <div className="flex flex-col items-center mt-8 space-y-8">
              <Link href="/portfolio" className="btn">
                Portfolio
              </Link>
              <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
                <Link href="/about" className="btn">
                  Story
                </Link>
                <Link href="/contact" className="btn">
                  Contact
                </Link>
              </div>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>
        <Spacer />
      </BelowTheFold>
    </>
  );
}
