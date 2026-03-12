import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("lpd");

export const campaignLandingPagesContent = {
  pagePath: "/digital-marketing/landing-pages/",
  metaTitle: "Landing Page Development for Marketing Campaigns",
  metaDescription:
    "Fast, conversion-optimized landing page development for marketing agencies running paid and organic campaigns that need reliable execution.",

  serviceItems: [
    "New landing page builds directly from campaign briefs and wireframes",
    "A/B testing-ready modular sections your team can rearrange without code",
    "Analytics and conversion event setup wired into your existing stack",
    "Responsive implementation across devices and real-world network conditions",
    "Technical SEO and speed baseline to keep ads and organic in good standing",
  ],

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landing Page Development for Marketing Campaigns",
    serviceType: "Campaign landing page development",
    description:
      "Fast, conversion-optimized landing page development for marketing agencies running paid and organic campaigns.",
    provider: {
      "@type": "Person",
      name: "Jakob Smith",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Marketing agencies",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  templateContent: {
    eyebrow: "For digital marketers",
    heroTitle: "Launch more campaign pages without bottlenecking your team",
    problemSection: {
      title: "Common campaign bottleneck",
      body:
        "Ad creative is ready, budgets are loaded, and stakeholders are refreshing dashboards, but the landing page is still in a dev queue. Every day of delay burns attention, ad spend, and momentum that you don’t get back.",
    },
    offersSection: {
      title: "Landing page development support",
      relatedLabel: "Related pages:",
      relatedLinks: [
        { href: "/digital-marketing/", text: "Digital Marketing" },
        { href: "/digital-marketing/seo-implementation/", text: "SEO Implementation" },
      ],
    },
    detailSections: [
      {
        id: nextStableId(),
        title: "Build velocity",
        body:
          "Campaign pages built quickly from briefs, with reusable sections and clean markup so your team can keep testing, iterating, and cloning winners without starting from scratch.",
        classes: "border-js-black bg-js-white text-js-black",
      },
      {
        id: nextStableId(),
        title: "Conversion-focused implementation",
        body:
          "Layouts, content hierarchy, and event tracking are implemented to support clear measurement, CRO, and attribution, so you can explain results without digging through broken pixels.",
        classes: "border-js-white bg-js-black text-js-white",
      },
    ],
    proofSection: {
      title: "",
      body:
        "",
      links: [

      ],
    },
    ctaSection: {
      title: "Ship your next campaign page",
      body:
        "Bring your next brief, and we’ll map out a landing page build that respects your brand, your funnel, and the pressure your ad budget is already under.",
      links: [
        { id: nextStableId(), href: "/services/additions/", text: "Additions" },
        { id: nextStableId(), href: "/services/content-gen/", text: "Content Gen" },
        { id: nextStableId(), href: "/contact/", text: "Contact" },
      ],
    },
  },
};

