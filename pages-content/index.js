import { pageData } from "../lib/constants";

export const homePageContent = {
  muxWords: ["Translate.", "Decide.", "Develop.", "Deliver."],
  firstBox: {
    headerOne: "Website Management",
    headerTwo: "Services For",
    links: [
      {
        href: pageData[1]?.data?.href,
        text: "Web Designers",
        cssClasses: "red line-link hover-on",
      },
      {
        href: pageData[2]?.data?.href,
        text: "Digital Marketing",
        cssClasses: "yellow line-link hover-on",
      },
      {
        href: pageData[3]?.data?.href,
        text: "Public Good",
        cssClasses: "blue line-link hover-on",
      },
    ],
  },
  secondBox: {
    headerOne: "Why does anyone need Website Management?",
    headerTwo: (
      <>
        From an idea in your head
        <br /> to the foundation of an online identity, <br /> your website
        performs the job of ambassador
        <br /> every second in every time zone,
        <br /> so whose job is it to make sure that always happens?
      </>
    ),
    links: [
      {
        href: pageData[4]?.data?.href,
        text: "How I Treat People",
        cssClasses: "blue line-link hover-on",
      },
      {
        href: pageData[5]?.data?.href,
        text: "How Much I Cost",
        cssClasses: "yellow line-link hover-on",
      },
      {
        href: pageData[6]?.data?.href,
        text: "How I Do the Work",
        cssClasses: "red line-link hover-on",
      },
    ],
    badge: [
      {
        href: pageData[7]?.data?.href,
        text: "How I Handle Clients",
        cssClasses: "rainbow line-link hover-on",
      },
    ],
  },
};
