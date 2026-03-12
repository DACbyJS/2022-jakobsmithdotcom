import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

import InternalAudienceLinks from "../../../components/blog/InternalAudienceLinks";
import MdxInternalLink from "../../../components/blog/MdxInternalLink";
import { BLOG_CATEGORY_LABELS } from "../../../lib/constants/blog";
import { useTheme } from "../../../lib/contexts/ThemeProvider";
import { getAllPostSlugs, getPostBySlug } from "../../../lib/blog/posts";
import { getCanonicalUrl } from "../../../lib/utilities/seo";

const formatDate = (value) => {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const mdxComponents = {
  a: ({ href = "", children, ...rest }) => {
    if (href.startsWith("/")) {
      return (
        <MdxInternalLink href={href}>
          {children}
        </MdxInternalLink>
      );
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  },
  InternalLink: MdxInternalLink,
};

export async function getStaticPaths() {
  return {
    paths: getAllPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  };
}

export default function BlogPostPage({ post }) {
  const { setTheme } = useTheme();
  const canonicalUrl = getCanonicalUrl(`/blog/${post.slug}/`);

  useEffect(() => {
    setTheme("rainbow");
  }, [setTheme]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Person",
      name: "Jakob Smith",
    },
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags,
    description: post.description,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    publisher: {
      "@type": "Person",
      name: "Jakob Smith",
    },
  };

  return (
    <>
      <Head>
        <title>{`${post.title} | Jakob Smith Blog`}</title>
        <meta name="description" content={post.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | Jakob Smith Blog`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={getCanonicalUrl("/images/jakob-1.jpg")} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Jakob Smith" />
        <meta property="article:section" content={post.category} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Jakob Smith Blog`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={getCanonicalUrl("/images/jakob-1.jpg")} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
        />
      </Head>

      <main className="bg-js-black text-js-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <article className="mx-auto max-w-[900px] border-2 border-js-white bg-js-white text-js-black p-6 sm:p-10 lg:p-12">
          <Link href="/blog/" className="font-overpass-mono uppercase tracking-[0.1em] text-[1.2ch] underline underline-offset-4 hover:opacity-70 transition-opacity">
            ← Back to Blog
          </Link>

          <header className="mt-6 sm:mt-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-overpass-mono uppercase tracking-[0.1em] text-[1.2ch] px-2 py-1 border border-js-black/30">
                {BLOG_CATEGORY_LABELS[post.category] ?? post.category}
              </span>
              <time className="font-overpass text-[1.5ch] text-js-black/70">{formatDate(post.date)}</time>
            </div>

            <h1 className="font-js-math text-[2.4rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.08] text-balance">
              {post.title}
            </h1>

            <p className="font-overpass text-[1.9ch] leading-[1.6] mt-5 text-js-black/85">{post.description}</p>

            <p className="font-overpass-mono uppercase tracking-[0.08em] text-[1.2ch] mt-5 text-js-black/70">
              By {post.author}
            </p>
          </header>

          <section className="default-blurb-style blurb-style-blue mt-8 text-[1.8ch] sm:text-[2ch] leading-[1.7]">
            <MDXRemote {...post.mdxSource} components={mdxComponents} />
          </section>

          {post.tags?.length > 0 && (
            <footer className="mt-8 pt-6 border-t border-js-black/15">
              <p className="font-overpass-mono uppercase tracking-[0.1em] text-[1.1ch] text-js-black/65 mb-3">Tags</p>
              <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="font-overpass text-[1.5ch] px-2 py-1 border border-js-black/20">
                    {tag}
                  </li>
                ))}
              </ul>
            </footer>
          )}

          <InternalAudienceLinks category={post.category} />
        </article>
      </main>
    </>
  );
}
