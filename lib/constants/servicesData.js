import Link from "next/link";

// constants
import { pageData } from "./pageData";

// libs
import { v4 as uuidv4 } from "uuid";

export const servicesData = [
  {
    id: uuidv4(),
    title: "Simple SEO",
    tooltip: "On-Page SEO Audit, Traffic and Competitor Insights",
    category: "Invest",
    highPrice: 475,
    lowPrice: 125,
    priceString: "$125 - $475",
    htmlDescription: (
      <>
        <p>
          The Simple SEO service includes an on-page SEO audit, traffic
          insights, and competitor analysis. This service is designed to help
          improve your website&apos;s search engine rankings and overall online
          presence. I use {" "}
          <Link
            href="https://www.semrush.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEMRush
          </Link>
          ,{" "}
          <Link
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Console
          </Link>
          , and a site software based plugin like{" "}
          <Link
            href="https://aioseo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All in One SEO Pro
          </Link>
          ,{" "}
          <Link
            href="https://plugins.craftcms.com/seomatic"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEOMatic
          </Link>{" "}
          or{" "}
          <Link
            href="https://github.com/garmeeh/next-seo"
            target="_blank"
            rel="noopener noreferrer"
          >
            next-seo
          </Link>{" "}
          to get control of the content of your site. It results in monthly
          actions taken to fix problems that arise from published content and
          search engine discovery along with a recorded video presentation each
          month, PDF report and a call if you&apos;d like.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    title: "Content Gen",
    tooltip: "Human or AI Posts, Pages, etc.",
    category: "Invest",
    highPrice: 75,
    lowPrice: 15,
    priceString: "$15 - $75",
    htmlDescription: (
      <p>
        Content Generation services include creating posts, pages, and other
        types of content for your website. This can be done by human writers or
        through AI-generated content, depending on your needs and preferences.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "AI Discovery",
    tooltip: "Audit and Tune-up for AI Discovery, not Training.",
    category: "Invest",
    highPrice: 135,
    lowPrice: 0,
    priceString: "$135",
    htmlDescription: (
      <p>
        AI Discovery services involve auditing and tuning your website for AI
        discovery, ensuring that your content is easily accessible and
        discoverable by AI systems. This service can configure your site to not
        include your data in AI training, but still get rich results in AI
        summaries.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "Additions",
    tooltip: "Add Features to Current Site",
    category: "Invest",
    highPrice: 2500,
    lowPrice: 50,
    priceString: "Value",
    htmlDescription: (
      <p>
        The Additions service involves adding new features and functionalities
        to your existing website. This can include anything from new plugins to
        custom features tailored to your specific needs. For an extensive list
        of my web software experience, please see{" "}
        <Link href={pageData[7].data.href}>ABOUT</Link> page.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "Rebuild",
    tooltip: "Total Website Redesign and Development",
    category: "Invest",
    highPrice: 37500,
    lowPrice: 750,
    priceString: "Value",
    htmlDescription: (
      <p>
        The Rebuild service offers a complete redesign and redevelopment of your
        website. This service is ideal for those looking to refresh their online
        presence with a new look and improved functionality. I have experience
        building small to enterprise marketing websites and small to medium
        e-commerce sites. For an extensive list of my web software experience,
        please see <Link href={pageData[7].data.href}>ABOUT</Link> page.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "Foundations",
    tooltip: "Hosting, Updates, and Support",
    category: "Preserve",
    highPrice: 300,
    lowPrice: 50,
    priceString: "$50 - $300",
    htmlDescription: (
      <p>
        The Foundations service includes essential website services such as
        hosting, regular updates, and ongoing support. This ensures that your
        website remains secure, up-to-date, and fully functional and you can
        always get me on the line for questions and concerns. We host on{" "}
        <Link
          href="https://kinsta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinsta
        </Link>
        ,{" "}
        <Link
          href="https://www.digitalocean.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Ocean
        </Link>
        ,{" "}
        <Link
          href="https://www.linode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linode
        </Link>{" "}
        or{" "}
        <Link
          href="https://servd.host/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Servd
        </Link>{" "}
        depending on your needs. I use a monitoring service like{" "}
        <Link
          href="https://wp-umbrella.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WPUmbrella
        </Link>{" "}
        or{" "}
        <Link
          href="https://uptimerobot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UptimeRobot
        </Link>{" "}
        to ensure your site is always online and running smoothly.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "Hosting",
    tooltip: "Reliable Web Hosting Services",
    category: "Preserve",
    highPrice: 150,
    lowPrice: 50,
    priceString: "$50 - $150",
    htmlDescription: (
      <p>
        Hosting services provide a reliable platform for your website to be
        accessible online. This includes just keeping your site up, but does not
        include updates or support.We host on{" "}
        <Link
          href="https://kinsta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinsta
        </Link>
        ,{" "}
        <Link
          href="https://www.digitalocean.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Ocean
        </Link>
        ,{" "}
        <Link
          href="https://www.linode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linode
        </Link>{" "}
        or{" "}
        <Link
          href="https://servd.host/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Servd
        </Link>{" "}
        depending on your needs. I use a monitoring service like{" "}
        <Link
          href="https://wp-umbrella.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WPUmbrella
        </Link>{" "}
        or{" "}
        <Link
          href="https://uptimerobot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UptimeRobot
        </Link>{" "}
        to ensure your site is always online and running smoothly.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "Updates",
    tooltip: "Regular Website Updates and Improvements",
    category: "Preserve",
    highPrice: 100,
    lowPrice: 25,
    priceString: "$25 - $100",
    htmlDescription: (
      <p>
        The Updates service involves regular maintenance and improvements to
        your website. This includes updating plugins, themes, and core software
        to ensure optimal performance and security. We host on{" "}
        <Link
          href="https://kinsta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinsta
        </Link>
        ,{" "}
        <Link
          href="https://www.digitalocean.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digital Ocean
        </Link>
        ,{" "}
        <Link
          href="https://www.linode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linode
        </Link>{" "}
        or{" "}
        <Link
          href="https://servd.host/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Servd
        </Link>{" "}
        depending on your needs. I use a monitoring service like{" "}
        <Link
          href="https://wp-umbrella.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WPUmbrella
        </Link>{" "}
        or{" "}
        <Link
          href="https://uptimerobot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UptimeRobot
        </Link>{" "}
        to ensure your site is always online and running smoothly.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "Support",
    tooltip: "Ongoing Technical Support",
    category: "Preserve",
    highPrice: 200,
    lowPrice: 50,
    priceString: "$50 - $250",
    htmlDescription: (
      <p>
        Support services provide ongoing technical assistance for your website.
        This includes troubleshooting issues, answering questions, and providing
        guidance on best practices to ensure your site runs smoothly. I can
        Slack, email, call or text with you to answer questions and help you
        with your site. The more you pay the more I can do without passing off
        additional costs to you and priortize your requests, effectively making
        this a retainer fee.
      </p>
    ),
  },
  {
    id: uuidv4(),
    title: "Total Debug",
    tooltip: "Website Technical Debt Repair",
    category: "Preserve",
    highPrice: 500,
    lowPrice: 100,
    priceString: "$100 - $500",
    htmlDescription: (
      <p>
        The Total Debug service is like a health check and tune-up for your
        website. It’s designed for large websites that have built up some
        technical “debt”— meaning there may be hidden or unbearable bugs,
        outdated features, or performance issues that have piled up over time. I
        deliver a recorded video of what I did and a call if you&apos;d like.
        This is ideal for websites that have been around for a while and
        don&apos;t want to pay for a full rebuild but do need the improved
        functionality spread out of monthly payments. For an extensive list of
        my web software experience, please see{" "}
        <Link href={pageData[7].data.href}>ABOUT</Link> page.
      </p>
    ),
  },
];
