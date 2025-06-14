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
import BigYellowSquare from "../components/svg/BigYellowSquare";
import Questions from "../components/belowthefold/Questions";
import TwoColumnLineItems from "../components/belowthefold/TwoColumnLineItems";
import GridOfBoxes from "../components/belowthefold/GridOfBoxes";

export default function WebsiteDesigners() {
  // Theme
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("yellow");
  }, [setTheme]);
  const textColor = `text-js-${theme}`;

  // Reusable StrongText with light font component
  const StrongText = ({ children }) => (
    <strong className={classNames("font-light bg-js-black pt-[3px] px-[6px] pb-0 leading-0 text-center", textColor)}>{children}</strong>
  );

  // Content
  const twoColumnLineItemsContent = {
    left: [
      {
        id: uuidv4(),
        html: (
          <>
            Someone who <StrongText>answers emails</StrongText> and <StrongText>hops on calls</StrongText> with them or their clients.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Their websites <StrongText>analyzed</StrongText> into performing content
            using data and experience.
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
            To <StrongText>Communicate</StrongText> about marketing and trends
            like it is a gift not an obligation.
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
            To <StrongText>align</StrongText> their resources with their
            client&apos;s <StrongText>budget</StrongText> and your{" "}
            <StrongText>Margin</StrongText>.
          </>
        ),
      },
{
        id: uuidv4(),
        html: (
          <>
            Someone who can <StrongText>work with a team</StrongText>  in multiple time-zones and with multiple talents.
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
          <>automatic on-page seo, content-driven design and optimization.</>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            a return on investment that &quot;magically&quot; works for years.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: <>alot of time and energy to keep up with the market and trust industry leaders.</>,
      },
      {
        id: uuidv4(),
        html: (
          <>
            websites that get finished to spec and seem to get better over night.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            From page builders to white-glove coding, I can build you the
            just-right solution.
          </>
        ),
      },
{
        id: uuidv4(),
        html: (
          <>
            Confirmation, education, clarity, translation, and most of all honesty and respect.
          </>
        ),
      },
    ],
  };

  // Grid of Boxes Content
  const gridOfBoxesContent = [
    {
      id: uuidv4(),
      text: <>Turn a mockup or wireframe into a custom website</>,
    },
    {
      id: uuidv4(),
      text: <>Add a feature into a fully or half-finished website</>,
    },
    {
      id: uuidv4(),
      text: <>Fix a website that&apos;s broken or catch it before it breaks</>,
    },
    {
      id: uuidv4(),
      text: (
        <>
          Make the <br /> &quot;back-end&quot;
          <br /> of your website easier to use
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
      text: <>Building or automating funnels, leads and landers</>,
    },
    {
      id: uuidv4(),
      special: true,
      text: <>Making you look awesome <br/> in front of your clients</>,
    },
    {
      id: uuidv4(),
      text: <>Showing the return on investment with reports</>,
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
      a: "No. I build websites.",
      href: "/portfolio",
    },
  ];

  return (
    <>
      <Head>
        <title>Web Development for Digital Marketing | You Market, I Deliver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I translate the technicalities digital marketers need handled into SEO, builds, hosting or maintenance."
        />
      </Head>

      <MuxHero
        playbackId="SZsMQdxdToUden02bI4Tp01nIWuCmQU6l4wqgMTQvvePc"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={["Analyze.", "Tweak.", "Deliver.", "Repeat."]}
        suppressHydrationWarning
      />

      <BelowTheFold>
        <BigYellowSquare svgProps={{ className: "scale-[120%] rotate-45 -translate-x-[180px] translate-y-[200px]" }} />

        <Spacer />

        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h2 className="text-[5ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Web Development for Digital Marketers
            </h2>
          </div>
        </TransBox>

        <Spacer />

        <TwoColumnLineItems items={twoColumnLineItemsContent} />

        <Spacer />

        <BigYellowSquare
          svgProps={{ className: "scale-[125%] rotate-[81deg]" }}
        />

        <NextIntersectionObserver
          thresholdValue={0.25}
          topIn="fade-down-animate"
          classes="fade-down-init"
        >
          <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20 z-10 pt-10 sm:pt-16">
            <div className="font-js-math text-center">
              <h2 className="text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch] px-12 pb-1 sm:pb-12">
                Things I&apos;ve Done for Digital Marketers
                <br /> more than 10 Times
              </h2>
            </div>

            <GridOfBoxes items={gridOfBoxesContent} />
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>

        <BigYellowSquare
          svgProps={{ className: "scale-[110%] rotate-[121deg]" }}
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
