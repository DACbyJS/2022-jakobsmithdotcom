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
import WhiteBox from '../components/layout/WhiteBox';
import BlackBox from '../components/layout/BlackBox';
import BigRedTriangle from '../components/svg/BigRedTriangle';
import Questions from '../components/belowthefold/Questions';
import classNames from 'classnames';
import { useEffect } from 'react';
import NextIntersectionObserver from '../components/layout/NextIntersectionObserver';

export default function WebsiteDesigners() {
  // Theme
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme('red');
  }, [setTheme]);

  return (
    <>
      <Head>
        <title>Website Designers | You design, I Deliver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MuxHero
        playbackId="xEmHNgK00ZD5hKiQRqmqpr3K5elRCMeT02tEDENJXzgSs"
        metadata={{
          video_id: 'multi-color-liquid-looping-bg',
          video_title: 'Multi-color Liquid Looping Video Background',
        }}
        words={['Consiliate.', 'Iterate.', 'Translate.', 'Deliver.']}
      />
      <BelowTheFold>
        <BigRedTriangle />
        <WhiteBox className="mx-auto">
          <div className="font-js-math text-center">
            <h2 className="text-[4ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch] -mt-6 lg:-mt-10 mb-10 xl:-mt-20 lg:mb-20">
              Why Web Designers?
            </h2>
          </div>
        </WhiteBox>

        <div className="flex flex-col md:flex-row justify-between space-x-0 space-y-12 md:space-x-10 md:space-y-0 mx-auto max-w-[1300px]">
          <NextIntersectionObserver
            topIn="fade-down-animate"
            classes="fade-down-init relative z-20 w-full max-w-[700px]"
          >
            <WhiteBlackBorderBox className="max-w-[700px]">
              <h2 className="font-js-math text-center text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch]">
                They Need:
              </h2>
              <div className="p-0 flex flex-col justify-center items-center my-10 mx-10 space-y-12 font-light">
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Their Mockups translated
                  </strong>{' '}
                  Into a Website with Care and Attention.
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Someone who can handle
                  </strong>{' '}
                  Domains, Servers, Migrations,{' '}
                  <strong className="text-js-red font-light">Data</strong>, SEO
                  and Accessibility.
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    To Communicate
                  </strong>{' '}
                  about design, aesthetic and feeling like its important.
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Someone Willing to
                  </strong>{' '}
                  do the quantity of{' '}
                  <strong className="text-js-red font-light">work</strong> to
                  get to quality.
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Someone who can help
                  </strong>{' '}
                  project manage and communicate{' '}
                  <strong className="text-js-red font-light">
                    with the client
                  </strong>
                  .
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">To align</strong>{' '}
                  their resources with their client{"'"}s budget and Their
                  Profit.
                </span>
              </div>
            </WhiteBlackBorderBox>
          </NextIntersectionObserver>

          <NextIntersectionObserver
            topIn="fade-right-animate"
            classes="fade-right-init animate-delay-1s relative z-10 w-full max-w-[700px]"
          >
            <BlackBox className="max-w-[700px] h-full py-6 lg:py-10">
              <h2 className="text-js-white font-js-math text-center text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch]">
                I Give:
              </h2>
              <div className="p-0 flex flex-col justify-center items-center my-10 mx-10 space-y-12 font-light">
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Websites that look like the mockups
                  </strong>{' '}
                  Details matter, don{"'"}t they?
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Your design performs
                  </strong>{' '}
                  Details matter, don{"'"}t they? Details matter, don{"'"}t
                  they? Details matter, don{"'"}t they?
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Communication and Feelings
                  </strong>{' '}
                  Details matter, don{"'"}t they? Details matter, don{"'"}t
                  they?
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    early and clear revisions
                  </strong>{' '}
                  Details matter, don{"'"}t they? Details matter, don{"'"}t
                  they?
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">
                    Project management and client satisfaction
                  </strong>{' '}
                  Details matter, don{"'"}t they? Details matter, don{"'"}t
                  they?
                </span>
                <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                  <strong className="text-js-red font-light">Alignment</strong>{' '}
                  Details matter, don{"'"}t they?
                </span>
              </div>
            </BlackBox>
          </NextIntersectionObserver>
        </div>

        <Spacer />

        <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20">
          <div className="font-js-math text-center">
            <h2 className="text-[4ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Services
            </h2>

            <section className="grid grid-cols-2 p-10 gap-10">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg
                  className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                </svg>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Need a help in Claim?
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Go to this step by step guideline process on how to certify
                  for your weekly benefits:
                </p>
                <a
                  href="#"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  See our guideline
                </a>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg
                  className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                </svg>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Need a help in Claim?
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Go to this step by step guideline process on how to certify
                  for your weekly benefits:
                </p>
                <a
                  href="#"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  See our guideline
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </WhiteBlackBorderBox>

        <Spacer />

        <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20">
          <div className="font-js-math text-center">
            <h2 className="text-[4ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              FAQs
            </h2>
          </div>

          <Questions
            items={[
              {
                id: uuidv4(),
                q: "What's Your Rate?",
                a: 'Per project or $75/hr.',
              },
              {
                id: uuidv4(),
                q: '$75/hr is alot?',
                a: 'I know.',
              },
              {
                id: uuidv4(),
                q: '$75/hr is cheap?',
                a: 'I know.',
              },
              {
                id: uuidv4(),
                q: 'Can I see your work?',
                a: 'Yes.',
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
                href: '/maintenance',
              },
              {
                id: uuidv4(),
                q: "What's your vibe?",
                a: 'Liminal, silly and thoughtful.',
              },
              {
                id: uuidv4(),
                q: 'What about maintenance?',
                a: 'See our maintenance service.',
                href: '/maintenance',
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
                a: 'ACH or Credit Card via Stripe.',
              },
              {
                id: uuidv4(),
                q: 'How about content?',
                a: 'I know awesome human writers.',
              },
              {
                id: uuidv4(),
                q: 'Are you an artist?',
                a: 'Yep.',
                href: 'https://linktr.ee/jakobcartersmith',
              },
            ]}
          />
        </WhiteBlackBorderBox>
      </BelowTheFold>
    </>
  );
}
