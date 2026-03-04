import { pageData } from "../lib/constants";

export const aboutPageContent = {
  muxWords: ["About.", "Story.", "Mission.", "Vision."],
  firstWhiteBlackBox: {
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
  hero: {
    title: {
      line1: "Who Is",
      line2: "Jakob Smith?",
    },
    introduction: [
      "I am a qualified digital designer and web developer with many years of diverse experience creating, refactoring and maintaining marketing websites, emails, advertisements and web applications.",
      "My strengths are flexibility and intuition. I understand that in marketing and advertising, human needs and feelings override processes and perfectionism. I believe that the Internet should continue to transcend barriers between people and information. As an active participant in it's expansion, I hope to use it to create more unprecedented transparency and equity.",
      "These qualities and beliefs make me an adaptable generalist who can offer insight, clarity and connection to every person I meet in you and your client's organization.",
    ],
  },
  personal: {
    heading: "Personal",
    pic: {
      heading: "Pic",
      alt: "Jakob Smith",
    },
    links: {
      heading: "Links",
      items: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jakob-smith-webdev/",
        },
        { name: "Github", url: "https://github.com/DACbyJS" },
        {
          name: "Retro Store",
          url: "https://contraconsume.com/",
        },
        { name: "Artwork/Writing", url: "https://ardenbriarsmith.com/" },
        { name: "Music", url: "https://soundcloud.com/smiththeband/" },
      ],
    },
  },
  coreValues: {
    heading: "Core Values",
    values: [
      "Communication",
      "Responsibility",
      "Thoughtfulness",
      "Determination",
      "Artistry",
      "Creativity",
      "Liberty",
      "Compassion",
      "Prosperity",
    ],
  },
  technicalExpertise: {
    heading: "Technical Expertise",
    developmentStack: {
      heading: "Development Stack",
      sections: [
        {
          title: "Content Management",
          content:
            "Craft CMS • WordPress • Contentful • Sanity • Expression Engine • Joomla",
        },
        {
          title: "Backend Languages",
          content: "PHP • Ruby • Python",
        },
        {
          title: "Frameworks",
          content: "Laravel • Symfony • Yii • Ruby on Rails",
        },
        {
          title: "Frontend Technologies",
          content: [
            "HTML • CSS • SCSS • Tailwind • Bootstrap",
            "JavaScript • React • Next.js • Alpine.js • jQuery",
          ],
        },
      ],
    },
    infrastructure: {
      heading: "Infrastructure & Tools",
      sections: [
        {
          title: "Hosting & Cloud",
          content: [
            "Kinsta • WpEngine • Linode • Servd",
            "AWS S3 • CloudFront • Google Cloud",
          ],
        },
        {
          title: "Development Environment",
          content: [
            "DDEV • Lando • Docker • Git • Trellis",
            "VS Code on Linux Mint Cinnamon",
          ],
        },
        {
          title: "Database & APIs",
          content: ["MySQL • PostgreSQL • MariaDB", "GraphQL • REST APIs"],
        },
      ],
    },
    experienceOverview: {
      heading: "Experience Overview",
      stats: [
        { number: "50+", label: "Server-side Websites" },
        { number: "20+", label: "Client-side Websites" },
        { number: "7", label: "Production Web Apps" },
      ],
    },
  },
};
