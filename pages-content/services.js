// constants
import { servicesData } from "../lib/constants/servicesData";

export const servicesPageContent = {
  muxWords: ["Maintain.", "Service.", "Tune.", "Build."],
  firstWhiteBlackBox: {
    title: (
      <>
        Website Management <br /> Service Details
      </>
    ),
    services: servicesData.map((service) => ({
      id: service.id,
      title: service.title,
      tooltip: service.tooltip,
      category: service.category,
      highPrice: service.highPrice,
      lowPrice: service.lowPrice,
      price: service.priceString,
      html: service.htmlDescription,
    })),
    disclaimer: (
      <>
        I provide the below monthly/item pricing to help you anticipate costs
        and give me time to achieve realistic goals with all my clients.
      </>
    ),
  },
};
