import { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { useTheme } from "../../lib/contexts/ThemeProvider";
import { BLOG_CATEGORIES, BLOG_CATEGORY_LABELS, POSTS_PER_PAGE } from "../../lib/constants/blog";
import { getAllPosts } from "../../lib/blog/posts";
import { getCanonicalUrl } from "../../lib/utilities/seo";
import { formatDate } from "../../lib/utilities/dates";

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
    excerpt: post.excerpt,
  }));

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndexPage({ posts }) {
  const { setTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryDropdownRef = useRef(null);

  useEffect(() => {
    setTheme("rainbow");
  }, [setTheme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsCategoryOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return posts;
    }

    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const pagedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <>
      <Head>
        <title>Jakob Smith&apos;s Blog</title>
        <meta name="description" content="Website management insights for web designers, digital marketers, nonprofits, and public-good teams." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={getCanonicalUrl("/blog/")} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jakob Smith&apos;s Blog" />
        <meta property="og:description" content="Website management insights for web designers, digital marketers, nonprofits, and public-good teams." />
        <meta property="og:url" content={getCanonicalUrl("/blog/")} />
        <meta property="og:image" content={getCanonicalUrl("/images/jakob-1.jpg")} />
      </Head>

      <main className="bg-js-black text-js-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <section className="border-2 border-js-white p-6 sm:p-10 bg-js-black">
            <p className="font-overpass-mono uppercase tracking-[0.2em] text-[1.1ch] sm:text-[1.2ch] text-js-white/70">Blog</p>
            <h1 className="font-js-math text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[1.05] mt-4 text-balance">Website Notes, Strategy, and Practical Guides</h1>
            <p className="font-overpass text-[1.8ch] sm:text-[2ch] leading-[1.6] mt-5 max-w-[75ch] text-js-white/85">
              Browse by audience, then dive into practical writing about web management, communication, and growth.
            </p>
          </section>

          <section className="mt-8 sm:mt-10 border-2 border-js-white bg-js-white text-js-black p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <label htmlFor="blog-category-filter" className="font-overpass-mono uppercase tracking-[0.12em] text-[1.2ch] sm:text-[1.3ch]">
                Filter by category
              </label>
              <div ref={categoryDropdownRef} className="relative sm:min-w-[220px]">
                <button
                  id="blog-category-filter"
                  type="button"
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isCategoryOpen}
                  aria-label="Filter posts by category"
                  className="w-full flex items-center justify-between gap-3 font-overpass text-[1.8ch] border border-js-black px-3 py-2 bg-js-white text-js-black"
                >
                  <span>
                    {selectedCategory === "all" ? "All Categories" : BLOG_CATEGORY_LABELS[selectedCategory]}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      transform: isCategoryOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {/* Bold geometric download-style arrow: rectangle with arrow notch */}
                    <path d="M3 3 L17 3 L17 8 L12.5 8 L10 15 L7.5 8 L3 8 Z" />
                  </svg>
                </button>

                {isCategoryOpen && (
                  <ul
                    role="listbox"
                    aria-label="Blog category"
                    className="absolute z-10 top-full left-0 mt-0.5 w-full border border-js-black bg-js-white text-js-black font-overpass text-[1.8ch]"
                  >
                    <li
                      role="option"
                      aria-selected={selectedCategory === "all"}
                      onClick={() => { setSelectedCategory("all"); setIsCategoryOpen(false); }}
                      className={`px-3 py-2 cursor-pointer hover:bg-js-black hover:text-js-white transition-colors${selectedCategory === "all" ? " font-bold" : ""}`}
                    >
                      All Categories
                    </li>
                    {BLOG_CATEGORIES.map((category) => (
                      <li
                        key={category}
                        role="option"
                        aria-selected={selectedCategory === category}
                        onClick={() => { setSelectedCategory(category); setIsCategoryOpen(false); }}
                        className={`px-3 py-2 cursor-pointer hover:bg-js-black hover:text-js-white transition-colors${selectedCategory === category ? " font-bold" : ""}`}
                      >
                        {BLOG_CATEGORY_LABELS[category]}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          <section className="mt-8 sm:mt-10 grid gap-5 sm:gap-6">
            {pagedPosts.length === 0 && (
              <article className="border-2 border-js-white p-6 sm:p-8 bg-js-black">
                <h2 className="font-js-math text-[2rem] sm:text-[2.6rem] leading-tight">No posts found for that category yet.</h2>
              </article>
            )}

            {pagedPosts.map((post) => (
              <article key={post.slug} className="border-2 border-js-white p-6 sm:p-8 bg-js-black">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-overpass-mono uppercase tracking-[0.1em] text-[1.2ch] px-2 py-1 border border-js-white/50">
                    {BLOG_CATEGORY_LABELS[post.category]}
                  </span>
                  <time className="font-overpass text-[1.5ch] text-js-white/75">{formatDate(post.date)}</time>
                </div>
                <h2 className="font-js-math text-[2.2rem] sm:text-[3rem] leading-[1.08] text-balance">
                  <Link href={`/blog/${post.slug}/`} className="underline decoration-1 underline-offset-4 hover:opacity-75 transition-opacity">
                    {post.title}
                  </Link>
                </h2>
                <p className="font-overpass text-[1.7ch] sm:text-[1.9ch] leading-[1.65] mt-4 text-js-white/85">{post.excerpt}</p>
              </article>
            ))}
          </section>

          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="font-overpass-mono uppercase tracking-[0.1em] text-[1.3ch] border border-js-white px-3 py-2 disabled:opacity-40"
              >
                Previous
              </button>
              <p className="font-overpass text-[1.7ch]">Page {currentPage} of {totalPages}</p>
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="font-overpass-mono uppercase tracking-[0.1em] text-[1.3ch] border border-js-white px-3 py-2 disabled:opacity-40"
              >
                Next
              </button>
            </nav>
          )}
        </div>
      </main>
    </>
  );
}
