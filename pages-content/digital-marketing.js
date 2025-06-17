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
    <strong
      className={classNames(
        "font-light bg-js-black pt-[3px] px-[6px] pb-0 leading-0 text-center",
        textColor
      )}
    >
      {children}
    </strong>
  );
};

export const dmPageContent = {
  muxWords: ["Analyze.", "Tweak.", "Deliver.", "Repeat."],
  pageTitle: "Website Management for Digital Marketers",
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
            Their websites <StrongText>analyzed</StrongText> into performing
            content using data and experience.
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
            like it is a gift, not an obligation.
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
        html: (
          <>
            alot of time and energy to keep up with the market and trust
            industry leaders.
          </>
        ),
      },
      {
        id: uuidv4(),
        html: (
          <>
            websites that get finished to spec and on-time but get better the
            longer I manage them.
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
            Confirmation, education, clarity, translation, and most of all
            honesty and respect.
          </>
        ),
      },
    ],
  },

  gridOfBoxesTitle: (
    <>
      Things I&apos;ve Done for Digital Marketers
      <br />
      more than 10 Times
    </>
  ),
  gridOfBoxesContent: [
    {
      id: uuidv4(),
      text: <>Updating a website&apos;s software monthly with testing</>,
    },
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
      text: <>Building or automating funnels, leads and landers</>,
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
    {
      id: uuidv4(),
      text: <>Showing the return on investment with reports</>,
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
