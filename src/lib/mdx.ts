import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostFrontmatter } from "@/types/app";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content/blog");

/**
 * Retrieves all blog posts from the /content/blog directory.
 * Parsed and sorted by date in descending order.
 */
export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_CONTENT_DIR);

  const posts: BlogPost[] = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(BLOG_CONTENT_DIR, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);
      const frontmatter = data as BlogPostFrontmatter;

      return {
        slug,
        content,
        ...frontmatter,
      };
    });

  // Sort posts by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Retrieves a single blog post by its slug.
 * Returns null if the post does not exist.
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
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as BlogPostFrontmatter;

    return {
      slug,
      content,
      ...frontmatter,
    };
  } catch (error) {
    console.error(`Error reading MDX file for slug: ${slug}`, error);
    return null;
  }
}
