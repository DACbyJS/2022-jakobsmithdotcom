import Link from "next/link";

import { BLOG_CATEGORY_LABELS } from "../../lib/constants/blog";

const categoryLinks = {
  "web-designers": [
    { href: "/website-designers/", label: "Website Designers" },
    { href: "/website-designers/white-label-development/", label: "White Label Development" },
  ],
  "digital-marketing": [
    { href: "/digital-marketing/", label: "Digital Marketing" },
    { href: "/digital-marketing/seo-implementation/", label: "SEO Implementation" },
  ],
  "public-good": [
    { href: "/public-good/", label: "Public Good" },
    { href: "/public-good/nonprofit-website-management/", label: "Nonprofit Website Management" },
  ],
  general: [
    { href: "/services/", label: "All Services" },
    { href: "/contact/", label: "Contact Jakob" },
  ],
};

export default function InternalAudienceLinks({ category }) {
  const links = categoryLinks[category] ?? categoryLinks.general;

  return (
    <aside className="rounded-sm border border-js-black/20 bg-js-white/75 p-5 sm:p-6 mt-10">
      <p className="font-overpass-mono uppercase tracking-[0.2em] text-[1.1ch] sm:text-[1.2ch] text-js-black/70 mb-3">
        Related {BLOG_CATEGORY_LABELS[category] ?? "General"} Pages
      </p>
      <ul className="list-none p-0 m-0 space-y-2">
        {links.map((linkItem) => (
          <li key={linkItem.href} className="font-overpass text-[1.7ch] leading-[1.5]">
            <Link href={linkItem.href} className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              {linkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
