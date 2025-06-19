// libs
import { v4 as uuidv4 } from "uuid";

// constants
import { pageData } from "../lib/constants/pageData";

export const pricingPageContent = {
  muxWords: ["Value.", "Preserve.", "Grow.", "Invest."],
  firstWhiteBlackBox: {
    title: (
      <>
        Website Management Value = <br />
        Investment + Preservation
      </>
    ),
    firstPricingColumn: {
      title: "Invest",
      items: [
        {
          id: uuidv4(),
          title: "Simple SEO",
          tooltip: "On-Page SEO Audit, Traffic and Competitor Insights",
          price: "$125 - $475",
        },
        {
          id: uuidv4(),
          title: "Content Gen",
          tooltip: "Human or AI Posts, Pages, etc.",
          price: "$15 - $75 per item",
        },
        {
          id: uuidv4(),
          title: "AI Discovery",
          tooltip: "Audit and Tune-up for AI Discovery, not Training.",
          price: "$135",
        },
        {
          id: uuidv4(),
          title: "Media Monitor",
          tooltip: "Monitor Brand Performance on Socials",
          price: "$75",
        },
        {
          id: uuidv4(),
          title: "Local Busywork",
          tooltip: "Google Business administration",
          price: "Value",
        },
        {
          id: uuidv4(),
          title: "Additions",
          tooltip: "Add Features to Current Site",
          price: "Value",
        },
        {
          id: uuidv4(),
          title: "Rebuild",
          tooltip: "Total Website Redesign and Development",
          price: "Value",
        },
      ],
    },
    secondPricingColumn: {
      title: "Preserve",
      items: [
        {
          id: uuidv4(),
          title: "Foundations",
          tooltip: "Hosting, Updates, and Support",
          price: "$125",
        },
        {
          id: uuidv4(),
          title: "Hosting",
          tooltip: "Reliable Web Hosting Services",
          price: "$50",
        },
        {
          id: uuidv4(),
          title: "Updates",
          tooltip: "Regular Website Updates and Improvements",
          price: "$25",
        },
        {
          id: uuidv4(),
          title: "Support",
          tooltip: "Ongoing Technical Support",
          price: "$100",
        },
        {
          id: uuidv4(),
          title: "Total Debug",
          tooltip: "Website Security Monitoring and Protection",
          price: "$50",
        },
      ],
    },

    bottomLinks: [
      {
        id: uuidv4(),
        title: "Service Details",
        href: pageData[5].data.href,
        target: "_self",
      },
      {
        id: uuidv4(),
        title: "Portfolio",
        href: pageData[6].data.href,
        target: "_self",
      },
      {
        id: uuidv4(),
        title: "Get a Quote",
        href: pageData[8].data.href,
        target: "_self",
      },
    ],
    disclaimer: "* All Prices are Per Month and Per URL unless otherwise noted",
  },
};
