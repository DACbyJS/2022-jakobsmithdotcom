import { createStableIdFactory } from "../lib/utilities/stableIdFactory";
import { portfolioData } from "../lib/constants/portfolioData";

const nextStableId = createStableIdFactory("loc");

const portfolioById = portfolioData.reduce((accumulator, item) => {
  accumulator[item.id] = item;
  return accumulator;
}, {});

const toPortfolioLink = (id, label, note) => {
  const portfolioItem = portfolioById[id];

  if (!portfolioItem) {
    return null;
  }

  return {
    id: nextStableId(),
    label: label || portfolioItem.name,
    href: portfolioItem.href,
    note,
  };
};

const baseLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jakob Smith Website Management",
  serviceType: "Website Management",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.0844,
    longitude: -106.6504,
  },
};

const linkedInMarketCta = {
  href: "https://www.linkedin.com/in/jakob-smith-webdev/",
  text: "Connect on LinkedIn",
  target: "_blank",
  rel: "noopener noreferrer",
  colorName: "black",
};

export const albuquerqueWebDeveloperContent = {
  pagePath: "/albuquerque-web-developer/",
  metaTitle: "Albuquerque Web Developer ,  Website Management | Jakob Smith",
  metaDescription:
    "Albuquerque web developer offering website management, SEO, hosting, and custom development for designers, marketers, and nonprofits.",
  h1: "Web Developer in Albuquerque",
  locationName: "Albuquerque",
  eyebrow: "Local Website Management",
  heroLead:
    "I help Albuquerque organizations keep their websites healthy, visible, and easy to update, whether you need a long-term technical partner or a reliable fix for a site that has grown hard to manage.",
  localBusinessSchema: {
    ...baseLocalBusinessSchema,
    areaServed: {
      "@type": "City",
      name: "Albuquerque",
    },
  },
  introParagraphs: [
    "Most Albuquerque businesses don’t need a big agency to get real results from their website. They need someone who can tie technical fixes to everyday goals: better calls, cleaner forms, less downtime, and pages that feel like the real business. That’s where I fit in as a local web developer focused on website management.",
    "A lot of sites here have been patched by different people over the years, which leads to slow pages, quiet breakages, and content no one wants to touch. I steady what you already have, then improve the most important pieces in a clear order. Because I’m in Albuquerque, we can also meet in person when it helps everyone get on the same page."
  ],
  servicesOverview:
    "My work combines ongoing website management with technical strategy and implementation, so local teams can stop juggling separate vendors for hosting, SEO, content updates, and code-level troubleshooting.",
  serviceLinks: [
    {
      id: nextStableId(),
      href: "/services/",
      label: "Website Management Services",
      description:
        "Review all service options, from monthly support and hosting updates to rebuilds and technical SEO improvements.",
    },
    {
      id: nextStableId(),
      href: "/services/simple-seo/",
      label: "Simple SEO",
      description:
        "Improve local and regional search performance with on-page optimization, metadata refinement, and structured content.",
    },
    {
      id: nextStableId(),
      href: "/services/hosting-updates/",
      label: "Hosting and Updates",
      description:
        "Keep your site fast, secure, and consistently updated so your team is not reacting to avoidable technical issues.",
    },
    {
      id: nextStableId(),
      href: "/services/rebuild/",
      label: "Custom Development",
      description:
        "Plan and implement targeted rebuild work when your current architecture is blocking growth or maintainability.",
    },
  ],
  marketParagraphs: [
    "Albuquerque has a mix of service businesses, associations, healthcare, and mission-driven orgs, and their sites have to do a lot: represent the brand, capture leads or donations, and keep people informed. A quick template can get you online, but staying competitive means caring about the unglamorous parts, publishing workflow, measurement, and steady support.",
    "For a long time, local teams have been treated as “secondary” compared to places like Silicon Valley, Denver, or Austin. If you want to compete with those markets, your site can’t just sit there, it needs to be fast, clear, and reliable. I help Albuquerque teams close that gap so the website keeps up with the strategy instead of dragging it down.",
  ],
  marketCta: linkedInMarketCta,
  portfolioIntro:
    "These projects are strong examples of work connected to the Albuquerque and New Mexico market, including association, healthcare, and public-good organizations.",
  portfolioLinks: [
    toPortfolioLink(
      "ccim-new-mexico",
      "CCIM New Mexico",
      "Commercial real estate association site work with dependable maintenance and structure improvements.",
    ),
    toPortfolioLink(
      "irem-new-mexico",
      "IREM New Mexico",
      "Association-focused website support built around content clarity and ongoing update needs.",
    ),
    toPortfolioLink(
      "north-star-dental",
      "North Star Dental",
      "Local healthcare web support with a focus on performance and practical SEO improvements.",
    ),
    toPortfolioLink(
      "kraemer-fields",
      "Kraemer Fields",
      "Public-good aligned web project support with maintainable implementation and clear content pathways.",
    ),
    toPortfolioLink(
      "carnm",
      "CAR NM",
      "Regional organization website management with technical reliability and clean navigation structure.",
    ),
    toPortfolioLink(
      "ski-new-mexico",
      "Ski New Mexico",
      "Statewide tourism project with local execution and ongoing support for seasonal updates.",
    ),
  ].filter(Boolean),
  cta: {
    title: "Need website help in Albuquerque?",
    body: "If your website has become difficult to maintain, inconsistent in search visibility, or too risky to update quickly, I can help you create a practical management plan and execute it with clear priorities. From day-to-day support to focused development sprints, the goal is to keep your site working as a dependable business asset.",
    links: [
      { id: nextStableId(), href: "/portfolio/", text: "Portfolio" },
      { id: nextStableId(), href: "/services/", text: "Services" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};

export const newMexicoWebDeveloperContent = {
  pagePath: "/new-mexico-web-developer/",
  metaTitle: "New Mexico Web Developer ,  Website Management | Jakob Smith",
  metaDescription:
    "New Mexico web developer providing website management services across the state ,  Albuquerque, Santa Fe, Las Cruces, and El Paso.",
  h1: "Web Developer in New Mexico",
  locationName: "New Mexico",
  eyebrow: "Statewide Website Management",
  heroLead:
    "I provide website management across New Mexico for organizations that need stronger technical reliability, better search visibility, and a development partner who understands local business realities from Albuquerque to regional and rural markets.",
  localBusinessSchema: {
    ...baseLocalBusinessSchema,
    areaServed: {
      "@type": "State",
      name: "New Mexico",
    },
  },
  introParagraphs: [
    "New Mexico organizations often operate across long geographic distances and very different local markets. A team based in Albuquerque may also serve Santa Fe, Las Cruces, and surrounding communities, while coordinating with partners in neighboring markets such as El Paso. Your website has to support that spread without feeling generic. I help teams build and manage sites that communicate clearly to multiple audiences while still preserving a consistent brand and a manageable publishing workflow.",
    "Statewide website management is less about flashy redesigns and more about sustained performance. Most growth comes from compounding improvements: cleaning up technical debt, organizing service pages around real search intent, improving speed on high-traffic templates, and making sure content teams can update key pages without breaking layout or SEO structure. This is especially important for New Mexico organizations where one website often supports outreach, education, recruiting, and service delivery all at once.",
    "The New Mexico market also rewards clear local context. People want to know where you actually work, who you have helped, and whether your team understands regional differences in audience behavior. A website that only speaks in broad national language usually underperforms against competitors that demonstrate local relevance. I focus on practical implementation details that strengthen that relevance: structured location content, stronger internal linking, clean metadata, and measurement that shows which markets are responding.",
  ],
  servicesOverview:
    "Across New Mexico, I support businesses, agencies, and nonprofits with service combinations that can scale from one city to a multi-market footprint without splitting work across disconnected contractors.",
  serviceLinks: [
    {
      id: nextStableId(),
      href: "/services/",
      label: "Website Management Services",
      description:
        "A full menu of support options designed to keep statewide websites stable, measurable, and easy to improve over time.",
    },
    {
      id: nextStableId(),
      href: "/digital-marketing/",
      label: "Digital Marketing Support",
      description:
        "Website and SEO collaboration for marketing teams running campaigns across multiple cities and audiences.",
    },
    {
      id: nextStableId(),
      href: "/website-designers/",
      label: "Designer and Agency Collaboration",
      description:
        "Development partnerships for creative teams that need reliable implementation and ongoing technical stewardship.",
    },
    {
      id: nextStableId(),
      href: "/public-good/",
      label: "Public Good and Nonprofit Work",
      description:
        "Long-term support for mission-driven organizations balancing limited resources with high communication needs.",
    },
  ],
  marketParagraphs: [
    "Statewide projects in New Mexico typically involve uneven resource distribution. Some teams have a marketing lead and internal content help, while others rely on one operations person to handle everything from events to website updates. That is why I prioritize resilient systems over fragile one-off fixes. The objective is to create an environment where routine updates are straightforward, major changes are predictable, and your organization is not one plugin conflict away from a crisis.",
    "For organizations serving tourism, real estate, healthcare, or member communities, search visibility can shift by region and season. The keywords and intent patterns that matter in Albuquerque are not always the same as those in Santa Fe or Las Cruces, and El Paso can introduce another layer of competition and audience overlap. A thoughtful website management strategy accounts for those differences with location-aware page structure, technical consistency, and regular iteration based on real performance data.",
    "The portfolio work below reflects that regional range. It includes projects with statewide relevance and city-specific execution, including Ski New Mexico and Visit Angel Fire in tourism-oriented contexts, plus cross-market commercial projects such as NAI El Paso. The common thread is durable implementation: websites that can continue evolving as organizations grow, campaigns change, and local priorities shift over time.",
  ],
  marketCta: linkedInMarketCta,
  portfolioIntro:
    "These examples show website management and development work connected to statewide New Mexico audiences and nearby regional markets.",
  portfolioLinks: [
    toPortfolioLink(
      "nai-el-paso",
      "NAI El Paso",
      "Regional commercial real estate web support for a market that overlaps with southern New Mexico demand.",
    ),
    toPortfolioLink(
      "ski-new-mexico",
      "Ski New Mexico",
      "New Mexico tourism-focused web work supporting discoverability, updates, and seasonal planning.",
    ),
    toPortfolioLink(
      "visit-angel-fire",
      "Visit Angel Fire",
      "Destination content and technical support with strong New Mexico travel relevance.",
    ),
    toPortfolioLink(
      "ccim-new-mexico",
      "CCIM New Mexico",
      "Statewide professional organization web support with clear structure and ongoing maintenance.",
    ),
  ].filter(Boolean),
  cta: {
    title: "Looking for a New Mexico web developer?",
    body: "If your organization needs dependable website management that can support multiple New Mexico markets without adding process overhead, I can help. We can start with a practical technical assessment, identify the highest-impact fixes, and build a roadmap that improves performance while keeping your team focused on core operations.",
    links: [
      { id: nextStableId(), href: "/portfolio/", text: "Portfolio" },
      { id: nextStableId(), href: "/pricing/", text: "Pricing" },
      { id: nextStableId(), href: "/contact/", text: "Contact" },
    ],
  },
};
