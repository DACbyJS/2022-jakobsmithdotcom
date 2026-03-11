import { v4 as uuidv4 } from "uuid";

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
      { id: uuidv4(), text: "Send your mockup or wireframe or chat with me on the idea with some goals, pics and examples" },
      { id: uuidv4(), text: "I build it to spec with experienced assumptions to get it over the finish line" },
      {
        id: uuidv4(),
        text: "Deliver it under your brand or support your build for you with your client over Slack, email or phone",
      },
    ],

    buildTitle: "What I build with",
    buildOptions: [
      { id: uuidv4(), text: "Custom WordPress" },
      { id: uuidv4(), text: "Custom Craft CMS" },
      { id: uuidv4(), text: "Next.js" },
    ],

    includedTitle: "What is included",
    includedItems: [
      { id: uuidv4(), text: "Responsive development" },
      { id: uuidv4(), text: "On-page SEO baked in" },
      { id: uuidv4(), text: "PageSpeed optimization" },
      { id: uuidv4(), text: "Ongoing management assumed and available" },
    ],

    whyMeTitle: "Why me over an overseas team",
    differentiators: [
      { id: uuidv4(), text: "US-based" },
      { id: uuidv4(), text: "Same timezone (Mountain)" },
      { id: uuidv4(), text: "Designer-friendly communication" },
      { id: uuidv4(), text: "I understand design intent, not just specs" },
      { id: uuidv4(), text: "Long-term partnership, not one-off gigs" },
      { id: uuidv4(), text: "I communicate thoughtfully and often" },
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
      { id: uuidv4(), href: "/website-designers/", text: "Website Designers" },
      { id: uuidv4(), href: "/services/", text: "Services" },
      { id: uuidv4(), href: "/portfolio/", text: "Portfolio" },
      { id: uuidv4(), href: "/contact/", text: "Contact" },
    ],
  },
};
