// constants
import { pageData } from "../lib/constants/pageData";
import { servicesData } from "../lib/constants/servicesData";

// content
const investServices = servicesData.filter(
  (service) => service.category === "Invest"
);
const preserveServices = servicesData.filter(
  (service) => service.category === "Preserve"
);

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
      items: investServices.map((service) => ({
        id: `invest-${service.slug}`,
        title: service.title,
        tooltip: service.tooltip,
        price: service.priceString,
      })),
    },
    secondPricingColumn: {
      title: "Preserve",
      items: preserveServices.map((service) => ({
        id: `preserve-${service.slug}`,
        title: service.title,
        tooltip: service.tooltip,
        price: service.priceString,
      })),
    },

    bottomLinks: [
      {
        id: "pricing-link-service-details",
        title: "Service Details",
        href: pageData[5].data.href,
        target: "_self",
        color: "blue",
      },
      {
        id: "pricing-link-portfolio",
        title: "Portfolio",
        href: pageData[6].data.href,
        target: "_self",
        color: "yellow",
      },
      {
        id: "pricing-link-quote",
        title: "Get a Quote",
        href: pageData[8].data.href,
        target: "_self",
        color: "red",
      },
    ],
    disclaimer: (
      <>
        We provide the above monthly/item pricing to help you anticipate costs
        and give me time to achieve realistic goals with all my clients.
      </>
    ),
  },
};
