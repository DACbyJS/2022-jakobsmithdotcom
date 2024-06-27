// Next
import Head from 'next/head';

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

export default function WebsiteDesigners() {
  const { theme, changeTheme } = useTheme();
  changeTheme('red');

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
              Why Designers?
            </h2>
          </div>
        </WhiteBox>

        <div className="flex flex-col md:flex-row justify-between space-x-0 space-y-12 md:space-x-10 md:space-y-0 mx-auto max-w-[1300px]">
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
                <strong className="text-js-red font-light">work</strong> to get
                to quality.
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
                their resources with their client{"'"}s budget and Their Profit.
              </span>
            </div>
          </WhiteBlackBorderBox>

          <BlackBox className="max-w-[700px]">
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
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
                Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-red font-light">
                  Communication and Feelings
                </strong>{' '}
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-red font-light">
                  early and clear revisions
                </strong>{' '}
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-red font-light">
                  Project management and client satisfaction
                </strong>{' '}
                Details matter, don{"'"}t they? Details matter, don{"'"}t they?
              </span>
              <span className="font-overpass uppercase text-[2ch] sm:text-[2.5ch] lg:text-[3ch] 2xl:text-[3.5ch] text-left w-auto max-w-[475px]">
                <strong className="text-js-red font-light">Alignment</strong>{' '}
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
                id: 1,
                q: "What's Your Rate?",
                a: '$75/hr',
                href: '/contact',
              },
              {
                id: 2,
                q: 'Can I see your work?',
                a: 'Yes. Click or Tap Me.',
                href: '/portfolio',
              },
              {
                id: 3,
                q: 'How do you handle clients?',
                a: 'With empathy and exactness.',
              },
              {
                id: 4,
                q: 'Do you do Hosting?',
                a: 'Yes.',
              },
              {
                id: 5,
                q: "What's your vibe?",
                a: 'Aries/Libra. 4W8. ESFP.',
              },
              {
                id: 6,
                q: 'Can we Schedule a Call?',
                a: 'Schedule that here.',
                href: '/contact',
              },
              {
                id: 7,
                q: 'What about maintenance?',
                a: "I build like I'm going to maintain.",
              },
              {
                id: 8,
                q: 'How Many Revisions?',
                a: "99 issues but a revision ain't 1.",
              },
              {
                id: 9,
                q: 'How do we get started?',
                a: 'Call, Email, or Text.',
                href: '/contact',
              },
              {
                id: 10,
                q: 'How does payment work?',
                a: 'Bank Accounts and Cards.',
                href: '/contact',
              },
              {
                id: 11,
                q: 'How about content?',
                a: 'I know awesome human writers.',
              },
              {
                id: 12,
                q: 'Can you build anything?',
                a: "No, but I'm systematically eclectic.",
              },
            ]}
          />
        </WhiteBlackBorderBox>
      </BelowTheFold>
    </>
  );
}
