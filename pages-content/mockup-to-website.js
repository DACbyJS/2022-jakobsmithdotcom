import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("mtw");

export const mockupToWebsiteContent = {
  pagePath: "/website-designers/mockup-to-website/",
  metaTitle: "Turn Your Design Mockup Into a Live Website",
  metaDescription:
    "From Figma, Sketch, or PSD to a fully functional website. Pixel-perfect custom development for web designers and agencies that care about the details.",

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Turn Your Design Mockup Into a Live Website",
    serviceType: "Mockup-to-website development",
    description:
      "From Figma, Sketch, or PSD to a fully functional website. Pixel-perfect custom development for web designers and agencies that care about the details.",
    provider: {
      "@type": "Person",
      name: "Jakob Smith",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Web designers and design agencies",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  hero: {
    eyebrow: "For web designers",
    lines: [
      "Turn your mockup ",
      "into production code ",
      "without major compromise.",
    ],
    body:
      "Development translation for web designers who want pixel-perfect custom websites wired to real-world APIs, lean performance budgets, and CMS editing that feels as intentional as the layout.",
  },

  sections: {
    processTitle: "How the build process works",
    processSteps: [
      {
        id: nextStableId(),
        text:
          "Share designs, style guide, project goals, and any \"don't you dare change this\" constraints.",
      },
      {
        id: nextStableId(),
        text:
          "I implement responsive, accessible frontend and CMS logic that honors your design system instead of fighting it.",
      },
      {
        id: nextStableId(),
        text:
          "Review, QA, and launch handoff with clear docs, loom walkthroughs, and post-launch support so you look rock-solid in front of the client.",
      },
    ],

    buildTitle: "Design source formats",
    buildOptions: [
      { id: nextStableId(), text: "Figma (preferred for smooth handoff)" },
      { id: nextStableId(), text: "Sketch" },
      { id: nextStableId(), text: "PSD" },
      { id: nextStableId(), text: "Wireframes and rough prototypes" },
    ],

    includedTitle: "Implementation highlights",
    includedItems: [
      {
        id: nextStableId(),
        text: "Pixel-accurate responsive development that respects your type, spacing, and rhythm.",
      },
      {
        id: nextStableId(),
        text: "CMS setup and editable regions mapped to your content structure, not a random field soup.",
      },
      {
        id: nextStableId(),
        text: "Technical SEO baseline, clean HTML, and performance-first decisions under the hood.",
      },
      {
        id: nextStableId(),
        text: "Pre-launch QA checklist covering browsers, devices, forms, accessibility, and analytics tags.",
      },
    ],

    whyMeTitle: "Why Web Designers use this workflow",
    differentiators: [
      {
        id: nextStableId(),
        text:
          "You only have to tell me once that something looks off. Often I catch the visual drift and fix it before it hits your inbox.",
      },
      {
        id: nextStableId(),
        text:
          "Clear communication and fast feedback loops, so micro-adjustments and \"one more tiny tweak\" don’t derail the entire timeline.",
      },
      {
        id: nextStableId(),
        text:
          "Production-ready code standards that give you a healthy sanity check when a client or third-party dev touches the site later.",
      },
      {
        id: nextStableId(),
        text:
          "Long-term maintenance-aware design of the CMS so future edits don’t slowly deform your layout into a Frankenstein page.",
      },
    ],

    pricingTitle: "Rates and packaging",
    pricingPrefix: "Use",
    pricingLinkText: "the pricing page",
    pricingSuffix: "for current implementation ranges and typical project scopes.",
  },

  cta: {
    title: "Discuss your next handoff",
    body:
      "Share your next mockup, and we’ll map out the cleanest path from design file to stable, launch-ready code your clients can live with for years.",
    links: [
      { id: nextStableId(), href: "/website-designers/", text: "Website Designers" },
      {
        id: nextStableId(),
        href: "/website-designers/white-label-development/",
        text: "White-Label Development",
      },
      { id: nextStableId(), href: "/services/rebuild/", text: "Rebuild Service" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
