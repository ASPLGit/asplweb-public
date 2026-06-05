export const dynamic = "force-dynamic";

import {
    getBlogPostBySlug,
    getRelatedPosts,
} from "@/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Clock3,
    Tag,
} from "lucide-react";
import FAQSection from "@/components/common/FAQ";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams?: Promise<{
        page?: string;
    }>;
}

type BlogFaq = {
    question: string;
    answer: string;
};

type ArticleHeading = {
    id: string;
    text: string;
};

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlogPostBySlug(slug);

    if (!blog) return {};

    const baseUrl = "https://aplombsoft.com";
    const postUrl = `${baseUrl}/blogs/${blog.slug}`;
    const imageUrl = blog.coverImage.startsWith("http")
        ? blog.coverImage
        : `${baseUrl}${blog.coverImage}`;

    return {
        title: blog.title,
        description: blog.description,
        alternates: {
            canonical: `/blogs/${blog.slug}`,
        },
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: postUrl,
            siteName: "Aplomb Soft",
            type: "article",
            publishedTime: blog.date,
            authors: ["Aplomb Soft Pvt. Ltd."],
            tags: blog.tags,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: [imageUrl],
        },
    };
}

function extractFaqsFromContent(content: string): BlogFaq[] {
    const faqs: BlogFaq[] = [];
    const faqSectionIndex = content.indexOf("## Frequently Asked Questions");
    if (faqSectionIndex === -1) return faqs;

    const faqContent = content.substring(faqSectionIndex);
    const parts = faqContent.split("### ");

    for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        const lines = part.split("\n");
        const question = lines[0].trim();
        const answer = lines.slice(1).join("\n").trim();

        if (question && answer) {
            faqs.push({
                question,
                answer,
            });
        }
    }

    return faqs;
}

function stripFaqsFromContent(content: string) {
    const faqSectionIndex = content.indexOf("## Frequently Asked Questions");
    if (faqSectionIndex === -1) return content;

    return content.substring(0, faqSectionIndex).trim();
}

function getReadingTime(content: string) {
    const words = content
        .replace(/```[\s\S]*?```/g, "")
        .split(/\s+/)
        .filter(Boolean).length;

    return Math.max(1, Math.ceil(words / 220));
}

function createSlug(text: string) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

function extractHeadings(content: string): ArticleHeading[] {
    return Array.from(content.matchAll(/^##\s+(.+)$/gm))
        .map((match) => {
            const text = match[1].trim();

            return {
                text,
                id: createSlug(text),
            };
        })
        .filter((heading) => heading.id);
}

function stripMarkdown(value: string) {
    return value
        .replace(/[`*_>#-]/g, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\s+/g, " ")
        .trim();
}

const mdxComponents = {
    h2: (props: ComponentProps<"h2">) => {
        const text =
            typeof props.children === "string"
                ? props.children
                : "";
        const id = text ? createSlug(text) : undefined;

        return (
            <h2
                id={id}
                className="scroll-mt-28 pt-8 mb-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950 leading-tight"
                {...props}
            />
        );
    },
    h3: (props: ComponentProps<"h3">) => (
        <h3
            className="pt-4 text-xl sm:text-2xl mb-2 font-semibold tracking-tight text-slate-900 leading-snug"
            {...props}
        />
    ),
    p: (props: ComponentProps<"p">) => (
        <p
            className="text-base sm:text-lg text-slate-700 leading-8 mb-5"
            {...props}
        />
    ),
    ul: (props: ComponentProps<"ul">) => (
        <ul
            className="my-6 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6"
            {...props}
        />
    ),
    ol: (props: ComponentProps<"ol">) => (
        <ol
            className="my-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
            {...props}
        />
    ),
    li: (props: ComponentProps<"li">) => (
        <li
            className="ml-5 pl-2 text-base text-slate-700 leading-7 marker:text-blue-500"
            {...props}
        />
    ),
    a: (props: ComponentProps<"a">) => (
        <a
            className="font-medium text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700"
            {...props}
        />
    ),
    blockquote: (props: ComponentProps<"blockquote">) => (
        <blockquote
            className="my-8 border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-base sm:text-lg font-medium text-slate-800"
            {...props}
        />
    ),
    table: (props: ComponentProps<"table">) => (
        <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table
                className="min-w-full divide-y divide-slate-200 text-left text-sm"
                {...props}
            />
        </div>
    ),
    th: (props: ComponentProps<"th">) => (
        <th
            className="bg-slate-950 px-4 py-3 font-semibold text-white"
            {...props}
        />
    ),
    td: (props: ComponentProps<"td">) => (
        <td
            className="border-t border-slate-200 px-4 py-3 text-slate-700"
            {...props}
        />
    ),
    code: (props: ComponentProps<"code">) => (
        <code
            className="rounded-md bg-slate-100 px-1.5 py-0.5 text-sm text-slate-900"
            {...props}
        />
    ),
};

export default async function BlogDetailsPage({
    params,
    searchParams,
}: PageProps) {
    const { slug } = await params;
    const blog = getBlogPostBySlug(slug);

    if (!blog) return notFound();

    const faqs = extractFaqsFromContent(blog.content);
    const articleContent = stripFaqsFromContent(blog.content);
    const readingTime = getReadingTime(articleContent);
    const headings = extractHeadings(articleContent).slice(0, 6);
    const formattedDate = new Date(blog.date).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    );

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.description,
        image: blog.coverImage.startsWith("http")
            ? blog.coverImage
            : `https://aplombsoft.com${blog.coverImage}`,
        datePublished: blog.date,
        author: {
            "@type": "Organization",
            name: "Aplomb Soft",
        },
        publisher: {
            "@type": "Organization",
            name: "Aplomb Soft",
            logo: {
                "@type": "ImageObject",
                url: "https://aplombsoft.com/favicon.svg",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://aplombsoft.com/blogs/${blog.slug}`,
        },
    };

    const faqSchema = faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: stripMarkdown(faq.answer),
                },
            })),
        }
        : null;

    const relatedBlogs = getRelatedPosts(slug, 9);
    const blogsPerPage = 3;
    const resolvedSearchParams = searchParams
        ? await searchParams
        : {};

    const currentPage = Number(resolvedSearchParams.page) || 1;
    const totalPages = Math.ceil(relatedBlogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = relatedBlogs.slice(
        startIndex,
        startIndex + blogsPerPage
    );

    const BLOG_TYPE_COLORS: Record<string, string> = {
        Software: "bg-blue-50 text-blue-700 ring-blue-100",
        Website: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-100",
        Application: "bg-indigo-50 text-indigo-700 ring-indigo-100",
        "QA & Testing": "bg-amber-50 text-amber-700 ring-amber-100",
        Microsoft: "bg-sky-50 text-sky-700 ring-sky-100",
        "DevOps & Cloud": "bg-cyan-50 text-cyan-700 ring-cyan-100",
        Salesforce: "bg-orange-50 text-orange-700 ring-orange-100",
        Cybersecurity: "bg-rose-50 text-rose-700 ring-rose-100",
        AI: "bg-emerald-50 text-emerald-700 ring-emerald-100",
        Blockchain: "bg-violet-50 text-violet-700 ring-violet-100",
    };

    return (
        <main className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogPostingSchema),
                }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            )}

            <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#F4F9FF_0%,#FFFFFF_72%)] pt-24 md:pt-32">
                <div className="container">
                    <Link
                        href="/blogs"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                    >
                        <ArrowLeft size={16} />
                        Back to insights
                    </Link>

                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
                        <div className="max-w-4xl pb-4">
                            <div className="mb-6 flex flex-wrap items-center gap-3">
                                <span
                                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${BLOG_TYPE_COLORS[blog.blogType] ||
                                        "bg-blue-50 text-blue-700 ring-blue-100"
                                        }`}
                                >
                                    {blog.blogType}
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                                    <CalendarDays size={14} />
                                    {formattedDate}
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                                    <Clock3 size={14} />
                                    {readingTime} min read
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                                {blog.title}
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                                {blog.description}
                            </p>

                            {blog.tags.length > 0 && (
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {blog.tags.slice(0, 6).map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                                        >
                                            <Tag size={13} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="relative h-[300px] overflow-hidden rounded-[2rem] border border-white bg-slate-100 shadow-2xl shadow-blue-100/70 sm:h-[380px] lg:translate-y-12">
                            <Image
                                src={blog.coverImage}
                                alt={blog.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-20">
                <div className="container">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,920px)_300px] xl:grid-cols-[minmax(0,980px)_320px] lg:items-start">
                        <article className="min-w-0">
                            <div className="article-body">
                                <MDXRemote
                                    source={articleContent}
                                    components={mdxComponents}
                                />
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                                >
                                    <ArrowLeft size={16} />
                                    Back to Blogs
                                </Link>
                            </div>
                        </article>

                        <aside className="hidden lg:block">
                            <div className="sticky top-28 space-y-5">
                                {headings.length > 0 && (
                                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                            Article guide
                                        </p>
                                        <nav className="mt-4 space-y-3">
                                            {headings.map((heading) => (
                                                <a
                                                    key={heading.id}
                                                    href={`#${heading.id}`}
                                                    className="block border-l border-slate-200 pl-3 text-sm leading-6 text-slate-600 transition-colors hover:border-blue-500 hover:text-blue-600"
                                                >
                                                    {heading.text}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                )}

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                        Article details
                                    </p>
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                                                Category
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-slate-800">
                                                {blog.category || blog.blogType}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                                                Published
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-slate-800">
                                                {formattedDate}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                                                Reading time
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-slate-800">
                                                {readingTime} min read
                                            </p>
                                        </div>
                                        {blog.tags.length > 0 && (
                                            <div>
                                                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                                                    Topics
                                                </p>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {blog.tags.slice(0, 8).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {faqs.length > 0 && (
                <FAQSection
                    href="/contact"
                    data={{
                        items: faqs.map((faq) => ({
                            title: faq.question,
                            content: faq.answer,
                        })),
                    }}
                />
            )}

            {currentBlogs.length > 0 && (
                <section
                    className="bg-white py-16 sm:py-24"
                    id="related-blogs"
                >
                    <div className="container">
                        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="section-label">
                                    Continue reading
                                </p>
                                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                    Related Articles
                                </h2>
                            </div>
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                            >
                                View all insights
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {currentBlogs.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blogs/${related.slug}`}
                                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="relative h-[220px] overflow-hidden bg-slate-100">
                                        <Image
                                            src={related.coverImage}
                                            alt={related.title}
                                            fill
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="space-y-4 p-6">
                                        <div className="flex items-center justify-between gap-3">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${BLOG_TYPE_COLORS[related.blogType] ||
                                                    "bg-blue-50 text-blue-700 ring-blue-100"
                                                    }`}
                                            >
                                                {related.blogType}
                                            </span>

                                            <span className="text-xs text-slate-400">
                                                {new Date(related.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold leading-snug text-slate-950 transition-colors group-hover:text-blue-600">
                                            {related.title}
                                        </h3>

                                        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                                            {related.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-3 pt-10">
                                <Link
                                    scroll={false}
                                    href={`/blogs/${slug}?page=${currentPage - 1}#related-blogs`}
                                    className={`flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-medium transition-all duration-300 ${currentPage === 1
                                            ? "pointer-events-none border-slate-200 text-slate-400 opacity-40"
                                            : "border-slate-200 text-slate-700 hover:-translate-y-0.5 hover:bg-slate-100"
                                        }`}
                                >
                                    Prev
                                </Link>

                                <div className="flex items-center gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => {
                                        const pageNumber = i + 1;

                                        return (
                                            <Link
                                                key={pageNumber}
                                                scroll={false}
                                                href={`/blogs/${slug}?page=${pageNumber}#related-blogs`}
                                                className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === pageNumber
                                                        ? "bg-gradient text-white shadow-lg shadow-blue-100"
                                                        : "border border-slate-200 text-slate-600 hover:-translate-y-0.5 hover:bg-slate-100"
                                                    }`}
                                            >
                                                {pageNumber}
                                            </Link>
                                        );
                                    })}
                                </div>

                                <Link
                                    scroll={false}
                                    href={`/blogs/${slug}?page=${currentPage + 1}#related-blogs`}
                                    className={`flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-medium transition-all duration-300 ${currentPage === totalPages
                                            ? "pointer-events-none border-slate-200 text-slate-400 opacity-40"
                                            : "border-slate-200 text-slate-700 hover:-translate-y-0.5 hover:bg-slate-100"
                                        }`}
                                >
                                    Next
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </main>
    );
}
