import Link from "next/link";

// constants
import { pageData } from "./pageData";

export const servicesData = [
  {
    id: "service-simple-seo",
    title: "Simple SEO",
    slug: "simple-seo",
    muxWords: ["Rank.", "Search.", "Optimize.", "Grow."],
    tooltip: "On-page SEO audit, traffic and competitor insights.",
    shortDescription:
      "Monthly SEO support focused on stronger rankings, clearer site structure, and better organic traffic opportunities.",
    category: "Invest",
    highPrice: 675,
    lowPrice: 125,
    priceString: "125 - 675 USD/month",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Configure SEO software and connect analytics</li>
          <li>Run an on-page SEO audit on key pages</li>
          <li>Review traffic patterns and competitor positioning</li>
          <li>Perform keyword and intent research</li>
          <li>Refine meta titles and descriptions</li>
          <li>Optimize image alt text and media metadata</li>
          <li>Strengthen internal linking and content hierarchy</li>
          <li>Implement or refine schema markup</li>
        </ul>
        <h2> Software Included in Cost </h2>
        <ul>
          <li>
            <Link
              href="https://www.semrush.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEMRush
            </Link>
          </li>
          <li>
            <Link
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Console
            </Link>
          </li>
          <li>
            <Link
              href="https://aioseo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              All in One SEO Pro
            </Link>
          </li>
          <li>
            <Link
              href="https://plugins.craftcms.com/seomatic"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEOMatic
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/garmeeh/next-seo"
              target="_blank"
              rel="noopener noreferrer"
            >
              next-seo
            </Link>
          </li>
        </ul>
        <h2> Results </h2>
        <ul>
          <li>Improved search engine rankings on target terms</li>
          <li>More qualified organic traffic over time</li>
          <li>Monthly video check‑in to walk through changes and results</li>
          <li>Monthly PDF report you can share with your team or clients</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-content-gen",
    title: "Content Gen",
    slug: "content-gen",
    muxWords: ["Write.", "Create.", "Publish.", "Engage."],
    tooltip: "Human or AI-assisted posts, pages, and articles.",
    shortDescription:
      "SEO-minded page and article creation, whether you need AI-assisted drafts, human writing, or both.",
    category: "Invest",
    highPrice: 125,
    lowPrice: 50,
    priceString: "50 - 125 USD/item",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Generate SEO-focused posts, news, or pages using LLM workflows</li>
          <li>Bring in an industry-specific writer when deeper expertise is needed</li>
          <li>Align topics and outlines with your SEO and campaign goals</li>
          <li>Format content for readability and on-page SEO best practices</li>
        </ul>
        <h2> Software Included in Cost </h2>
        <ul>
          <li>
            <Link
              href="https://www.writeraccess.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WriterAccess
            </Link>
          </li>
          <li>
            <Link
              href="https://www.contently.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contently
            </Link>
          </li>
          <li>
            <Link
              href="https://hypertxt.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HyperTxt
            </Link>
          </li>
          <li>
            <Link
              href="https://www.jasper.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jasper
            </Link>
          </li>
        </ul>
        <h2> Results </h2>
        <ul>
          <li>Improved search engine visibility for targeted topics</li>
          <li>Increased organic traffic and content engagement</li>
          <li>Content that can generate leads and build trust over time</li>
          <li>Best results when paired with Simple SEO for ongoing tuning</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-ai-discovery",
    title: "AI Discovery",
    slug: "ai-discovery",
    muxWords: ["Surface.", "Find.", "Train.", "Discover."],
    tooltip: "Audit and tune-up for AI discovery, not training.",
    shortDescription:
      "Technical setup and visibility work that helps AI assistants find, understand, and reference your website.",
    metaTitle: "AI Discovery Optimization ,  Get Found by AI Assistants",
    metaDescription:
      "Make your website visible to ChatGPT, Perplexity, Claude, and other AI assistants. AI Discovery audits, llms.txt setup, and semantic optimization.",
    category: "Invest",
    highPrice: 135,
    lowPrice: 0,
    priceString: "135 USD/month",
    heroQuestion:
      "Your customers are asking AI for recommendations. Is your business showing up?",
    contentSections: [
      {
        heading: "What Is AI Discovery",
        body: "AI assistants now answer questions directly and often cite the sources they trust. If your site is not accessible and understandable to AI crawlers, you can become invisible to a growing share of search demand before a customer ever clicks through to a traditional results page.",
      },
      {
        heading: "What's Included",
        items: [
          "Allow AI discovery crawlers in robots.txt and firewall rules",
          "Block AI training crawlers if needed to protect your content",
          "Semantic markup, metadata, and schema optimization",
          "AI visibility audit using real-world queries and prompts",
          "llms.txt file creation and maintenance",
          "Speed and JavaScript rendering optimization for AI bot preferences",
        ],
      },
      {
        heading: "Who It's For",
        body: "Businesses that want to stay ahead of the curve as search shifts from Google to AI assistants. This is especially useful if referrals, local discovery, expert credibility, or category visibility matter to your pipeline.",
      },
      {
        heading: "Pricing",
        body: "$135/month",
      },
      {
        heading: "Get Started",
        body: "Contact me to audit your current AI visibility and set up the technical foundation that helps AI assistants discover, understand, and recommend your business.",
      },
    ],
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Allow AI discovery crawlers in robots.txt and firewall rules</li>
          <li>Block AI training crawlers, if necessary</li>
          <li>Use semantic markup, metadata, and schemas</li>
          <li>Check your content’s AI visibility</li>
          <li>Create an llms.txt file</li>
          <li>Keep speed and JS within AI bots’ preferences</li>
        </ul>
        <h2> Software Included in Cost </h2>
        <ul>
          <li>
            <Link
              href="https://www.semrush.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEMRush
            </Link>
          </li>
          <li>
            <Link
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Console
            </Link>
          </li>
          <li>
            <Link
              href="https://aioseo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              All in One SEO Pro
            </Link>
          </li>
          <li>
            <Link
              href="https://plugins.craftcms.com/seomatic"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEOMatic
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/garmeeh/next-seo"
              target="_blank"
              rel="noopener noreferrer"
            >
              next-seo
            </Link>
          </li>
        </ul>
        <h2> Results </h2>
        <ul>
          <li>Improved AI summaries and citations</li>
          <li>Better measurement of how assistants surface your brand</li>
          <li>A forward-looking brand strategy that stays ahead of the curve</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-feature-add",
    title: "Additions",
    slug: "additions",
    muxWords: ["Add.", "Extend.", "Enhance.", "Build."],
    tooltip: "Add features to your current site.",
    shortDescription:
      "Scoped improvements for an existing site, from new features and integrations to design or content enhancements.",
    category: "Invest",
    highPrice: 2500,
    lowPrice: 50,
    priceString: "50 - 2,500 USD/item",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Add new features, styles, or functionality to an existing site</li>
          <li>Integrate third-party tools, APIs, or marketing platforms</li>
          <li>Refine layouts, components, or content types to fit new needs</li>
        </ul>
        <h2> Notes </h2>
        <ul>
          <li>
            For an extensive list of the software I can add, see my{" "}
            <Link href={pageData[7].data.href}>About &gt; Skills</Link> section.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "service-total-redo",
    title: "Rebuild",
    slug: "rebuild",
    muxWords: ["Design.", "Build.", "Launch.", "Deliver."],
    tooltip: "Total website redesign and development.",
    shortDescription:
      "A full redesign and rebuild for teams that need a better website foundation, experience, and launch plan.",
    category: "Invest",
    highPrice: 37500,
    lowPrice: 750,
    priceString: "750 - 37,500 USD",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Consult on your design or connect you with a trusted designer</li>
          <li>Build a new site from that design on a modern stack</li>
          <li>
            Ensure the website includes the &quot;just-right&quot; features to
            support your long-term goals
          </li>
          <li>Get your site live, monitored, and managed</li>
        </ul>
        <h2> Notes </h2>
        <ul>
          <li>
            10+ years of experience building small to enterprise marketing sites
            and small to medium e‑commerce sites.
          </li>
          <li>
            After the build, Simple SEO and Foundations are commonly recommended
            to properly market and maintain your brand online. If you’d like to
            take the site on the go, I support that too.
          </li>
          <li>
            For an extensive list of the software I can build with, see my{" "}
            <Link href={pageData[7].data.href}>About &gt; Skills</Link> section.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "service-tech-manager",
    title: "Foundations",
    slug: "foundations",
    muxWords: ["Host.", "Update.", "Maintain.", "Support."],
    tooltip: "Hosting, updates, and support.",
    shortDescription:
      "Ongoing maintenance that keeps your site hosted, updated, monitored, and supported month after month.",
    category: "Preserve",
    highPrice: 375,
    lowPrice: 125,
    priceString: "125 - 375 USD/month",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Host your site and all databases and assets</li>
          <li>Manage DNS, indexers, caching, and CDNs</li>
          <li>
            Update your site&apos;s software at every level, prioritizing
            security patches and your most critical functionality
          </li>
          <li>
            Answer emails and Slacks about the site, including acting on bug
            reports and small requests
          </li>
          <li>
            Include an hour a month of site tweaks (see Additions for larger
            scopes)
          </li>
          <li>
            Monitor and fine-tune logs 24/7 for errors and uptime issues
          </li>
        </ul>
        <h2> Software Included in Cost </h2>
        <ul>
          <li>
            <Link
              href="https://kinsta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kinsta
            </Link>
          </li>
          <li>
            <Link
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Ocean
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linode
            </Link>
          </li>
          <li>
            <Link
              href="https://www.cloudflare.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare
            </Link>
          </li>
          <li>
            <Link
              href="https://servd.host/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Servd
            </Link>
          </li>
          <li>
            <Link
              href="https://wp-umbrella.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WPUmbrella
            </Link>
          </li>
          <li>
            <Link
              href="https://uptimerobot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UptimeRobot
            </Link>
          </li>
          <li>
            <Link
              href="https://www.bunny.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bunny.net
            </Link>
          </li>
          <li>
            Most major CMSs have popular paid plugins or themes (like ACF or
            Craft CMS Pro) with annual agency rates that I pay for and share
            across client projects.
          </li>
        </ul>
        <h2> Results </h2>
        <ul>
          <li>Your site delivers 24/7 and improves the longer it stays with me</li>
          <li>
            Reduced time and stress when something goes wrong or needs adjusting
          </li>
          <li>
            You, your team, and your clients feel safe and supported doing your
            work without the website getting in the way
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "service-web-hosting",
    title: "Hosting & Updates",
    slug: "hosting-updates",
    muxWords: ["Host.", "Secure.", "Update.", "Deliver."],
    tooltip: "Reliable web hosting services.",
    shortDescription:
      "Core hosting and software update coverage for sites that need reliability, security, and technical oversight.",
    category: "Preserve",
    highPrice: 125,
    lowPrice: 50,
    priceString: "50 - 125 USD/month",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Host your site and all databases and assets</li>
          <li>Manage DNS, indexers, caching, and CDNs</li>
          <li>
            Update your site&apos;s software at every level, prioritizing
            security patches
          </li>
          <li>
            Answer emails and Slacks about downtime, update-related bugs, or
            third-party developer requests
          </li>
        </ul>
        <h2> Software Included in Cost </h2>
        <ul>
          <li>
            <Link
              href="https://kinsta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kinsta
            </Link>
          </li>
          <li>
            <Link
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Ocean
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linode
            </Link>
          </li>
          <li>
            <Link
              href="https://www.cloudflare.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare
            </Link>
          </li>
          <li>
            <Link
              href="https://servd.host/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Servd
            </Link>
          </li>
        </ul>
        <h2> Results </h2>
        <ul>
          <li>Your site delivers 24/7 with stable, well-managed hosting</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-tech-support",
    title: "Support",
    slug: "support",
    muxWords: ["Answer.", "Assist.", "Fix.", "Support."],
    tooltip: "Ongoing technical support.",
    shortDescription:
      "Direct technical help for teams that need quick answers, issue resolution, and a steady support retainer.",
    category: "Preserve",
    highPrice: 250,
    lowPrice: 50,
    priceString: "50 - 250 USD/month",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>
            I can Slack, email, call, or text with you or your clients to answer
            questions and achieve scoped goals with your site.
          </li>
          <li>
            The more you pay, the more I can say and do without extra change
            orders, and the higher your requests are prioritized, effectively
            making this a flexible retainer.
          </li>
          <li>
            I often answer within 1–8 hours and can frequently fix issues or
            ship outcomes within 24 hours.
          </li>
        </ul>
        <h2> Intended For: </h2>
        <ul>
          <li>
            Designers or agencies who need a technical partner to support their
            clients.
          </li>
          <li>
            Businesses that rely on their website directly for sales, such as
            e‑commerce stores or SaaS companies.
          </li>
          <li>
            Individuals or teams who don’t have the time or expertise to manage
            technical details but still want to learn and do some of the work
            themselves.
          </li>
          <li>
            Businesses with sensitive or regulated data that require careful
            handling and compliance with national or industry standards.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "service-tech-debt",
    title: "Total Debug",
    slug: "total-debug",
    muxWords: ["Debug.", "Repair.", "Tune.", "Fix."],
    tooltip: "Website technical debt repair.",
    shortDescription:
      "Cleanup and repair work for older websites with bugs, outdated systems, and performance or maintenance problems.",
    category: "Preserve",
    highPrice: 2500,
    lowPrice: 123,
    priceString: "125 - 2,500 USD/month",
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>
            I dig into older sites and uncover bugs, outdated features, and
            performance issues that have built up over time.
          </li>
          <li>
            I&apos;ll often migrate to newer software or update existing
            software that is outdated or no longer supported.
          </li>
          <li>
            This typically includes regulatory needs, automation, better SEO,
            and refreshed styles or components.
          </li>
          <li>
            I deliver a recorded video walkthrough of what I did and offer a
            follow‑up call if you&apos;d like to discuss it.
          </li>
          <li>
            For an extensive list of the software I can work with, see my{" "}
            <Link href={pageData[7].data.href}>About &gt; Skills</Link> section.
          </li>
        </ul>
        <h2> Intended For: </h2>
        <ul>
          <li>
            Large or long‑running websites with technical “debt”, hidden or
            painful bugs, outdated features, or performance problems that have
            piled up over time.
          </li>
          <li>
            Websites that need &quot;love&quot; but where a full rebuild isn’t
            in the budget, and improvements need to be spread out over monthly
            work instead.
          </li>
        </ul>
      </>
    ),
  },
];
