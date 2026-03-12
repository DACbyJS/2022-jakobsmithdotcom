import { createStableIdFactory } from "../lib/utilities/stableIdFactory";

const nextStableId = createStableIdFactory("brd");

export const boardReportingContent = {
  pagePath: "/public-good/board-reporting/",
  metaTitle: "Website ROI Reporting for Nonprofit Boards",
  metaDescription:
    "Monthly website performance reports designed for nonprofit board presentations. Clear metrics, plain language, and concrete next steps.",

  serviceItems: [
    "Monthly website KPI reporting tailored for board-level review",
    "Narrative summaries that connect traffic, engagement, and donations",
    "Dashboards and scorecards focused on mission-relevant outcomes",
    "Trend and benchmark reporting to track performance over time",
    "Action recommendations for the next month based on data",
  ],

  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website ROI Reporting for Nonprofit Boards",
    serviceType: "Nonprofit website reporting and analytics",
    description:
      "Monthly website performance reporting designed for nonprofit board presentations, with clear metrics and recommendations.",
    provider: {
      "@type": "LocalBusiness",
      name: "Jakob Smith Website Management",
      url: "https://jakobsmith.com/",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Nonprofit leadership teams and boards",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  },

  templateContent: {
    eyebrow: "For public good organizations",
    heroTitle: "Board-ready website reporting that explains impact in plain language",
    problemSection: {
      title: "The reporting gap",
      body:
        "Many nonprofit teams are collecting plenty of numbers, but still struggle to explain what the website is actually doing for the mission. Board decks end up with screenshots, jargon, and pageview charts that don’t clearly tie to donations, participation, or program outcomes, so the website feels like a cost center instead of a contributor.",
    },
    offersSection: {
      title: "Board reporting support",
      relatedLabel: "Related pages:",
      relatedLinks: [
        { href: "/public-good/", text: "Public Good" },
        { href: "/public-good/nonprofit-seo/", text: "Nonprofit SEO" },
      ],
    },
    detailSections: [
      {
        id: nextStableId(),
        title: "Clarity over jargon",
        body:
          "Monthly reporting is translated into short, plain-language summaries leadership and board members can scan in minutes, linking website activity to fundraising, outreach, and program goals, with just enough charts to back up the story.",
        classes: "border-js-white bg-js-black text-js-white",
      },
      {
        id: nextStableId(),
        title: "Actionable next steps",
        body:
          "Each report includes 3–5 practical recommendations tied to what the data is showing, so your team knows exactly what to adjust, test, or prioritize before the next board meeting.",
        classes: "border-js-black bg-js-white text-js-black",
      },
    ],
    proofSection: {
      title: "",
      body: "",
      links: [],
    },
    ctaSection: {
      title: "Get board-ready reporting each month",
      body:
        "If your organization needs cleaner website reporting and a stronger story for board meetings, I can help you standardize how you report website performance and connect it directly to mission and fundraising outcomes.",
      links: [
        {
          id: nextStableId(),
          href: "/public-good/donation-pages/",
          text: "Donation Pages",
        },
        {
          id: nextStableId(),
          href: "/public-good/nonprofit-website-management/",
          text: "Website Management",
        },
        { id: nextStableId(), href: "/contact/", text: "Contact" },
      ],
    },
  },
};
