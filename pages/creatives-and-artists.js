// React
import { useEffect } from 'react';

// Next
import Head from 'next/head';

// Libs
import { v4 as uuidv4 } from 'uuid';

// Context
import { useTheme } from '../lib/contexts/ThemeProvider';

// Components
import MuxHero from '../components/belowthefold/MuxHero';
import BelowTheFold from '../components/layout/BelowTheFold';
import Spacer from '../components/layout/Spacer';
import WhiteBlackBorderBox from '../components/layout/WhiteBlackBorderBox';
import TransBox from '../components/layout/TransBox';
import BlackBox from '../components/layout/BlackBox';
import BigYellowSquare from '../components/svg/BigYellowSquare';
import Questions from '../components/belowthefold/Questions';

export default function CreativesAndArtists() {
  // Theme
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme('yellow');
  }, [setTheme]);
  
  return (
    <>
      <Head>
        <title> Creatives and Artists | You Channel, I Translate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MuxHero
        playbackId="HJG00Nil01mccrawn011RkLXGynEYcTj9cSEIiSF02A00Pcw"
        metadata={{
          video_id: 'multi-color-liquid-looping-bg',
          video_title: 'Multi-color Liquid Looping Video Background',
        }}
        startTime={40}
        words={['Channel.', 'Express.', 'Translate.', 'Push.']}
      />
      <BelowTheFold>
        <BigYellowSquare />
        <TransBox className="mx-auto">
          <div className="font-js-math text-center">
            <h2 className="text-[4ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch] -mt-6 lg:-mt-10 mb-10 xl:-mt-20 lg:mb-20">
              Why Artists and Creatives?
            </h2>
          </div>
        </TransBox>

        <div className="flex flex-col md:flex-row justify-between space-x-0 space-y-12 md:space-x-10 md:space-y-0 mx-auto max-w-[1300px]">
          <WhiteBlackBorderBox className="max-w-[700px]">
            <h2 className="font-js-math text-center text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch]">
              They Need:
            </h2>
            <div className="p-0 flex flex-col justify-center items-center my-10 mx-10 space-y-12 font-light">
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  Their Ideas translated
                </strong>{' '}
                Into a Website that doesn{"'"}t look like Anyone else{"'"}s
                site.
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  Someone who can handle
                </strong>{' '}
                Domains, Servers, Animation,{' '}
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  Interactivity
                </strong>
                , SEO and Complexity.
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  To Communicate
                </strong>{' '}
                about ideas, aesthetic and feelings like they{"'"}re important.
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  Someone Willing to
                </strong>{' '}
                do the quantity of{' '}
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  Work
                </strong>{' '}
                to get to quality.
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  Someone who can
                </strong>{' '}
                keep prices low{' '}
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  and solutions high.
                </strong>
                .
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow bg-js-black pt-2 px-2 font-light">
                  To align
                </strong>{' '}
                with your vision even if it clashes with the tech or budget.
              </span>
            </div>
          </WhiteBlackBorderBox>

          <BlackBox className="max-w-[700px]">
            <h2 className="text-js-white font-js-math text-center text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch]">
              I Give:
            </h2>
            <div className="p-0 flex flex-col justify-center items-center my-10 mx-10 space-y-12 font-light">
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow font-light">
                  Unique Websites
                </strong>{' '}
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow font-light">
                  Your design performs
                </strong>{' '}
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
                Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow font-light">
                  Communication and Feelings
                </strong>{' '}
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
                Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow font-light">
                  early and clear revisions
                </strong>{' '}
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow font-light">
                  Project management and client satisfaction
                </strong>{' '}
                Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-yellow font-light">Alignment</strong>{' '}
                Details matter, don{"'"}t they?
              </span>
            </div>
          </BlackBox>
        </div>

        <Spacer />

        <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20">
          <div className="font-js-math text-center">
            <h2 className="text-[4ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Questions
            </h2>
          </div>

          <Questions
            items={[
              {
                id: uuidv4(),
                q: "What's Your Rate?",
                a: '$75/hr',
                href: '/contact',
              },
              {
                id: uuidv4(),
                q: "$75/hr is alot?",
                a: 'I know.',
                href: '/contact',
              },
              {
                id: uuidv4(),
                q: 'Can I see your work?',
                a: 'Yes. Click or Tap Me.',
                href: '/portfolio',
              },
              {
                id: uuidv4(),
                q: 'How do you handle clients?',
                a: 'With empathy and exactness.',
              },
              {
                id: uuidv4(),
                q: 'Do you do Hosting?',
                a: 'Yes.',
              },
              {
                id: uuidv4(),
                q: "What's your vibe?",
                a: 'Aries/Libra. 4W8. ESFP.',
              },
              {
                id: uuidv4(),
                q: 'Can we Schedule a Call?',
                a: 'Schedule that here.',
                href: '/contact',
              },
              {
                id: uuidv4(),
                q: 'What about maintenance?',
                a: "I build like I'm going to maintain.",
              },
              {
                id: uuidv4(),
                q: 'How Many Revisions?',
                a: "99 issues but a revision ain't 1.",
              },
              {
                id: uuidv4(),
                q: 'How do we get started?',
                a: 'Call, Email, or Text.',
                href: '/contact',
              },
              {
                id: uuidv4(),
                q: 'How does payment work?',
                a: 'Bank Accounts and Cards.',
                href: '/contact',
              },
              {
                id: uuidv4(),
                q: 'How about content?',
                a: 'I know awesome human writers.',
              },
              {
                id: uuidv4(),
                q: 'Are you an artist?',
                a: 'Yep. Click or tap here for my art.',
                href:'https://linktr.ee/jakobcartersmith'
              }
            ]}
          />
        </WhiteBlackBorderBox>
      </BelowTheFold>
    </>
  );
}
