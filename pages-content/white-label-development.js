import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("wld");

export const whiteLabelDevelopmentContent = {
  pagePath: "/website-designers/white-label-development/",
  metaTitle: "White-Label Web Development for Design Agencies",
  metaDescription:
    "A behind-the-scenes web development partner for design agencies. WordPress, Craft CMS, and custom builds — your brand, my code, your client’s win.",

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
    body:
      "White-label web development support for agencies and designers who want a reliable build partner behind the scenes. You can say yes to more projects without stretching your team thin.",
  },

  sections: {
    processTitle: "How it works",
    processSteps: [
      {
        id: nextStableId(),
        text:
          "Send your mockup or wireframe, or hop on a quick call to walk through goals, assets, and any must-have details.",
      },
      {
        id: nextStableId(),
        text:
          "I build it to spec with experienced assumptions, asking questions where it protects the design and timeline.",
      },
      {
        id: nextStableId(),
        text:
          "Deliver under your brand, or loop me into Slack, email, or calls as your \"in-house\" dev so your client relationship stays intact.",
      },
    ],

    buildTitle: "What I build with",
    buildOptions: [
      { id: nextStableId(), text: "Custom WordPress (including ACF, Sage/Bedrock)" },
      { id: nextStableId(), text: "Custom Craft CMS" },
      { id: nextStableId(), text: "Next.js and modern JS frontends" },
    ],

    includedTitle: "What is included",
    includedItems: [
      { id: nextStableId(), text: "Responsive development tuned to real devices, not just breakpoints." },
      { id: nextStableId(), text: "On-page SEO baked in from day one, not bolted on later." },
      { id: nextStableId(), text: "PageSpeed-minded builds so your beautiful designs still load fast." },
      {
        id: nextStableId(),
        text: "Ongoing management assumed and available if you want a long-term partner, not just a one-off build.",
      },
    ],

    whyMeTitle: "Why me over an overseas team",
    differentiators: [
      { id: nextStableId(), text: "US-based and easy to reach when you and your clients are working." },
      { id: nextStableId(), text: "Same timezone (Mountain) for smoother reviews and launches." },
      {
        id: nextStableId(),
        text: "Designer-friendly communication: I speak in comps, hierarchy, and intent, not just tickets.",
      },
      {
        id: nextStableId(),
        text: "I understand design intent, not just specs, so the build still feels like your work when it’s live.",
      },
      {
        id: nextStableId(),
        text: "Built for long-term partnership, so each project gets faster as we learn how we work together.",
      },
      {
        id: nextStableId(),
        text: "Thoughtful, frequent communication so you’re never guessing where a project stands.",
      },
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
    body:
      "If you need a development partner who can plug into your process, protect your client relationship, and quietly ship great work, let’s connect.",
    links: [
      { id: nextStableId(), href: "/website-designers/", text: "Website Designers" },
      { id: nextStableId(), href: "/services/", text: "Services" },
      { id: nextStableId(), href: "/portfolio/", text: "Portfolio" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
