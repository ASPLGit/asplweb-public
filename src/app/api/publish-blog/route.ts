import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      excerpt,
      slug,
      category,
      blogType,
      coverImage,
      date,
      tags,
      content,
      faqs,
    } = body;

    // 1. Validation
    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug, and content are mandatory." },
        { status: 400 }
      );
    }

    // Clean slug: lowercase, hyphenated, alphanumeric and hyphens only
    const cleanSlug = slug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    if (!cleanSlug) {
      return NextResponse.json(
        { error: "Invalid slug provided." },
        { status: 400 }
      );
    }

    // 2. Prepare content and format FAQs in markdown if provided
    let finalContent = content.trim();
    if (faqs && Array.isArray(faqs) && faqs.length > 0) {
      // Filter out empty FAQs
      const validFaqs = faqs.filter(f => f.question?.trim() && f.answer?.trim());
      if (validFaqs.length > 0) {
        finalContent += "\n\n## Frequently Asked Questions\n";
        validFaqs.forEach((faq) => {
          finalContent += `\n### ${faq.question.trim()}\n\n${faq.answer.trim()}\n`;
        });
      }
    }

    // 3. Format frontmatter
    const blogDate = date || new Date().toISOString().split("T")[0];
    const finalDescription = description || excerpt || "";
    const finalCover = coverImage || "/images/blogs/ai.png";
    const finalCategory = category || "AI & ML";
    const finalBlogType = blogType || "AI";

    let finalTags: string[] = [];
    if (Array.isArray(tags)) {
      finalTags = tags;
    } else if (typeof tags === "string") {
      finalTags = [tags];
    } else {
      finalTags = [finalCategory, finalBlogType];
    }

    // Build the MDX string
    const mdxString = `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(finalDescription)}
date: ${JSON.stringify(blogDate)}
tags: ${JSON.stringify(finalTags)}
coverImage: ${JSON.stringify(finalCover)}
category: ${JSON.stringify(finalCategory)}
blogType: ${JSON.stringify(finalBlogType)}
---

${finalContent}
`;

    // 4. Save to content/blog/[slug].mdx
    const blogDir = path.join(process.cwd(), "content/blog");
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    const filePath = path.join(blogDir, `${cleanSlug}.mdx`);
    fs.writeFileSync(filePath, mdxString, "utf8");

    return NextResponse.json({
      success: true,
      message: "Blog post published successfully!",
      slug: cleanSlug,
      filePath: `/content/blog/${cleanSlug}.mdx`,
    });
  } catch (error: any) {
    console.error("Error in publish-blog API route:", error);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred while publishing." },
      { status: 500 }
    );
  }
}
