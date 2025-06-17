// libs
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

// components
import { useTheme } from "../lib/contexts/ThemeProvider";

// constants
import { pageData } from "../lib/constants/pageData";

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
        id: uuidv4(),
        html: (
          <>
            Someone who <StrongText>answers emails</StrongText> and{" "}
            <StrongText>hops on calls</StrongText> with all the{" "}
            <StrongText>stakeholders</StrongText>.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Their websites <StrongText>crafted</StrongText> to keep their{" "}
            <StrongText>costs low</StrongText> and their{" "}
            <StrongText>reach wide</StrongText>.
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
            To <StrongText>Communicate</StrongText> about{" "}
            <StrongText>change</StrongText> and <StrongText>praxis</StrongText>{" "}
            like it is a gift, not a business opportunity.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            Someone who can add the <StrongText>missing pieces</StrongText>{" "}
            without having to spell it out for them.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            To <StrongText>align</StrongText> their resources with their{" "}
            <StrongText>budget</StrongText> and <StrongText>mission</StrongText>
            .
          </>
        ),
      },
      {
        id: uuidv4(),
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
          <>
            clear return on investment made for your board and low-cost open
            source code.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            an inspiring <StrongText>community foundation</StrongText> that
            &quot;magically&quot; performs for years.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            energy and time because I believe that radical love and acceptance
            is our only chance.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            projects that get finished to spec and seem to get better over night
            without extra money.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            A just-right solution based on your current needs, not my toolset or
            experience.
          </>
        ),
      },
      {
        id: uuidv4(),
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
      id: uuidv4(),
      text: <>Turn a document and some images into a custom website</>,
    },
    {
      id: uuidv4(),
      text: (
        <>
          Add a complex feature <br /> into a half-finished website
        </>
      ),
    },
    {
      id: uuidv4(),
      text: (
        <>Fixing a website that&apos;s broken for 6 years by 8 prior editors</>
      ),
    },
    {
      id: uuidv4(),
      text: (
        <>
          Silencing <br /> 2-year WordPress bugs in 20 minutes.
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
      text: (
        <>
          Making you look awesome <br /> in front of your people
        </>
      ),
    },
    {
      id: uuidv4(),
      text: <>Showing the return on investment to a critical Board</>,
    },
  ],
  questionsTitle: <>Questions I Get Asked</>,
  questionsContent: [
    {
      id: uuidv4(),
      q: "What's Your Rate?",
      a: "Monthly Value Pricing.",
      href: pageData[4].data.href,
    },
    {
      id: uuidv4(),
      q: "What's monthly value pricing?",
      a: "See our Pricing Page.",
      href: pageData[4].data.href,
    },
{
      id: uuidv4(),
      q: "...no money in non-profits?",
      a: "I know, but I like existence too.",
      href: pageData[4].data.href,
    },
    {
      id: uuidv4(),
      q: "Can I see your work?",
      a: "Yes.",
      href: pageData[6].data.href,
    },
    {
      id: uuidv4(),
      q: "How do you handle clients?",
      a: "Learn a little about me.",
      href: pageData[7].data.href,
    },
    {
      id: uuidv4(),
      q: "Do you do Hosting?",
      a: "Yes. See my Foundation Service.",
      href: pageData[5].data.href,
    },
    {
      id: uuidv4(),
      q: "What's your vibe?",
      a: "Silly but thoughtful.",
      href: pageData[7].data.href,
    },
    {
      id: uuidv4(),
      q: "What about SEO?",
      a: "Yes, see my Simple SEO service.",
      href: pageData[5].data.href,
    },
    {
      id: uuidv4(),
      q: "What about maintenance?",
      a: "See my Foundation Service.",
      href: pageData[5].data.href,
    },
    {
      id: uuidv4(),
      q: "How do we get started?",
      a: "Call, Email, or Text.",
      href: pageData[8].data.href,
    },
    {
      id: uuidv4(),
      q: "How does payment work?",
      a: "Monthly invoices via Stripe.",
    },
    {
      id: uuidv4(),
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