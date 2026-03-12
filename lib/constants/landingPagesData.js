import { pageData } from "./pageData";
import { servicesData } from "./servicesData";

const topLevelAudiencePages = {
  "website-designers": pageData.find((page) => page.slug === "website-designers"),
  "digital-marketing": pageData.find((page) => page.slug === "digital-marketing"),
  "public-good": pageData.find((page) => page.slug === "public-good"),
};

const servicesBySlug = Object.fromEntries(
  servicesData.map((service) => [service.slug, service])
);

export const audiencesData = [
  {
    slug: "website-designers",
    title: "Website Designers",
    href: topLevelAudiencePages["website-designers"]?.data.href ?? "/website-designers/",
    theme: "red",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    href: topLevelAudiencePages["digital-marketing"]?.data.href ?? "/digital-marketing/",
    theme: "yellow",
  },
  {
    slug: "public-good",
    title: "Public Good",
    href: topLevelAudiencePages["public-good"]?.data.href ?? "/public-good/",
    theme: "blue",
  },
];

export const landingPagesData = [
  {
    id: "landing-white-label-development",
    title: "White-Label Development",
    href: "/website-designers/white-label-development/",
    description:
      "A behind-the-scenes development partner for agencies and designers who need a reliable build hand.",
    audienceSlug: "website-designers",
    theme: "red",
    primaryServiceSlugs: ["additions", "rebuild"],
    supportingServiceSlugs: ["foundations", "simple-seo", "support"],
  },
  {
    id: "landing-nonprofit-website-management",
    title: "Nonprofit Website Management",
    href: "/public-good/nonprofit-website-management/",
    description:
      "Affordable website management for nonprofits with maintenance, SEO, accessibility, and donation flow support.",
    audienceSlug: "public-good",
    theme: "blue",
    primaryServiceSlugs: ["foundations", "simple-seo"],
    supportingServiceSlugs: ["support", "hosting-updates", "additions"],
  },
  {
    id: "landing-mockup-to-website",
    title: "Turn Your Design Mockup Into a Live Website",
    href: "/website-designers/mockup-to-website/",
    description:
      "From Figma, Sketch, or PSD to a production-ready website with clean handoff and dependable launch support.",
    audienceSlug: "website-designers",
    theme: "red",
    primaryServiceSlugs: ["rebuild", "additions"],
    supportingServiceSlugs: ["foundations", "simple-seo", "support"],
  },
  {
    id: "landing-wordpress-developer",
    title: "WordPress Developer for Design Agencies",
    href: "/website-designers/wordpress-developer/",
    description:
      "Custom WordPress development support for agencies that need reliable implementation, maintenance, and technical depth.",
    audienceSlug: "website-designers",
    theme: "red",
    primaryServiceSlugs: ["foundations", "additions"],
    supportingServiceSlugs: ["rebuild", "support", "hosting-updates"],
  },
  {
    id: "landing-seo-implementation",
    title: "SEO Implementation for Marketing Agencies",
    href: "/digital-marketing/seo-implementation/",
    description:
      "Technical and on-page SEO implementation support for marketing teams that already have strategy and need execution.",
    audienceSlug: "digital-marketing",
    theme: "yellow",
    primaryServiceSlugs: ["simple-seo", "additions"],
    supportingServiceSlugs: ["ai-discovery", "support", "foundations"],
  },
  {
    id: "landing-campaign-landing-pages",
    title: "Landing Page Development for Marketing Campaigns",
    href: "/digital-marketing/landing-pages/",
    description:
      "High-velocity landing page builds tuned for paid and organic campaigns, with conversion-focused implementation.",
    audienceSlug: "digital-marketing",
    theme: "yellow",
    primaryServiceSlugs: ["additions", "simple-seo"],
    supportingServiceSlugs: ["content-gen", "support", "rebuild"],
  },
  {
    id: "landing-speed-optimization",
    title: "Website Speed Optimization & Core Web Vitals",
    href: "/digital-marketing/speed-optimization/",
    description:
      "Improve Core Web Vitals, reduce load times, and increase campaign performance through practical frontend and hosting optimizations.",
    audienceSlug: "digital-marketing",
    theme: "yellow",
    primaryServiceSlugs: ["foundations", "hosting-updates"],
    supportingServiceSlugs: ["simple-seo", "rebuild", "support"],
  },
];

export const getAudienceBySlug = (audienceSlug) =>
  audiencesData.find((audience) => audience.slug === audienceSlug);

export const getServiceBySlug = (serviceSlug) => servicesBySlug[serviceSlug];

export const getLandingPagesByAudience = (audienceSlug) =>
  landingPagesData.filter((landingPage) => landingPage.audienceSlug === audienceSlug);

export const getLandingPagesByServiceSlug = (serviceSlug) =>
  landingPagesData.filter(
    (landingPage) =>
      landingPage.primaryServiceSlugs.includes(serviceSlug)
      || landingPage.supportingServiceSlugs.includes(serviceSlug)
  );

export const expandLandingPageRelationships = (landingPage) => ({
  ...landingPage,
  audience: getAudienceBySlug(landingPage.audienceSlug),
  primaryServices: landingPage.primaryServiceSlugs
    .map(getServiceBySlug)
    .filter(Boolean),
  supportingServices: landingPage.supportingServiceSlugs
    .map(getServiceBySlug)
    .filter(Boolean),
});
