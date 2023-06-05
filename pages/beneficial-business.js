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
            <h2 className="text-[8ch] -mb-2">Beneficial Businesses</h2>
          </div>
        </div>

      </BelowTheFold>
    </>
  );
}
