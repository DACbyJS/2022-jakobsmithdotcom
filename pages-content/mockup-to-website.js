import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("mtw");

export const mockupToWebsiteContent = {
  pagePath: "/website-designers/mockup-to-website/",
  metaTitle: "Turn Your Design Mockup Into a Live Website",
  metaDescription:
    "From Figma, Sketch, or PSD to a fully functional website. Pixel-perfect custom development for web designers.",

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Turn Your Design Mockup Into a Live Website",
    serviceType: "Mockup-to-website development",
    description:
      "From Figma, Sketch, or PSD to a fully functional website. Pixel-perfect custom development for web designers.",
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
    lines: ["Turn your mockup ", "into production code ", "without major compromise."],
    body: "Development translation for web designers who want pixel-perfect custom websites connected to powerful APIs and smart CMS editing tools and UI."
  },

  sections: {
    processTitle: "How the build process works",
    processSteps: [
      { id: nextStableId(), text: "Share designs, style guide, and project goals" },
      { id: nextStableId(), text: "I implement responsive, accessible frontend and CMS logic" },
      { id: nextStableId(), text: "Review, QA, and launch handoff with post-launch support" },
    ],

    buildTitle: "Design source formats",
    buildOptions: [
      { id: nextStableId(), text: "Figma" },
      { id: nextStableId(), text: "Sketch" },
      { id: nextStableId(), text: "PSD" },
      { id: nextStableId(), text: "Wireframes" },
    ],

    includedTitle: "Implementation highlights",
    includedItems: [
      { id: nextStableId(), text: "Pixel-accurate responsive development" },
      { id: nextStableId(), text: "CMS setup and editable content regions" },
      { id: nextStableId(), text: "Technical SEO baseline" },
      { id: nextStableId(), text: "Pre-launch QA checklist" },
    ],

    whyMeTitle: "Why Web Designers use this workflow",
    differentiators: [
      { id: nextStableId(), text: "You only have to tell me once that something looks off. Sometimes I get it before you do." },
      { id: nextStableId(), text: "Clear communication and fast feedback loops for getting it just right" },
      { id: nextStableId(), text: "Production-ready code standards that give you a healthy sanity check" },
      { id: nextStableId(), text: "Long-term maintenance data design so the visual design isn't degraded by client editing" },
    ],

    pricingTitle: "Rates and packaging",
    pricingPrefix: "Use",
    pricingLinkText: "the pricing page",
    pricingSuffix: "for current implementation ranges.",
  },

  cta: {
    title: "Discuss your next handoff",
    body: "Use these pages to continue exploring related services while this page content is being finalized.",
    links: [
      { id: nextStableId(), href: "/website-designers/", text: "Website Designers" },
      { id: nextStableId(), href: "/website-designers/white-label-development/", text: "White-Label Development" },
      { id: nextStableId(), href: "/services/rebuild/", text: "Rebuild Service" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
