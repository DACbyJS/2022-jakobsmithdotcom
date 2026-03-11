const createStableIdFactory = (prefix) => {
  let idCounter = 0;
  return () => `${prefix}-${++idCounter}`;
};

const nextStableId = createStableIdFactory("wld");

export const whiteLabelDevelopmentContent = {
  pagePath: "/website-designers/white-label-development/",
  metaTitle: "White-Label Web Development for Design Agencies",
  metaDescription:
    "A behind-the-scenes web development partner for design agencies. WordPress, Craft CMS, and custom builds — your brand, my code.",

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White-Label Web Development for Design Agencies",
    serviceType: "White-label web development",
    description:
      "A behind-the-scenes web development partner for design agencies. WordPress, Craft CMS, and custom builds — your brand, my code.",
    provider: {
      "@type": "Person",
      name: "Jakob Smith",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Design agencies and independent designers",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Supported Build Platforms",
      itemListElement: [
        { "@type": "OfferCatalog", name: "WordPress" },
        { "@type": "OfferCatalog", name: "Craft CMS" },
        { "@type": "OfferCatalog", name: "Next.js" },
        { "@type": "OfferCatalog", name: "Custom web applications" },
      ],
    },
  },

  hero: {
    eyebrow: "White-label development partner",
    lines: ["You design it.", "I build it.", "Your client benefits twice."],
    body: "White-label web development support for agencies and designers who need a reliable build partner behind the scenes.",
  },

  sections: {
    processTitle: "How it works",
    processSteps: [
      { id: nextStableId(), text: "Send your mockup or wireframe or chat with me on the idea with some goals, pics and examples" },
      { id: nextStableId(), text: "I build it to spec with experienced assumptions to get it over the finish line" },
      {
        id: nextStableId(),
        text: "Deliver it under your brand or support your build for you with your client over Slack, email or phone",
      },
    ],

    buildTitle: "What I build with",
    buildOptions: [
      { id: nextStableId(), text: "Custom WordPress" },
      { id: nextStableId(), text: "Custom Craft CMS" },
      { id: nextStableId(), text: "Next.js" },
    ],

    includedTitle: "What is included",
    includedItems: [
      { id: nextStableId(), text: "Responsive development" },
      { id: nextStableId(), text: "On-page SEO baked in" },
      { id: nextStableId(), text: "PageSpeed optimization" },
      { id: nextStableId(), text: "Ongoing management assumed and available" },
    ],

    whyMeTitle: "Why me over an overseas team",
    differentiators: [
      { id: nextStableId(), text: "US-based" },
      { id: nextStableId(), text: "Same timezone (Mountain)" },
      { id: nextStableId(), text: "Designer-friendly communication" },
      { id: nextStableId(), text: "I understand design intent, not just specs" },
      { id: nextStableId(), text: "Long-term partnership, not one-off gigs" },
      { id: nextStableId(), text: "I communicate thoughtfully and often" },
    ],

    testimonialTitle: "Testimonial",
    testimonialPlaceholder:
      "Jake is so easy to work with, and his work quality is fantastic. He’s my go-to for any website work I have and has been supporting me and my clients, day in and day out for 5+ years.",
    testimonialPerson: "- Monica Christofferson, Creative Agency Owner",
    testimonialPersonHref: "https://carristo.com",

    pricingTitle: "Pricing",
    pricingPrefix: "See",
    pricingLinkText: "current rates",
    pricingSuffix: "and packaging details.",
  },

  cta: {
    title: "Let's talk about your next project",
    body: "If you need a development partner who can plug into your process and protect your client relationship, let's connect.",
    links: [
      { id: nextStableId(), href: "/website-designers/", text: "Website Designers" },
      { id: nextStableId(), href: "/services/", text: "Services" },
      { id: nextStableId(), href: "/portfolio/", text: "Portfolio" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
