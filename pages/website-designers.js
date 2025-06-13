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
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import Spacer from "../components/layout/Spacer";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import TransBox from "../components/layout/TransBox";
import BlackBox from "../components/layout/BlackBox";
import BigRedTriangle from "../components/svg/BigRedTriangle";
import Questions from "../components/belowthefold/Questions";
import TwoColumnLineItems from "../components/belowthefold/TwoColumnLineItems";

export default function WebsiteDesigners() {
  // Theme
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("red");
  }, [setTheme]);
  const textColor = `text-js-${theme}`;

  // Reusable StrongText with light font component
  const StrongText = ({ children }) => (
    <strong className={classNames("font-light", textColor)}>{children}</strong>
  );

  const twoColumnLineItemsContent = {
    left: [
      {
        id: uuidv4(),
        html: (
          <>
            Someone who <StrongText>answers emails</StrongText> and{" "}
            <StrongText>hops on calls</StrongText> with them or their clients.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Their Mockups <StrongText>translated</StrongText> Into a Website
            with Care and Attention.
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
            To <StrongText>Communicate</StrongText> about design and feelings
            like their important.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Someone who can add the <StrongText>animation</StrongText> without
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
          <>automatic responsive design, front-end UX, and admin usability.</>
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
        html: <>alot of care about looks and feels.</>,
      },
      {
        id: uuidv4(),
        html: (
          <>
            Websites that move when they need to and don&apos;t when they
            don&apos;t.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            From page builders to white-glove websites, I can build you the
            just-right solution.
          </>
        ),
      },
    ],
  };

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
        <title>Website Designers | You Design, I Deliver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I translate the technicalities Web Designers need handled in client meetings, builds, hosting and maintenance."
        />
      </Head>

      <MuxHero
        playbackId="jnDZcW3XgvTAs1JP7XT4LvOUw02a00Il4Djkwqh00i762g"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={["Consiliate.", "Iterate.", "Translate.", "Deliver."]}
        suppressHydrationWarning
      />
      <BelowTheFold>
        <BigRedTriangle />

        <Spacer />
        <TransBox className="mx-auto z-20">
          <div className="font-js-math text-center">
            <h2 className="text-[5ch] sm:text-[6ch] lg:text-[8ch] 2xl:text-[11ch]">
              Web Development for Web Designers
            </h2>
          </div>
        </TransBox>

        <Spacer />

        <TwoColumnLineItems items={twoColumnLineItemsContent} />

        <Spacer />
        <BigRedTriangle className={"rotate-90"} />
        <WhiteBlackBorderBox className="mx-auto max-w-[1300px] lg:-mt-20 z-10 pt-16">
          <div className="font-js-math text-center">
            <h2 className="text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch] px-12 pb-12">
              Things I&apos;ve Done for Web Designers<br/> more than 10 Times
            </h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 gap-10 text-center text-[1ch] sm:text-[2ch] lg:text-[3ch] 2xl:text-[4ch]">
              <BlackBox className="p-12 text-js-white">
                Turn a mockup or wireframe into a custom website
              </BlackBox>
              <WhiteBlackBorderBox className="p-12">
                Add a feature into a fully or half-finished website
              </WhiteBlackBorderBox>
              <BlackBox className="p-12 text-js-white">
                Fix a website that&apos;s broken or catch it before it breaks
              </BlackBox>
              <WhiteBlackBorderBox className="p-12">
                Make the <br /> &quot;back-end&quot;
                <br /> of your website easier to use
              </WhiteBlackBorderBox>
              <BlackBox className="p-12 text-js-white">
                On-Page and Technical SEO & Content Optimization
              </BlackBox>
              <WhiteBlackBorderBox className="p-12">
                Get PageSpeed Insights to 90+ or load time under 1 second
              </WhiteBlackBorderBox>
              <BlackBox className="p-12 text-js-white">
                Fully integrate Google&apos;s Labyrinth of Tools
              </BlackBox>
              <WhiteBlackBorderBox className="p-12">
                Keeping the site running smoothly and securely
              </WhiteBlackBorderBox>
              <BlackBox className="p-12 text-js-white">
                <StrongText>
                  Making you look awesome in front of your client
                </StrongText>
              </BlackBox>
            </section>
          </div>
        </WhiteBlackBorderBox>

        <Spacer />

        <WhiteBlackBorderBox className="mx-auto max-w-[1300px] py-16 lg:-mt-20 z-10">
          <div className="font-js-math text-center">
            <h2 className="text-[3.25ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[6.5ch] px-12 pb-12">
              Frequently Asked Quandries
            </h2>
          </div>

          <Questions items={questionsContent} />
          
        </WhiteBlackBorderBox>
        <BigRedTriangle className={"rotate-45"} />
        <Spacer />
      </BelowTheFold>
    </>
  );
}
