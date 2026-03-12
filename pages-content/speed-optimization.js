const createStableIdFactory = (prefix) => {
  let idCounter = 0;
  return () => `${prefix}-${++idCounter}`;
};

const nextStableId = createStableIdFactory("spd");

export const speedOptimizationContent = {
  pagePath: "/digital-marketing/speed-optimization/",
  metaTitle: "Website Speed Optimization & Core Web Vitals",
  metaDescription:
    "Get PageSpeed Insights to 90+ and fix Core Web Vitals. Speed optimization support for agencies that need performance implementation.",

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Speed Optimization & Core Web Vitals",
    serviceType: "Website performance optimization",
    description:
      "Get PageSpeed Insights to 90+ and fix Core Web Vitals. Speed optimization support for agencies that need performance implementation.",
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
    lines: ["Fix bottlenecks.", "Improve Core Web Vitals.", "Convert more traffic."],
    body: "Scaffold page: use this section for your final speed process, tooling stack, and expected impact language.",
  },

  sections: {
    processTitle: "Speed optimization process",
    processSteps: [
      { id: nextStableId(), text: "Benchmark performance and identify highest-impact issues" },
      { id: nextStableId(), text: "Implement frontend, media, and platform optimizations" },
      { id: nextStableId(), text: "Validate metrics and hand off performance notes" },
    ],

    buildTitle: "Optimization focus areas",
    buildOptions: [
      { id: nextStableId(), text: "Core Web Vitals" },
      { id: nextStableId(), text: "Asset optimization" },
      { id: nextStableId(), text: "Render path cleanup" },
      { id: nextStableId(), text: "Caching strategy" },
    ],

    includedTitle: "What gets improved",
    includedItems: [
      { id: nextStableId(), text: "Largest Contentful Paint performance" },
      { id: nextStableId(), text: "Cumulative Layout Shift stability" },
      { id: nextStableId(), text: "Interaction responsiveness" },
      { id: nextStableId(), text: "Mobile and desktop Lighthouse scores" },
    ],

    whyMeTitle: "Why this is useful for campaigns",
    differentiators: [
      { id: nextStableId(), text: "Performance updates tied to business outcomes" },
      { id: nextStableId(), text: "Implementation-first technical support" },
      { id: nextStableId(), text: "Cross-platform optimization experience" },
      { id: nextStableId(), text: "Clear before/after reporting" },
    ],

    testimonialTitle: "Performance outcomes",
    testimonialPlaceholder:
      "Placeholder testimonial copy for speed and Core Web Vitals improvements.",
    testimonialPerson: "- Client Name, Campaign Team",

    pricingTitle: "Performance engagement pricing",
    pricingPrefix: "Review",
    pricingLinkText: "pricing details",
    pricingSuffix: "for optimization packages.",
  },

  cta: {
    title: "Improve performance on your next campaign site",
    body: "Keep exploring related digital marketing and service pages via these internal links.",
    links: [
      { id: nextStableId(), href: "/digital-marketing/", text: "Digital Marketing" },
      { id: nextStableId(), href: "/digital-marketing/landing-pages/", text: "Landing Page Development" },
      { id: nextStableId(), href: "/services/hosting-updates/", text: "Hosting and Updates" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
