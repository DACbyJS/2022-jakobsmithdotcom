import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("nwm");

export const nonprofitWebsiteManagementContent = {
  pagePath: "/public-good/nonprofit-website-management/",
  metaTitle: "Website Management for Nonprofits",
  metaDescription:
    "Affordable website management for nonprofits — hosting, SEO, maintenance, and donation page optimization. Albuquerque-based, mission-driven.",

  serviceItems: [
    "Ongoing hosting and maintenance (keep the lights on)",
    "SEO so donors and volunteers can find you",
    "Donation page optimization (better conversion = more funds)",
    "Accessibility and compliance (WCAG, ADA)",
    "Monthly reporting you can show your board",
    "Content updates without the learning curve",
  ],

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Management for Nonprofits",
    serviceType: "Nonprofit website management",
    description:
      "Affordable website management for nonprofits — hosting, SEO, maintenance, and donation page optimization. Albuquerque-based, mission-driven.",
    provider: {
      "@type": "LocalBusiness",
      name: "Jakob Smith Website Management",
      url: "https://jakobsmith.com/",
    },
    areaServed: {
      "@type": "City",
      name: "Albuquerque",
    },
  },

  localBusinessSchema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jakob Smith Website Management",
    image: "https://jakobsmith.com/images/jakob-1.jpg",
    url: "https://jakobsmith.com/",
    email: "hello@jakobsmith.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Albuquerque",
      addressRegion: "NM",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Albuquerque",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/jakob-smith-webdev/",
      "https://github.com/DACbyJS",
    ],
  },

  templateContent: {
    eyebrow: "Nonprofit Website Management",
    heroTitle:
      "Your mission matters more than your budget. Let's make your website work harder for both.",
    problemSection: {
      title: "The problem",
      body:
        "Most nonprofits have outdated websites managed by volunteers or past contractors. Technical debt piles up. Donations suffer. Board members ask hard questions about ROI.",
    },
    offersSection: {
      title: "What I do",
      relatedLabel: "Explore related services:",
      relatedLinks: [
        { href: "/services/foundations/", text: "Foundations" },
        { href: "/services/simple-seo/", text: "Simple SEO" },
      ],
    },
    detailSections: [
      {
        id: nextStableId(),
        title: "Budget-friendly approach",
        body: "Monthly value pricing, no surprise invoices, open-source tools to keep costs low.",
        classes: "border-js-white bg-js-black text-js-white",
      },
    ],
    proofSection: {
      title: "Who I've helped",
      body: "A few examples of organizations and associations I've supported:",
      links: [
        { id: nextStableId(), label: "WTBA", href: "https://wtba.org/" },
        { id: nextStableId(), label: "Kraemer Fields", href: "https://kraemerfields.com/" },
      ],
    },
    ctaSection: {
      title: "Let's talk about your nonprofit's website",
      body:
        "If your team needs dependable web support without enterprise pricing, I can help you stabilize, improve, and grow your site.",
      links: [
        { id: nextStableId(), href: "/contact/", text: "Contact" },
        { id: nextStableId(), href: "/public-good/", text: "Back to Public Good" },
      ],
    },
  },
};
