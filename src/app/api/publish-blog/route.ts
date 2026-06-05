
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  requireAdmin,
} from "@/lib/require-admin";

export async function POST(request: Request) {
  try {
    try {
      await requireAdmin();
    } catch {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const formData = await request.formData();

    const blogDataString = formData.get("blogData") as string;
    const imageFile = formData.get("coverImage") as File | null;

    if (!blogDataString) {
      return NextResponse.json(
        {
          error: "Missing blog data.",
        },
        {
          status: 400,
        }
      );
    }

    const blogData = JSON.parse(blogDataString);

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
    } = blogData;

    // =====================================================
    // VALIDATION
    // =====================================================

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: title, slug, and content are mandatory.",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================================
    // CLEAN SLUG
    // =====================================================

    const cleanSlug = slug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    if (!cleanSlug) {
      return NextResponse.json(
        {
          error: "Invalid slug provided.",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================================
    // IMAGE UPLOAD
    // =====================================================

    let finalCoverImage = coverImage || "/images/blogs/ai.png";

    if (imageFile) {
      const uploadDir = path.join(
        process.cwd(),
        "public",
        "images",
        "blogs"
      );

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, {
          recursive: true,
        });
      }

      const existingFiles = fs
        .readdirSync(uploadDir)
        .filter((file) =>
          /^blog\d+\.(png|jpg|jpeg|webp)$/i.test(file)
        );

      const nextIndex = existingFiles.length;

      const extension =
        imageFile.name.split(".").pop()?.toLowerCase() || "webp";

      const allowedExtensions = [
        "png",
        "jpg",
        "jpeg",
        "webp",
      ];

      if (!allowedExtensions.includes(extension)) {
        return NextResponse.json(
          {
            error:
              "Only PNG, JPG, JPEG and WEBP files are allowed.",
          },
          {
            status: 400,
          }
        );
      }

      const imageName = `blog${nextIndex}.${extension}`;

      const imagePath = path.join(
        uploadDir,
        imageName
      );

      const bytes = await imageFile.arrayBuffer();

      fs.writeFileSync(
        imagePath,
        Buffer.from(bytes)
      );

      finalCoverImage = `https://aplombsoft.com/public/images/blogs/${imageName}`;
    }

    // =====================================================
    // APPEND FAQS TO CONTENT
    // =====================================================

    let finalContent = content.trim();

    if (
      faqs &&
      Array.isArray(faqs) &&
      faqs.length > 0
    ) {
      const validFaqs = faqs.filter(
        (f) =>
          f.question?.trim() &&
          f.answer?.trim()
      );

      if (validFaqs.length > 0) {
        finalContent +=
          "\n\n## Frequently Asked Questions\n";

        validFaqs.forEach((faq) => {
          finalContent += `
### ${faq.question.trim()}

${faq.answer.trim()}
`;
        });
      }
    }

    // =====================================================
    // FRONTMATTER DATA
    // =====================================================

    const blogDate =
      date ||
      new Date().toISOString().split("T")[0];

    const finalDescription =
      description || excerpt || "";

    const finalCategory =
      category || "AI & ML";

    const finalBlogType =
      blogType || "AI";

    let finalTags: string[] = [];

    if (Array.isArray(tags)) {
      finalTags = tags;
    } else if (
      typeof tags === "string"
    ) {
      finalTags = [tags];
    } else {
      finalTags = [
        finalCategory,
        finalBlogType,
      ];
    }

    // =====================================================
    // MDX FILE
    // =====================================================

    const mdxString = `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(
      finalDescription
    )}
date: ${JSON.stringify(blogDate)}
tags: ${JSON.stringify(finalTags)}
coverImage: ${JSON.stringify(
      finalCoverImage
    )}
category: ${JSON.stringify(
      finalCategory
    )}
blogType: ${JSON.stringify(
      finalBlogType
    )}
---

${finalContent}
`;

    const blogDir = path.join(
      process.cwd(),
      "content/blog"
    );

    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, {
        recursive: true,
      });
    }

    const filePath = path.join(
      blogDir,
      `${cleanSlug}.mdx`
    );

    fs.writeFileSync(
      filePath,
      mdxString,
      "utf8"
    );

    return NextResponse.json({
      success: true,
      message:
        "Blog post published successfully!",
      slug: cleanSlug,
      coverImage: finalCoverImage,
      filePath: `/content/blog/${cleanSlug}.mdx`,
    });
  } catch (error: any) {
    console.error(
      "Error in publish-blog API route:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "An unexpected error occurred while publishing.",
      },
      {
        status: 500,
      }
    );
  }
}
