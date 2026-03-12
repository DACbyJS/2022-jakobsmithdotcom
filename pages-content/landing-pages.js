const createStableIdFactory = (prefix) => {
  let idCounter = 0;
  return () => `${prefix}-${++idCounter}`;
};

const nextStableId = createStableIdFactory("lpd");

export const campaignLandingPagesContent = {
  pagePath: "/digital-marketing/landing-pages/",
  metaTitle: "Landing Page Development for Marketing Campaigns",
  metaDescription:
    "Fast, conversion-optimized landing page development for marketing agencies running paid and organic campaigns.",

  serviceItems: [
    "New landing page builds from campaign briefs",
    "A/B testing-ready modular sections",
    "Analytics and conversion event setup",
    "Responsive implementation across devices",
    "Technical SEO and speed baseline",
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
        "Scaffold page: replace with your final positioning around speed-to-launch, ad spend pressure, and conversion rate objectives.",
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
        body: "Campaign pages built quickly with reusable structure and clean implementation for ongoing testing and iteration.",
        classes: "border-js-black bg-js-white text-js-black",
      },
      {
        id: nextStableId(),
        title: "Conversion-focused implementation",
        body: "Page layout, content hierarchy, and event instrumentation set up to support measurement and optimization.",
        classes: "border-js-white bg-js-black text-js-white",
      },
    ],
    proofSection: {
      title: "Related work",
      body: "Add campaign case studies or portfolio examples here.",
      links: [
        { id: nextStableId(), label: "Portfolio", href: "/portfolio/" },
        { id: nextStableId(), label: "Pricing", href: "/pricing/" },
      ],
    },
    ctaSection: {
      title: "Ship your next campaign page",
      body: "Continue through the linked service pages while copy and campaign-specific proof are being finalized.",
      links: [
        { id: nextStableId(), href: "/services/additions/", text: "Additions" },
        { id: nextStableId(), href: "/services/content-gen/", text: "Content Gen" },
        { id: nextStableId(), href: "/contact/", text: "Contact" },
      ],
    },
  },
};
