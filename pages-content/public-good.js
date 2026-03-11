// libs
import classNames from "classnames";

// components
import { useTheme } from "../lib/contexts/ThemeProvider";

// constants
import { pageData } from "../lib/constants/pageData";

const createStableIdFactory = (prefix) => {
  let idCounter = 0;
  return () => `${prefix}-${++idCounter}`;
};

const nextStableId = createStableIdFactory("pg");

// Reusable StrongText with light font component
const StrongText = ({ children }) => {
  const { theme } = useTheme();
  const textColor = `text-js-${theme}`;

  return (
    <strong className={classNames("font-light", textColor)}>{children}</strong>
  );
};

export const pgPageContent = {
  muxWords: ["Listen.", "Budget.", "Build.", "Change."],
  pageTitle: "Website Management for Public Good",
  twoColumnLineItemsContent: {
    left: [
      {
        id: nextStableId(),
        html: (
          <>
            Someone who <StrongText>answers emails</StrongText> and{" "}
            <StrongText>hops on calls</StrongText> with all the{" "}
            <StrongText>stakeholders</StrongText>.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Their websites <StrongText>crafted</StrongText> to keep their{" "}
            <StrongText>costs low</StrongText> and their{" "}
            <StrongText>reach wide</StrongText>.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Someone who can <StrongText>handle</StrongText> hosting,
            maintenance, automation and SEO.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            To <StrongText>Communicate</StrongText> about{" "}
            <StrongText>change</StrongText> and <StrongText>praxis</StrongText>{" "}
            like it is a gift, not a business opportunity.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Someone who can add the <StrongText>missing pieces</StrongText>{" "}
            without having to spell it out for them.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            To <StrongText>align</StrongText> their resources with their{" "}
            <StrongText>budget</StrongText> and <StrongText>mission</StrongText>
            .
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Someone who can <StrongText>work with a team</StrongText> in
            multiple time-zones and with multiple talents.
          </>
        ),
      },
    ],
    right: [
      {
        id: nextStableId(),
        html: (
          <>
            everyone a feeling of being understood using empathy and automation.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            clear return on investment made for your board and low-cost open
            source code.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            an inspiring <StrongText>community foundation</StrongText> that
            &quot;magically&quot; performs for years.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            energy and time because I believe that radical love and acceptance
            is our only chance.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            projects that get finished to spec and seem to get better over night
            without extra money.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            A just-right solution based on your current needs, not my toolset or
            experience.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Confirmation, education, clarity, translation, and most of all,
            honesty and respect.
          </>
        ),
      },
    ],
  },

  gridOfBoxesTitle: (
    <>
      Things I&apos;ve Done for Non-Profits <br />
      more than 10 Times
    </>
  ),
  gridOfBoxesContent: [
    {
      id: nextStableId(),
      text: <>Turn a document and some images into a custom website</>,
    },
    {
      id: nextStableId(),
      text: (
        <>
          Add a complex feature <br /> into a half-finished website
        </>
      ),
    },
    {
      id: nextStableId(),
      text: (
        <>Fixing a website that&apos;s broken for 6 years by 8 prior editors</>
      ),
    },
    {
      id: nextStableId(),
      text: (
        <>
          Silencing <br /> 2-year WordPress bugs in 20 minutes.
        </>
      ),
    },
    {
      id: nextStableId(),
      text: <>On-Page and Technical SEO & Content Optimization</>,
    },
    {
      id: nextStableId(),
      text: <>Get PageSpeed Insights to 90+ or load time under 1 second</>,
    },
    {
      id: nextStableId(),
      text: <>Fully integrate Google&apos;s Labyrinth of Tools</>,
    },
    {
      id: nextStableId(),
      text: <>Keeping the site running smoothly and securely</>,
    },
    {
      id: nextStableId(),
      text: <>Updating a website&apos;s software monthly with testing</>,
    },
    {
      id: nextStableId(),
      text: <>Building or automating donation and calendar pages.</>,
    },
    {
      id: nextStableId(),
      special: true,
      text: (
        <>
          Making you look awesome <br /> in front of your people
        </>
      ),
    },
    {
      id: nextStableId(),
      text: <>Showing the return on investment to a critical Board</>,
    },
  ],
  questionsTitle: <>Questions I Get Asked</>,
  questionsContent: [
    {
      id: nextStableId(),
      q: "What's Your Rate?",
      a: "Monthly Value Pricing.",
      href: pageData[4].data.href,
    },
    {
      id: nextStableId(),
      q: "What's monthly value pricing?",
      a: "See our Pricing Page.",
      href: pageData[4].data.href,
    },
{
      id: nextStableId(),
      q: "...no money in non-profits?",
      a: "I know, but I like existence too.",
      href: pageData[7].data.href,
    },
    {
      id: nextStableId(),
      q: "Can I see your work?",
      a: "Yes.",
      href: pageData[6].data.href,
    },
    {
      id: nextStableId(),
      q: "How do you handle clients?",
      a: "Learn a little about me.",
      href: pageData[7].data.href,
    },
    {
      id: nextStableId(),
      q: "Do you do Hosting?",
      a: "Yes. See my Foundation Service.",
      href: pageData[5].data.href,
    },
    {
      id: nextStableId(),
      q: "What's your vibe?",
      a: "Silly but thoughtful.",
      href: pageData[7].data.href,
    },
    {
      id: nextStableId(),
      q: "What about SEO?",
      a: "Yes, see my Simple SEO service.",
      href: pageData[5].data.href,
    },
    {
      id: nextStableId(),
      q: "What about maintenance?",
      a: "See my Foundation Service.",
      href: pageData[5].data.href,
    },
    {
      id: nextStableId(),
      q: "How do we get started?",
      a: "Call, Email, or Text.",
      href: pageData[8].data.href,
    },
    {
      id: nextStableId(),
      q: "How does payment work?",
      a: "Monthly invoices via Stripe.",
    },
    {
      id: nextStableId(),
      q: "Can you build an app?",
      a: "Not anymore, I build websites.",
      href: pageData[6].data.href,
    },
  ],
  questionsBadge: {
    linkTo: pageData[6].data.href,
    linkText: "See Portfolio",
  },
};