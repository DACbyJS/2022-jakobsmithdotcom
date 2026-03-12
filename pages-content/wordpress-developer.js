import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("wpd");

export const wordpressDeveloperContent = {
  pagePath: "/website-designers/wordpress-developer/",
  metaTitle: "WordPress Developer for Design Agencies",
  metaDescription:
    "Senior WordPress developer in Albuquerque specializing in custom theme development, ACF, and Sage/Bedrock for design agencies that care about maintainable builds.",

  serviceItems: [
    "Custom WordPress theme implementation aligned to your design system",
    "ACF content modeling and field architecture for sane, scalable editing",
    "Sage or Bedrock project setup for modern, maintainable WordPress",
    "Performance- and SEO-aware frontend development",
    "Ongoing technical support for agency retainers and long-running sites",
    "A WordPress editing experience that’s actually a joy to work in",
  ],

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress Developer for Design Agencies",
    serviceType: "Agency WordPress development",
    description:
      "Experienced WordPress developer in Albuquerque specializing in custom theme development, ACF, and Sage/Bedrock for design agencies.",
    provider: {
      "@type": "Person",
      name: "Jakob Smith",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Design agencies",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  templateContent: {
    eyebrow: "For web designers",
    heroTitle: "Need a senior WordPress developer behind your design work?",
    problemSection: {
      title: "Current challenge",
      body:
        "WordPress development is plagued by plugin bloat, over-engineered themes, and editing experiences that make simple changes feel risky. SEO gets bolted on at the end, performance suffers, and your team burns time fighting the install instead of shipping the work.",
    },
    offersSection: {
      title: "Core WordPress development support",
      relatedLabel: "Related pages:",
      relatedLinks: [
        { href: "/website-designers/", text: "Website Designers" },
        { href: "/website-designers/white-label-development/", text: "White-Label Development" },
      ],
    },
    detailSections: [
      {
        id: nextStableId(),
        title: "A WordPress setup that’s actually a joy to work in.",
        body:
          "Built on a modern, rock-solid foundation with 10+ years of refinements baked in. The clunky stuff is turned off, the good stuff is dialed up, and everything’s organized so cleanly that editors, marketers, and future devs can all find their way around.",
        classes: "border-js-black bg-js-white text-js-black",
      },
      {
        id: nextStableId(),
        title: "We build what you need. Nothing more, nothing less.",
        body:
          "One-time project or ongoing support, I plug into your client’s workflow and the tools they already use. Instead of heavy, expensive plugins that bog the site down, I lean on ACF, Sage/Bedrock, and clean custom code so the build is fast, stable, and ready for future work.",
        classes: "border-js-white bg-js-black text-js-white",
      },
    ],
    proofSection: {
      title: "Project references",
      body:
        "A couple of examples of design-heavy, content-rich WordPress sites built in close collaboration with a designer, a client, and a focused content workflow:",
      links: [
        { id: nextStableId(), label: "Get A Grip", href: "https://getagrip.com" },
        { id: nextStableId(), label: "Visit Angel Fire NM", href: "https://visitangelfirenm.com" },
      ],
    },
    ctaSection: {
      title: "Start a WordPress build conversation",
      body:
        "If you want WordPress builds that feel like an extension of your design practice—not a fight with a theme library—let’s talk about your next project.",
      links: [
        { id: nextStableId(), href: "/services/foundations/", text: "Foundations" },
        { id: nextStableId(), href: "/services/additions/", text: "Additions" },
        { id: nextStableId(), href: "/contact/", text: "Contact" },
      ],
    },
  },
};
