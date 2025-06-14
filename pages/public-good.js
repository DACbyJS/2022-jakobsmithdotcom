// React
import { useEffect } from "react";

// Next
import Head from "next/head";

// Libs
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

// Context
import { useTheme } from "../lib/contexts/ThemeProvider";

// Components
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import Spacer from "../components/layout/Spacer";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import TransBox from "../components/layout/TransBox";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import Questions from "../components/belowthefold/Questions";
import TwoColumnLineItems from "../components/belowthefold/TwoColumnLineItems";
import GridOfBoxes from "../components/belowthefold/GridOfBoxes";

export default function WebsiteDesigners() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("blue");
  }, [setTheme]);
  const textColor = `text-js-${theme}`;

  // Reusable StrongText with light font component
  const StrongText = ({ children }) => (
    <strong className={classNames("font-light text-center", textColor)}>{children}</strong>
  );

  // Content
  const twoColumnLineItemsContent = {
    left: [
      {
        id: uuidv4(),
        html: (
          <>
            Someone who <StrongText>answers emails</StrongText> and <StrongText>hops on calls</StrongText> with all the <StrongText>stakeholders</StrongText>.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Their websites <StrongText>crafted</StrongText> to keep their <StrongText>costs low</StrongText> and their <StrongText>reach wide</StrongText>.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Someone who can <StrongText>handle</StrongText> hosting,
            maintenance, automation and SEO.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            To <StrongText>Communicate</StrongText> about <StrongText>change</StrongText> and <StrongText>praxis</StrongText> like it is a gift not a business opportunity.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Someone who can add the <StrongText>missing pieces</StrongText> without
            having to spell it out for them.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            To <StrongText>align</StrongText> their resources with their <StrongText>budget</StrongText> and <StrongText>mission</StrongText>.
          </>
        ),
      },
{
        id: uuidv4(),
        html: (
          <>
            Someone who can <StrongText>work with a team</StrongText> in multiple time-zones and with multiple talents.
          </>
        ),
      },
    ],
    right: [
      {
        id: uuidv4(),
        html: (
          <>
            everyone a feeling of being understood using empathy and automation.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>clear return on investment made for your board and low-cost open source code.</>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            an inspiring <StrongText>community foundation</StrongText> that &quot;magically&quot; performs for years.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: <>energy and time because I believe that radical love and acceptance is our only chance.</>,
      },
      {
        id: uuidv4(),
        html: (
          <>
            projects that get finished to spec and seem to get better over night without extra money.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            From page builders to white-glove coding, I build the
            just-right solution.
          </>
        ),
      },
{
        id: uuidv4(),
        html: (
          <>
            Confirmation, education, clarity, translation, and most of all, honesty and respect.
          </>
        ),
      },
    ],
  };

  // Grid of Boxes Content
  const gridOfBoxesContent = [
    {
      id: uuidv4(),
      text: <>Turn a document and some images into a custom website</>,
    },
    {
      id: uuidv4(),
      text: <>Add a complex feature <br/> into a half-finished website</>,
    },
    {
      id: uuidv4(),
      text: <>Fixing a website that&apos;s broken for 6 years by 8 prior editors</>,
    },
    {
      id: uuidv4(),
      text: (
        <>
          Silencing <br/> 2-year WordPress bugs in 20 minutes.
        </>
      ),
    },
    {
      id: uuidv4(),
      text: <>On-Page and Technical SEO & Content Optimization</>,
    },
    {
      id: uuidv4(),
      text: <>Get PageSpeed Insights to 90+ or load time under 1 second</>,
    },
    {
      id: uuidv4(),
      text: <>Fully integrate Google&apos;s Labyrinth of Tools</>,
    },
    {
      id: uuidv4(),
      text: <>Keeping the site running smoothly and securely</>,
    },
    {
      id: uuidv4(),
      text: <>Updating a website&apos;s software monthly with testing</>,
    },
    {
      id: uuidv4(),
      text: <>Building or automating donation and calendar pages.</>,
    },
    {
      id: uuidv4(),
      special: true,
      text: <>Making you look awesome <br/> in front of your people</>,
    },
    {
      id: uuidv4(),
      text: <>Showing the return on investment to a critical Board</>,
    },
  ];

  // Questions Content
  const questionsContent = [
    {
      id: uuidv4(),
      q: "What's Your Rate?",
      a: "Monthly and/or Value Pricing.",
      href: "/pricing",
    },
    {
      id: uuidv4(),
      q: "No really, what's your rate?",
      a: "See our Pricing Page.",
      href: "/pricing",
    },
    {
      id: uuidv4(),
      q: "Can I see your work?",
      a: "Yes.",
      href: "/portfolio",
    },
    {
      id: uuidv4(),
      q: "How do you handle clients?",
      a: "See How We handle clients.",
      href: "/how-we-handle-clients",
    },
    {
      id: uuidv4(),
      q: "Do you do Hosting?",
      a: "Yes.",
      href: "/maintenance",
    },
    {
      id: uuidv4(),
      q: "What's your vibe?",
      a: "Silly but thoughtful.",
      href: "/about",
    },
    {
      id: uuidv4(),
      q: "What about maintenance?",
      a: "See our maintenance page.",
      href: "/maintenance",
    },
    {
      id: uuidv4(),
      q: "How do we get started?",
      a: "Call, Email, or Text.",
      href: "/contact",
    },
    {
      id: uuidv4(),
      q: "How does payment work?",
      a: "Monthly invoices via FreshBooks.",
    },
    {
      id: uuidv4(),
      q: "Can you build an app?",
      a: "Not anymore, I build websites.",
      href: "/portfolio",
    },
  ];

  return (
    <>
      <Head>
        <title>Web Development for Public Good | You Change, I Deliver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I translate the technicalities non-profits need handled into SEO, builds, hosting or maintenance."
        />
      </Head>

      <MuxHero
        playbackId="mkXSS7VwMGrautiPEN8dDYWtQxa3hdbZCvByqrXzz68"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={["Listen.", "Budget.", "Build.", "Change."]}
        suppressHydrationWarning
      />

      <BelowTheFold>

        <BigBlueCircle svgProps={{ className: "scale-[100%] -translate-x-[200px] translate-y-[450px]" }} />

        <Spacer />

        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h2 className="text-[5ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Web Development for Public Good
            </h2>
          </div>
        </TransBox>

        <Spacer />

        <TwoColumnLineItems items={twoColumnLineItemsContent} />

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20 z-10 pt-10 sm:pt-16">
            <div className="font-js-math text-center">
              <h2 className="text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch] px-12 pb-1 sm:pb-12">
                Things I&apos;ve Done for Non-Profits
                <br /> more than 10 Times
              </h2>
            </div>

            <GridOfBoxes items={gridOfBoxesContent} />
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <BigBlueCircle
          svgProps={{ className: "scale-[100%] translate-x-[180px] translate-y-[350px]" }}
        />

        <Spacer />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[1300px] py-10 sm:py-16 lg:-mt-20 z-10">
            <div className="font-js-math text-center">
              <h2 className="text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch] px-12 pb-1 sm:pb-12">
                Frequently Asked Quandries
              </h2>
            </div>

            <Questions items={questionsContent} />
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <Spacer />
      </BelowTheFold>
    </>
  );
}
