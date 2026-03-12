import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("nwm");

export const nonprofitWebsiteManagementContent = {
  pagePath: "/public-good/nonprofit-website-management/",
  metaTitle: "Website Management for Nonprofits",
  metaDescription:
    "Affordable website management for nonprofits — hosting, SEO, maintenance, and donation page optimization. Albuquerque-based, mission-driven support for your cause.",

  serviceItems: [
    "Ongoing hosting and maintenance so the site simply stays up and works",
    "SEO so donors, volunteers, and community partners can actually find you",
    "Donation page optimization (better conversion = more funds for your programs)",
    "Accessibility and compliance (WCAG, ADA) so everyone can participate safely",
    "Monthly reporting you can take straight into a board or leadership meeting",
    "Content updates and small changes without a steep technical learning curve",
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
      body: "Most nonprofits are running on websites stitched together by past staff, volunteers, or one-off contractors. Plugins go out of date, donation forms feel clunky, and nobody is quite sure what will break if they press the wrong button. Meanwhile, donations slip, important information is hard to find, and board members start asking why the website feels stuck in a previous era.",
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
        body: "Monthly value pricing, no surprise invoices, and a bias toward open-source tools so more of your budget goes into impact—not recurring software and emergency fixes.",
        classes: "border-js-white bg-js-black text-js-white",
      },
    ],
    proofSection: {
      title: "Who I've helped",
      body: "A few examples of organizations and associations I’ve supported with ongoing website maintenance, improvements, and quieter infrastructure:",
      links: [
        { id: nextStableId(), label: "WTBA", href: "https://wtba.org/" },
        {
          id: nextStableId(),
          label: "Kraemer Fields",
          href: "https://kraemerfields.com/",
        },
      ],
    },
    ctaSection: {
      title: "Let's talk about your nonprofit's website",
      body: "If your team needs dependable web support without enterprise pricing, I can help you stabilize what you have, improve what isn’t working, and create a plan for the next few years—not just the next fire drill.",
      links: [
        {
          id: nextStableId(),
          href: "/public-good/",
          text: "Back to Public Good",
        },
        { id: nextStableId(), href: "/contact/", text: "Contact" },
      ],
    },
  },
};
