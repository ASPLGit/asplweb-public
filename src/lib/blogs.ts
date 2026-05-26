import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostFrontmatter, BlogType } from "@/types/app";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content/blog");

/**
 * Safely parses an MDX/MD file and maps its metadata to the BlogPost schema.
 */
function parseMDXFile(filePath: string, slug: string): BlogPost {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const title = data.title || "";
  const description = data.description || data.excerpt || "";
  const date = data.date || "";
  const category = data.category || "";
  const blogType = (data.blogType || "Software") as BlogType;
  const coverImage = data.coverImage || data.image || "";

  // Ensure tags is an array of strings
  let tags: string[] = [];
  if (Array.isArray(data.tags)) {
    tags = data.tags;
  } else if (typeof data.tags === "string") {
    tags = [data.tags];
  } else {
    // Fallback: build tags from category and blogType
    if (category) tags.push(category);
    if (blogType) tags.push(blogType);
  }

  return {
    slug,
    title,
    description,
    date,
    tags,
    coverImage,
    category,
    blogType,
    content,
  };
}

/**
 * Retrieves all blog posts from the /content/blog directory.
 */
export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(BLOG_CONTENT_DIR, file);
      return parseMDXFile(fullPath, slug);
    });
}

export interface GetBlogPostsOptions {
  query?: string;
  category?: string;
  blogType?: string;
  tag?: string;
  sortBy?: "date-desc" | "date-asc";
  limit?: number;
  page?: number;
}

/**
 * Retrieves, filters, searches, and sorts blog posts dynamically.
 */
export function getBlogPosts(options: GetBlogPostsOptions = {}): {
  posts: BlogPost[];
  total: number;
} {
  let posts = getAllBlogPosts();

  // 1. Filter by category
  if (options.category) {
    const targetCat = options.category.toLowerCase();
    posts = posts.filter(
      (post) => post.category.toLowerCase() === targetCat
    );
  }

  // 2. Filter by blogType
  if (options.blogType) {
    const targetType = options.blogType.toLowerCase();
    posts = posts.filter(
      (post) => post.blogType.toLowerCase() === targetType
    );
  }

  // 3. Filter by tag
  if (options.tag) {
    const targetTag = options.tag.toLowerCase();
    posts = posts.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === targetTag)
    );
  }

  // 4. Search title, description, content, or tags
  if (options.query) {
    const searchLow = options.query.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchLow) ||
        post.description.toLowerCase().includes(searchLow) ||
        post.content.toLowerCase().includes(searchLow) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchLow))
    );
  }

  // 5. Sort by date
  const sortBy = options.sortBy || "date-desc";
  posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime() || 0;
    const dateB = new Date(b.date).getTime() || 0;
    return sortBy === "date-asc" ? dateA - dateB : dateB - dateA;
  });

  const total = posts.length;

  // 6. Pagination / Limit
  if (options.limit) {
    const page = options.page || 1;
    const startIndex = (page - 1) * options.limit;
    posts = posts.slice(startIndex, startIndex + options.limit);
  }

  return {
    posts,
    total,
  };
}

/**
 * Retrieves a single blog post by its slug.
 * Returns null if not found.
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);

  let fullPath = "";
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    return null;
  }

  try {
    return parseMDXFile(fullPath, slug);
  } catch (error) {
    console.error(`Error reading MDX file for slug: ${slug}`, error);
    return null;
  }
}

/**
 * Retrieves related posts based on tag and category overlap.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts().filter((post) => post.slug !== slug);

  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // Category match
    if (post.category && post.category === currentPost.category) {
      score += 5;
    }

    // BlogType match
    if (post.blogType && post.blogType === currentPost.blogType) {
      score += 3;
    }

    // Tag match
    const commonTags = post.tags.filter((t) => currentPost.tags.includes(t));
    score += commonTags.length * 2;

    return { post, score };
  });

  return scoredPosts
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .map((item) => item.post)
    .slice(0, limit);
}
