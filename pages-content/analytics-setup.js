import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("ga4");

export const analyticsSetupContent = {
  pagePath: "/digital-marketing/analytics-setup/",
  metaTitle: "Google Analytics & Tag Manager Setup",
  metaDescription:
    "GA4, Tag Manager, Search Console, and conversion tracking setup for marketing agencies and their clients,  so reports match reality.",

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Analytics & Tag Manager Setup",
    serviceType: "Analytics setup and conversion tracking",
    description:
      "GA4, Tag Manager, Search Console, and conversion tracking setup for marketing agencies and their clients.",
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
    lines: [
      "Measure what matters.",
      "Track what converts.",
      "Report with confidence.",
    ],
    body:
      "Reliable analytics setup for agencies that need clean GA4 and Tag Manager implementations across multiple client sites, without ghost conversions, duplicate events, or confusing dashboards.",
  },

  sections: {
    processTitle: "Setup workflow",
    processSteps: [
      {
        id: nextStableId(),
        text:
          "Review goals, lead funnels, and existing analytics so tracking lines up with how you already talk about performance.",
      },
      {
        id: nextStableId(),
        text:
          "Configure GA4, GTM, Search Console, and core conversion events with clear naming, structure, and governance.",
      },
      {
        id: nextStableId(),
        text:
          "QA events, confirm attribution paths, and deliver handoff notes your team can lean on for reporting and optimization.",
      },
    ],

    buildTitle: "Common implementation areas",
    buildOptions: [
      { id: nextStableId(), text: "GA4 property and data stream setup" },
      { id: nextStableId(), text: "Google Tag Manager container structure" },
      { id: nextStableId(), text: "Search Console verification and property mapping" },
      { id: nextStableId(), text: "Conversion and funnel event tracking" },
    ],

    includedTitle: "What is included",
    includedItems: [
      {
        id: nextStableId(),
        text: "Cross-domain and basic attribution configuration where needed.",
      },
      {
        id: nextStableId(),
        text: "Standardized events for forms, calls, purchases, and key micro-conversions.",
      },
      {
        id: nextStableId(),
        text: "UTM hygiene guidance so campaign data stays usable instead of turning into alphabet soup.",
      },
      {
        id: nextStableId(),
        text: "A practical tracking map and documentation your team can maintain over time.",
      },
    ],

    whyMeTitle: "Why teams bring me in",
    differentiators: [
      {
        id: nextStableId(),
        text:
          "Agency-side communication: concise updates, video walkthroughs, and implementation notes you can drop straight into client decks.",
      },
      {
        id: nextStableId(),
        text:
          "Hands-on implementation experience across custom builds and CMS sites, not just out-of-the-box installs.",
      },
      {
        id: nextStableId(),
        text:
          "Tracking setups designed to support strategy, CRO, and reporting, not just to tick a \"GA4 installed\" box.",
      },
      {
        id: nextStableId(),
        text:
          "Long-term maintainability so event naming, containers, and permissions don’t become a mess by next quarter.",
      },
    ],

    testimonialTitle: "",
    testimonialPlaceholder: "",
    testimonialPerson: "",

    pricingTitle: "Pricing",
    pricingPrefix: "See",
    pricingLinkText: "pricing",
    pricingSuffix: "for monthly support and implementation options.",
  },

  cta: {
    title: "Need analytics setup for a client site?",
    body:
      "If your team needs GA4 and GTM configured correctly before campaigns scale, I can help you ship a dependable setup quickly and document it for future you.",
    links: [
      { id: nextStableId(), href: "/digital-marketing/", text: "Digital Marketing" },
      {
        id: nextStableId(),
        href: "/digital-marketing/seo-implementation/",
        text: "SEO Implementation",
      },
      {
        id: nextStableId(),
        href: "/digital-marketing/landing-pages/",
        text: "Landing Page Development",
      },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
