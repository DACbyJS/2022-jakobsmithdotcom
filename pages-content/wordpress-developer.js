const createStableIdFactory = (prefix) => {
  let idCounter = 0;
  return () => `${prefix}-${++idCounter}`;
};

const nextStableId = createStableIdFactory("wpd");

export const wordpressDeveloperContent = {
  pagePath: "/website-designers/wordpress-developer/",
  metaTitle: "WordPress Developer for Design Agencies",
  metaDescription:
    "Experienced WordPress developer in Albuquerque specializing in custom theme development, ACF, and Sage/Bedrock for design agencies.",

  serviceItems: [
    "Custom WordPress theme implementation",
    "ACF content modeling and field architecture",
    "Sage or Bedrock project setup",
    "Performance and SEO-aware frontend development",
    "Ongoing technical support for agency retainers",
    "A WordPress experience that a joy to work in",
  ],

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress Developer for Design Agencies",
    serviceType: "Agency WordPress development",
    description:
      "Experienced WordPress developer in Albuquerque specializing in custom theme development, ACF, and Sage/Bedrock for design agencies.",
    provider: {
      "@type": "Person",
      name: "Jakob Smith",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Design agencies",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  templateContent: {
    eyebrow: "For web designers",
    heroTitle: "Need a senior WordPress developer behind your design work?",
    problemSection: {
      title: "Current challenge",
      body:
        "WordPress Development is plagued by plugin bloat, over-engineered themes, missing SEO strategies, and getting stuck in content-editing spirals on the way to go-live.",
    },
    offersSection: {
      title: "Core WordPress development support",
      relatedLabel: "Related pages:",
      relatedLinks: [
        { href: "/website-designers/", text: "Website Designers" },
        { href: "/website-designers/white-label-development/", text: "White-Label Development" },
      ],
    },
    detailSections: [
      {
        id: nextStableId(),
        title: "A WordPress setup that's actually a joy to work in.",
        body: "Built on a modern, rock-solid foundation with 10 years of refinements baked in. The clunky stuff is turned off, the good stuff is dialed up, and everything's organized so cleanly that any future editor can jump right in.",
        classes: "border-js-black bg-js-white text-js-black",
      },
      {
        id: nextStableId(),
        title: "We build what you need. Nothing more, nothing less.",
        body: "One-time project or ongoing support, we plug right into your clients' workflow and the tools they already love. And instead of heavy, expensive plugins that bog your site down, we use lean open-source solutions and clean custom code that actually performs.",
        classes: "border-js-white bg-js-black text-js-white",
      },
    ],
    proofSection: {
      title: "Project references",
      body: "A couple of examples of complex design-heavy WordPress websites I've built with just me, a content editor, a client and a designer",
      links: [
        { id: nextStableId(), label: "Get A Grip", href: "https://getagrip.com" },
        { id: nextStableId(), label: "Visit Angel Fire NM", href: "https://visitangelfirenm.com" },
      ],
    },
    ctaSection: {
      title: "Start a WordPress build conversation",
      body: "See how our other services work or just hit me up to start talking WordPress.",
      links: [
        { id: nextStableId(), href: "/services/foundations/", text: "Foundations" },
        { id: nextStableId(), href: "/services/additions/", text: "Additions" },
        { id: nextStableId(), href: "/contact/", text: "Contact" },
      ],
    },
  },
};
