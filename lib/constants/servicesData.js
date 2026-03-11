import Link from "next/link";

// constants
import { pageData } from "./pageData";

export const servicesData = [
  {
    id: "service-simple-seo",
    title: "Simple SEO",
    slug: "simple-seo",
    muxWords: ["Rank.", "Search.", "Optimize.", "Grow."],
    tooltip: "On-Page SEO Audit, Traffic and Competitor Insights",
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
          <li>Configure software</li>
          <li>On-page SEO audit</li>
          <li>Traffic and competitor insights</li>
          <li>Keyword research</li>
          <li>Meta tags and descriptions</li>
          <li>Image alt tag optimization</li>
          <li>Internal linking strategy</li>
          <li>Schema markup implementation</li>
        </ul>
        <h2> Software Included in Cost </h2>
        <ul>
          <li>
            {" "}
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
          <li>Improved search engine rankings</li>
          <li>Increased organic traffic</li>
          <li> Monthly video check-up </li>
          <li> Monthly PDF Report </li>
        </ul>
      </>
    ),
  },
  {
    id: "service-content-gen",
    title: "Content Gen",
    slug: "content-gen",
    muxWords: ["Write.", "Create.", "Publish.", "Engage."],
    tooltip: "Human or AI Posts, Pages, etc.",
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
          <li>Generate SEO-focused Posts, News, or Pages using LLM</li>
          <li>Acquire industry-specific content writer to generate content</li>
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
          <li>Improved search engine rankings</li>
          <li>Increased organic traffic</li>
          <li>Can generate leads and build trust</li>
          <li>Results improve when combined with Simple SEO</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-ai-discovery",
    title: "AI Discovery",
    slug: "ai-discovery",
    muxWords: ["Surface.", "Find.", "Train.", "Discover."],
    tooltip: "Audit and Tune-up for AI Discovery, not Training.",
    shortDescription:
      "Technical setup and visibility work that helps AI assistants find, understand, and reference your website.",
    metaTitle: "AI Discovery Optimization — Get Found by AI Assistants",
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
          "Allow AI Discovery crawlers in robots.txt and firewall rules",
          "Block AI Training crawlers if needed to protect your content",
          "Semantic markup, metadata, and schema optimization",
          "AI visibility audit using real queries",
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
    faqItems: [
      {
        q: "What's the difference between AI Discovery and AI Training?",
        a: "AI Discovery is about letting assistants and answer engines access and cite your site when responding to users. AI Training is about allowing your content to be collected for model training datasets. They involve different bots, different business goals, and different permission decisions.",
      },
      {
        q: "What is an llms.txt file?",
        a: "An llms.txt file is a machine-readable guide that helps AI systems understand the important parts of your site, similar in spirit to robots.txt or a sitemap. It can point assistants toward your key pages, documentation, and content priorities in a cleaner format.",
      },
      {
        q: "Will this replace my regular SEO?",
        a: "No. AI Discovery complements regular SEO rather than replacing it. Strong technical SEO, clear information architecture, fast pages, and good content still matter, but AI assistants also introduce crawler access, semantic clarity, and citation-readiness requirements that deserve separate attention.",
      },
      {
        q: "Which AI assistants does this cover?",
        a: "The work is aimed at improving visibility for major AI assistants and answer engines including ChatGPT, Perplexity, Claude, Gemini, and similar tools that rely on crawling, retrieved web content, or cited sources.",
      },
    ],
    htmlDescription: (
      <>
        <h2> Actions </h2>
        <ul>
          <li>Allow AI Discovery crawlers in robots.txt and firewall rules</li>
          <li>Block AI Training crawlers, if necessary</li>
          <li>Use semantic markup, metadata, and schemas</li>
          <li>Check your content’s AI visibility</li>
          <li>Create an llms.txt file</li>
          <li>Keep speed and JS within AI bots preferences</li>
        </ul>
        <h2> Software Included in Cost </h2>
        <ul>
          <li>
            {" "}
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
          <li>Improved AI summaries</li>
          <li>Better measurements of AI discovery</li>
          <li>Leading brand strategy, stay ahead of the curve</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-feature-add",
    title: "Additions",
    slug: "additions",
    muxWords: ["Add.", "Extend.", "Enhance.", "Build."],
    tooltip: "Add Features to Current Site",
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
          <li>Add features, style or functionality to an existing site.</li>
        </ul>
        <h2> Notes </h2>
        <ul>
          <li>
            For an extensive list of the software I can add to see my{" "}
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
    tooltip: "Total Website Redesign and Development",
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
          <li>Consult on your design or hook you up with a designer</li>
          <li>Build a new site from that design</li>
          <li>
            Make sure the website includes the &quot;just-right&quot; features
            to achieve your long-term goals
          </li>
          <li>Get your site live and managed</li>
        </ul>
        <h2> Notes </h2>
        <ul>
          <li>
            I have 10+ years of experience building small to enterprise sized
            marketing websites and small to medium sized e-commerce sites.
          </li>
          <li>
            After the build, we recommend the Simple SEO and Foundations
            services as they are common expectations for a new site to
            comprehensively market your brand. But if you&apos;d like to take
            the site on the go, I support you.
          </li>
          <li>
            For an extensive list of the software I can build with to see my{" "}
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
    tooltip: "Hosting, Updates, and Support",
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
          <li>Manage DNS, indexers, caching, or CDNs</li>
          <li>
            Update all of your site&apos;s software at every level, prioritizing
            security patches and your site&apos;s most important functionality
          </li>
          <li>
            Answer emails and Slacks about the site including acting on any bug
            requests
          </li>
          <li>
            An hour a month of site tweaks, see Additions for larger scopes
          </li>
          <li>
            Monitor and fine-tune logs on the site 24/7 for errors and uptime
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
              href="https://www.linode.com/"
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
            Most Major CMS&apos;s have popular paid plugins or themes like ACF
            or Craft CMS Pro with their own annual rates for agencies which I
            pay for and share with all of my clients.
          </li>
        </ul>
        <h2> Results </h2>
        <ul>
          <li>
            Your site delivers 24/7 and gets better the longer it stays with me
          </li>
          <li>
            Saving time and stress on anything that is not working with the
            website
          </li>
          <li>
            You, your team and your clients feel safe and supported to do their
            jobs without the website getting in the way.
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
    tooltip: "Reliable Web Hosting Services",
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
          <li>Manage DNS, indexers, caching, or CDNs</li>
          <li>
            Update all of your site&apos;s software at every level only
            prioritizing security patches
          </li>
          <li>
            Answer emails and Slacks about site downtime, update-related bugs or
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
              href="https://www.linode.com/"
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
          <li>
            Your site delivers 24/7 and gets better the longer it stays with me
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "service-tech-support",
    title: "Support",
    slug: "support",
    muxWords: ["Answer.", "Assist.", "Fix.", "Support."],
    tooltip: "Ongoing Technical Support",
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
            {" "}
            I can Slack, email, call or text with you or with your clients to
            answer questions and achieve scoped goals with your site.
          </li>
          <li>
            The more you pay, the more I can say and do without passing off
            additional costs to you and prioritize your requests, effectively
            making this a retainer fee.
          </li>
          <li>
            I often answer you or your clients within 1-8 hours and can often
            fix issues or achieve outcomes within 24 hours.
          </li>
        </ul>
        <h2> Intended For: </h2>
        <ul>
          <li>
            Clients like designers or agencies who need help with technical
            support for their clients.
          </li>
          <li>
            Businesses that rely on their website directly for sales like
            e-commerce stores or SaaS companies.
          </li>
          <li>
            Individuals or teams who do not have the time or expertise to manage
            their website&apos;s technical aspects, but need to learn and do
            some of the work themselves due to limited budgets.
          </li>
          <li>
            Businesses that have sensitive or highly regulated data that needs
            careful handling and compliance with national or regulatory
            standards.
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
    tooltip: "Website Technical Debt Repair",
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
            I dig into old sites and find bugs, outdated features, and
            performance issues that have built up over time.
          </li>
          <li>
            I&apos;ll often migrate to new software or update existing software that
            is outdated or no longer supported.
          </li>
          <li>
            This typically includes regulatory needs, automation, better SEO or
            new styles.
          </li>
          <li>
            I deliver a recorded video of what I did and a call if you&apos;d
            like to discuss it.
          </li>
          <li>
            For an extensive list of the software I can build with to see my{" "}
            <Link href={pageData[7].data.href}>About &gt; Skills</Link> section.
          </li>
        </ul>
        <h2> Intended For: </h2>
        <ul>
          <li>
            Large websites that have built up some technical “debt”— meaning
            there may be hidden or unbearable bugs, outdated features, or
            performance issues that have piled up over time.
          </li>
          <li>
            Websites that have been around for a while and need &quot;love&quot;
            but you don&apos;t want to pay for a full rebuild but do need the
            improved functionality spread out over monthly payments.
          </li>
        </ul>
      </>
    ),
  },
];
