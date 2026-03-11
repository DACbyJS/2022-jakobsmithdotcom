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

const nextStableId = createStableIdFactory("wd");

// Reusable StrongText with light font component
const StrongText = ({ children }) => {
  const { theme } = useTheme();
  const textColor = `text-js-${theme}`;

  return (
    <strong className={classNames("font-light", textColor)}>{children}</strong>
  );
};

export const wdPageContent = {
  muxWords: ["Listen.", "Iterate.", "Translate.", "Deliver."],
  pageTitle: "Website Management for Website Designers",
  twoColumnLineItemsContent: {
    left: [
      {
        id: nextStableId(),
        html: (
          <>
            Someone who <StrongText>answers emails</StrongText> and{" "}
            <StrongText>hops on calls</StrongText> with them or their clients.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Their Mockups <StrongText>translated</StrongText> Into a Website
            with Care and Attention.
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
            To <StrongText>Communicate</StrongText> about design and feelings
            like their important.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Someone who can add the <StrongText>animation</StrongText> without
            having to spell it out for them.
          </>
        ),
      },
      {
        id: nextStableId(),
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
            automatic <br /> responsive design, <br /> UX, and usability.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            a return on investment <br /> that &quot;magically&quot; works for
            years.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            alot of care and <br /> attention to looks <br /> and feels.
          </>
        ),
      },
      {
        id: nextStableId(),
        html: (
          <>
            Websites that move when they need to and don&apos;t when they
            don&apos;t.
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
    ],
  },

  gridOfBoxesTitle: (
    <>
      Things I&apos;ve Done for Web Designers
      <br />
      more than 10 Times
    </>
  ),
  gridOfBoxesContent: [
    {
      id: nextStableId(),
      text: <>Turn a mockup or wireframe into a custom website</>,
    },
    {
      id: nextStableId(),
      text: <>Add a feature into a fully or half-finished website</>,
    },
    {
      id: nextStableId(),
      text: <>Fix a website that&apos;s broken or catch it before it breaks</>,
    },
    {
      id: nextStableId(),
      text: (
        <>
          Make the <br /> &quot;back-end&quot;
          <br /> of your website easier to use
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
      special: true,
      text: (
        <>
          Making you look awesome <br /> in front of your clients
        </>
      ),
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
