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

export const wdPageContent = {
  muxWords: ["Listen.", "Iterate.", "Translate.", "Deliver."],
  pageTitle: "Website Management for Website Designers",
  twoColumnLineItemsContent: {
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
          <>
            automatic <br /> responsive design, <br /> UX, and usability.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            a return on investment <br /> that &quot;magically&quot; works for
            years.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            alot of care and <br /> attention to looks <br /> and feels.
          </>
        ),
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
            the just-right solution, <br /> even if it&apos;s a page-builder or
            custom code.
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
