// Next
import Head from 'next/head';
import Link from 'next/link';

// Custom
import SvgRainbow from '../components/svg/Rainbow';
import HomeHero from '../components/heros/HomeHero';
import BelowTheFold from '../components/layout/BelowTheFold';

export default function WebDesigners() {
  return (
    <>
      <Head>
        <title>Jakob Smith | Creative and Concientious Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HomeHero />

      <BelowTheFold>
        <SvgRainbow />
        <div className="white-black-border relative z-10 mt-40 w-full max-w-[900px] mx-auto p-6">
          <div className="font-js-math text-center">
            <h2 className="text-[8ch] -mb-2">Web Development</h2>
            <h2 className="text-[6ch] tracking-[0.35ch]">Services For</h2>
          </div>
          <div className="flex flex-col items-center mt-10 font-overpass font-light uppercase text-[5.5ch] tracking-wider text-center">
            <Link className="mb-8 red line-link" href="/web-designers">
              Designers
            </Link>
            <Link className="mb-8 yellow line-link" href="/creatives">
              Creatives
            </Link>
            <Link className="mb-8 blue line-link" href="/beneficial-businesses">
              Businesses
            </Link>
          </div>
        </div>
        <div className="white-black-border relative z-10 mt-32 w-full max-w-[900px] mx-auto p-6">
          <div className="font-js-math text-center">
            <h2 className="text-[8ch] tracking-wide -mb-6">Who Is</h2>
            <h2 className="text-[8ch] tracking-wide">Jakob Smith?</h2>
          </div>
          <div className="flex flex-col items-center mt-8">
            <Link href="/portfolio" className="btn">
              Portfolio
            </Link>
            <div className="flex flex-row justify-center items-center mt-8 mb-8 space-x-8">
              <Link href="/about" className="btn">
                Story
              </Link>
              <Link href="/contact" className="btn">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </BelowTheFold>
    </>
  );
}
