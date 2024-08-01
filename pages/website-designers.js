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
import BigRedTriangle from '../components/svg/BigRedTriangle';
import Questions from '../components/belowthefold/Questions';
import TwoColumnLineItems from '../components/belowthefold/TwoColumnLineItems';

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
        <meta
          name="description"
          content="I translate the technicalities web designers need handled in client meetings, builds, hosting and maintenance."
        />
      </Head>

      <MuxHero
        playbackId="xEmHNgK00ZD5hKiQRqmqpr3K5elRCMeT02tEDENJXzgSs"
        metadata={{
          video_id: 'multi-color-liquid-looping-bg',
          video_title: 'Multi-color Liquid Looping Video Background',
        }}
        words={['Consiliate.', 'Iterate.', 'Translate.', 'Deliver.']}
        suppressHydrationWarning
      />
      <BelowTheFold>
        <BigRedTriangle />

        <Spacer />
        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h2 className="text-[5ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Why Web Designers?
            </h2>
          </div>
        </TransBox>

        <Spacer />

        <TwoColumnLineItems
          items={[
            {
              id: uuidv4(),
              left: 'Their Mockups translated',
              right: 'Into a Website with Care and Attention.',
            },
            {
              id: uuidv4(),
              left: 'Someone who can handle',
              right: 'Domains, Servers, Migrations, Data, SEO and Accessibility.',
            },
            {
              id: uuidv4(),
              left: 'To Communicate',
              right: 'about design, aesthetic and feeling like its important.',
            },
            {
              id: uuidv4(),
              left: 'Someone Willing to',
              right: 'do the quantity of work to get to quality.',
            },
          ]}
        />

        <Spacer />

        <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20">
          <div className="font-js-math text-center">
            <h2 className="text-[4ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Services
            </h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 gap-10">
            <BlackBox className="p-20">
            </BlackBox>
            <WhiteBlackBorderBox className="p-20">
            </WhiteBlackBorderBox>
            <BlackBox className="p-20">
            </BlackBox>
            <WhiteBlackBorderBox className="p-20">
            </WhiteBlackBorderBox>
            <BlackBox className="p-20">
            </BlackBox>
            <WhiteBlackBorderBox className="p-20">
            </WhiteBlackBorderBox>
            <BlackBox className="p-20">
            </BlackBox>
            <WhiteBlackBorderBox className="p-20">
            </WhiteBlackBorderBox>

             
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

        <Spacer />
      </BelowTheFold>
    </>
  );
}
