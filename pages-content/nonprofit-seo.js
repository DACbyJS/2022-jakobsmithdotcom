import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("npseo");

export const nonprofitSeoContent = {
  pagePath: "/public-good/nonprofit-seo/",
  metaTitle: "SEO for Nonprofits - Get Found by Donors and Volunteers",
  metaDescription:
    "Affordable SEO services designed for nonprofits. Increase organic visibility so more donors, volunteers, and community members can find you.",

  serviceItems: [
    "Affordable SEO roadmap focused on high-impact priorities",
    "On-page SEO updates for key program, donation, and volunteer pages",
    "Technical SEO cleanup for crawlability, indexing, and site health",
    "Internal linking and content structure improvements",
    "Local and mission-focused search visibility improvements",
  ],

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO for Nonprofits",
    serviceType: "Nonprofit SEO services",
    description:
      "Affordable SEO services designed for nonprofits to increase organic visibility and reach more donors and volunteers.",
    provider: {
      "@type": "LocalBusiness",
      name: "Jakob Smith Website Management",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Nonprofits and mission-driven organizations",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  templateContent: {
    eyebrow: "For public good organizations",
    heroTitle: "SEO for nonprofits that need visibility without enterprise retainers",
    problemSection: {
      title: "The visibility challenge",
      body:
        "Nonprofits often depend on grants, referrals, and seasonal campaigns while organic search remains underused. Without steady SEO improvements, programs, events, and donation opportunities stay hidden from the people who are already searching for help, ways to give, or ways to get involved.",
    },
    offersSection: {
      title: "Nonprofit SEO support",
      relatedLabel: "Related pages:",
      relatedLinks: [
        { href: "/public-good/", text: "Public Good" },
        { href: "/public-good/donation-pages/", text: "Donation Pages" },
      ],
    },
    detailSections: [
      {
        id: nextStableId(),
        title: "Budget-conscious prioritization",
        body:
          "Focus lands on the SEO tasks most likely to move visibility and conversions first, high-value pages, low-hanging technical fixes, and clear wins your team can sustain, so you see progress without committing to an oversized retainer.",
        classes: "border-js-black bg-js-white text-js-black",
      },
      {
        id: nextStableId(),
        title: "Practical implementation",
        body:
          "Recommendations don’t stay trapped in a slide deck. They’re translated into real on-site updates: metadata, headings, internal links, page structure, and technical clean-up that support better rankings and easier discovery over time.",
        classes: "border-js-white bg-js-black text-js-white",
      },
    ],
    proofSection: {
      title: "",
      body: "",
      links: [],
    },
    ctaSection: {
      title: "Get found by more supporters",
      body:
        "If your nonprofit needs affordable SEO that leads to real implementation and measurable progress, not just another audit, I can help your team create and maintain momentum.",
      links: [
        {
          id: nextStableId(),
          href: "/services/simple-seo/",
          text: "Simple SEO Service",
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

