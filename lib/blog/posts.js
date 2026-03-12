import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { BLOG_CATEGORIES } from "../constants/blog";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "blog-content");

const MARKDOWN_EXTENSIONS = [".md", ".mdx"];

const normalizeDateValue = (value) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value);
};

const getPostDateValue = (dateString) => {
  const parsed = Date.parse(dateString);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const stripMarkdown = (value = "") =>
  value
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[[^\]]*\]\([^)]*\)/g, "$1")
    .replace(/[>#*_~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const buildExcerpt = (description = "", content = "") => {
  const candidate = description?.trim() || stripMarkdown(content);

  if (candidate.length <= 190) {
    return candidate;
  }

  return `${candidate.slice(0, 187).trim()}...`;
};

const ensureValidCategory = (category, slug) => {
  if (!BLOG_CATEGORIES.includes(category)) {
    throw new Error(
      `Invalid category \"${category}\" in blog post \"${slug}\". Allowed categories: ${BLOG_CATEGORIES.join(", ")}`,
    );
  }
};

const ensureRequiredFrontmatter = (frontmatter, slug) => {
  const requiredFields = [
    "title",
    "date",
    "description",
    "category",
    "tags",
    "author",
  ];

  requiredFields.forEach((field) => {
    if (frontmatter[field] === undefined || frontmatter[field] === null || frontmatter[field] === "") {
      throw new Error(`Missing required frontmatter field \"${field}\" in blog post \"${slug}\".`);
    }
  });

  if (!Array.isArray(frontmatter.tags)) {
    throw new Error(`The \"tags\" frontmatter value in blog post \"${slug}\" must be an array.`);
  }
};

const toSlugFromFileName = (fileName) =>
  fileName.replace(/\.mdx?$/i, "");

const getPostFileBySlug = (slug) => {
  const possibleFiles = MARKDOWN_EXTENSIONS.map((extension) =>
    path.resolve(BLOG_CONTENT_DIR, `${slug}${extension}`),
  );

  const existingFile = possibleFiles.find((filePath) => {
    if (!filePath.startsWith(BLOG_CONTENT_DIR + path.sep)) {
      throw new Error(`Path traversal attempt detected for slug "${slug}".`);
    }
    return fs.existsSync(filePath);
  });

  if (!existingFile) {
    throw new Error(`No blog post file found for slug \"${slug}\".`);
  }

  return existingFile;
};

export const getAllPostSlugs = () => {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((fileName) => MARKDOWN_EXTENSIONS.some((ext) => fileName.endsWith(ext)))
    .map((fileName) => toSlugFromFileName(fileName))
    .sort();
};

export const getPostBySlug = (slug) => {
  const filePath = getPostFileBySlug(slug);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  ensureRequiredFrontmatter(data, slug);
  ensureValidCategory(data.category, slug);

  return {
    slug,
    title: data.title,
    date: normalizeDateValue(data.date),
    description: data.description,
    category: data.category,
    tags: data.tags,
    author: data.author,
    content,
    excerpt: buildExcerpt(data.description, content),
  };
};

export const getAllPosts = () => {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => getPostDateValue(b.date) - getPostDateValue(a.date));
};
