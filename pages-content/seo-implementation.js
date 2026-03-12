const createStableIdFactory = (prefix) => {
  let idCounter = 0;
  return () => `${prefix}-${++idCounter}`;
};

const nextStableId = createStableIdFactory("seoi");

export const seoImplementationContent = {
  pagePath: "/digital-marketing/seo-implementation/",
  metaTitle: "SEO Implementation for Marketing Agencies",
  metaDescription:
    "Technical and on-page SEO implementation services for marketing agencies. You strategize, I execute.",

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Implementation for Marketing Agencies",
    serviceType: "SEO implementation",
    description:
      "Technical and on-page SEO implementation services for marketing agencies. You strategize, I execute.",
    provider: {
      "@type": "Person",
      name: "Jakob Smith",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Digital marketing agencies",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  hero: {
    eyebrow: "For digital marketers",
    lines: ["You own strategy.", "I own implementation.", "The rankings move."],
    body: "Iterative, data-driven SEO implementation for marketing agencies.",
  },

  sections: {
    processTitle: "Execution model",
    processSteps: [
      { id: nextStableId(), text: "Receive strategy docs, priorities, and reporting goals" },
      { id: nextStableId(), text: "Implement technical and on-page SEO updates" },
      { id: nextStableId(), text: "Validate changes and hand off implementation notes" },
    ],

    buildTitle: "Implementation areas",
    buildOptions: [
      { id: nextStableId(), text: "Metadata" },
      { id: nextStableId(), text: "Internal linking" },
      { id: nextStableId(), text: "Schema" },
      { id: nextStableId(), text: "Technical fixes" },
    ],

    includedTitle: "What is included",
    includedItems: [
      { id: nextStableId(), text: "Priority SEO task execution" },
      { id: nextStableId(), text: "CMS or code-level updates" },
      { id: nextStableId(), text: "Implementation QA and checks" },
      { id: nextStableId(), text: "Clear handoff documentation" },
    ],

    whyMeTitle: "Why this partnership works",
    differentiators: [
      { id: nextStableId(), text: "Agentic-powered fast implementation cycles" },
      { id: nextStableId(), text: "Agency-friendly communication (as in you get updates and insights without asking)" },
      { id: nextStableId(), text: "I adapt across the stacks you might have with 10+ years of production experience" },
      { id: nextStableId(), text: "Reliable delivery consistency and accountability" },
    ],

    testimonialTitle: "",
    testimonialPlaceholder:
      "",
    testimonialPerson: "",

    pricingTitle: "Pricing",
    pricingPrefix: "Check",
    pricingLinkText: "pricing",
    pricingSuffix: "for implementation rates and retainers.",
  },

  cta: {
    title: "Need implementation support this month?",
    body: "Follow these internal links to related campaign and service pages while this content is finalized.",
    links: [
      { id: nextStableId(), href: "/digital-marketing/", text: "Digital Marketing" },
      { id: nextStableId(), href: "/digital-marketing/landing-pages/", text: "Landing Page Development" },
      { id: nextStableId(), href: "/services/simple-seo/", text: "Simple SEO Service" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
