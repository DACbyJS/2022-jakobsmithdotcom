import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("seoi");

export const seoImplementationContent = {
  pagePath: "/digital-marketing/seo-implementation/",
  metaTitle: "SEO Implementation for Marketing Agencies",
  metaDescription:
    "Technical and on-page SEO implementation services for marketing agencies. You own the strategy, I own the execution.",

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
    body:
      "Iterative, data-driven SEO implementation for marketing agencies that need clean execution across multiple client sites, stacks, and timelines.",
  },

  sections: {
    processTitle: "Execution model",
    processSteps: [
      {
        id: nextStableId(),
        text:
          "Receive strategy docs, prioritized backlogs, and reporting goals from your team.",
      },
      {
        id: nextStableId(),
        text:
          "Implement technical and on-page SEO updates directly in code or CMS, with an eye on performance and stability.",
      },
      {
        id: nextStableId(),
        text:
          "Validate changes, document what shipped, and hand off notes your strategists and account managers can confidently share with clients.",
      },
    ],

    buildTitle: "Implementation areas",
    buildOptions: [
      { id: nextStableId(), text: "Metadata and on-page structure" },
      { id: nextStableId(), text: "Internal linking and navigation patterns" },
      { id: nextStableId(), text: "Schema and structured data" },
      { id: nextStableId(), text: "Technical fixes and cleanup" },
    ],

    includedTitle: "What is included",
    includedItems: [
      {
        id: nextStableId(),
        text: "Priority SEO task execution based on your roadmap and campaign timelines.",
      },
      {
        id: nextStableId(),
        text: "CMS- or code-level updates depending on how each client site is built.",
      },
      {
        id: nextStableId(),
        text: "Implementation QA and checks against best practices and your internal standards.",
      },
      {
        id: nextStableId(),
        text: "Clear handoff documentation so everyone knows what changed and why.",
      },
    ],

    whyMeTitle: "Why this partnership works",
    differentiators: [
      {
        id: nextStableId(),
        text:
          "Agentic-powered fast implementation cycles so simple tasks don’t sit in a dev queue for weeks.",
      },
      {
        id: nextStableId(),
        text:
          "Agency-friendly communication, concise updates, video walkthroughs, and insights you can drop into client reports without rewriting.",
      },
      {
        id: nextStableId(),
        text:
          "10+ years of production experience across mixed stacks, from WordPress and Craft to custom Next.js builds.",
      },
      {
        id: nextStableId(),
        text:
          "Reliable delivery, clear expectations, and a bias toward not breaking the things your clients already depend on.",
      },
    ],

    testimonialTitle: "",
    testimonialPlaceholder: "",
    testimonialPerson: "",

    pricingTitle: "Pricing",
    pricingPrefix: "Check",
    pricingLinkText: "pricing",
    pricingSuffix: "for implementation rates and retainers.",
  },

  cta: {
    title: "Need implementation support this month?",
    body:
      "If your strategy backlog is growing faster than your dev capacity, I can help you ship the technical and on-page work so campaigns keep moving.",
    links: [
      { id: nextStableId(), href: "/digital-marketing/", text: "Digital Marketing" },
      {
        id: nextStableId(),
        href: "/digital-marketing/landing-pages/",
        text: "Landing Page Development",
      },
      { id: nextStableId(), href: "/services/simple-seo/", text: "Simple SEO Service" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
