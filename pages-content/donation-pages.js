import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("don");

export const donationPagesContent = {
  pagePath: "/public-good/donation-pages/",
  metaTitle: "Donation Page Setup & Optimization for Nonprofits",
  metaDescription:
    "Build and optimize online donation pages that convert. Integration with major donation platforms for nonprofits.",

  serviceItems: [
    "Donation page strategy and build support tied to your campaign and audience",
    "Integration help for major donation and CRM platforms used by nonprofits",
    "Conversion-focused page structure, messaging hierarchy, and form UX",
    "Tracking setup for donations, form starts, and abandonment patterns",
    "Mobile and accessibility checks so more supporters can complete gifts",
  ],

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Donation Page Setup & Optimization for Nonprofits",
    serviceType: "Donation page development and optimization",
    description:
      "Build and optimize online donation pages that convert with integration support for major nonprofit donation platforms.",
    provider: {
      "@type": "LocalBusiness",
      name: "Jakob Smith Website Management",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Nonprofits and public good organizations",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  templateContent: {
    eyebrow: "For public good organizations",
    heroTitle: "Donation pages that feel trustworthy and convert more supporters",
    problemSection: {
      title: "Where donations get lost",
      body:
        "Many nonprofit donation flows are slow, confusing, or visually out of step with the rest of the site. When the giving experience feels unclear, cluttered, or hard to use, especially on mobile, even motivated supporters drop off before finishing their contribution.",
    },
    offersSection: {
      title: "Donation page support",
      relatedLabel: "Related pages:",
      relatedLinks: [
        { href: "/public-good/", text: "Public Good" },
        {
          href: "/public-good/nonprofit-website-management/",
          text: "Nonprofit Website Management",
        },
      ],
    },
    detailSections: [
      {
        id: nextStableId(),
        title: "Platform-aware implementation",
        body:
          "From hosted donation tools to embedded forms, I help implement reliable donation experiences that fit your existing stack, staff capacity, and security needs, without forcing a full rebuild just to improve conversions.",
        classes: "border-js-white bg-js-black text-js-white",
      },
      {
        id: nextStableId(),
        title: "Conversion and clarity",
        body:
          "Donation page structure is tuned for trust and completion: clear asks, fewer distractions, mobile-friendly layouts, and better tracking so you can see where donors drop off and improve each campaign cycle.",
        classes: "border-js-black bg-js-white text-js-black",
      },
    ],
    proofSection: {
      title: "",
      body: "",
      links: [],
    },
    ctaSection: {
      title: "Improve your donation flow",
      body:
        "If your organization needs donation pages that are easier to maintain and better at converting support, I can help you design, build, and refine the next version with data and donor experience in mind.",
      links: [
        {
          id: nextStableId(),
          href: "/public-good/nonprofit-seo/",
          text: "Nonprofit SEO",
        },
        {
          id: nextStableId(),
          href: "/public-good/board-reporting/",
          text: "Board Reporting",
        },
        { id: nextStableId(), href: "/contact/", text: "Contact" },
      ],
    },
  },
};

