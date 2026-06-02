export const dynamic = "force-dynamic";

import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { MDXRemote } from "next-mdx-remote/rsc";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams?: Promise<{
        page?: string;
    }>;
}

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

function extractFaqsFromContent(content: string): { question: string; answer: string }[] {
    const faqs: { question: string; answer: string }[] = [];
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
            faqs.push({ question, answer });
        }
    }
    return faqs;
}

const mdxComponents = {
    h2: (props: any) => <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3" {...props} />,
    p: (props: any) => <p className="text-slate-700 leading-relaxed mb-4" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
    li: (props: any) => <li className="text-slate-700" {...props} />,
    a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
};

export default async function BlogDetailsPage({
    params,
    searchParams,
}: PageProps) {
    const { slug } = await params;
    const blog = getBlogPostBySlug(slug);

    if (!blog) return notFound();

    const faqs = extractFaqsFromContent(blog.content);

    // BlogPosting Schema
    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.coverImage.startsWith("http") ? blog.coverImage : `https://aplombsoft.com${blog.coverImage}`,
        "datePublished": blog.date,
        "author": {
            "@type": "Organization",
            "name": "Aplomb Soft"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Aplomb Soft",
            "logo": {
                "@type": "ImageObject",
                "url": "https://aplombsoft.com/favicon.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://aplombsoft.com/blogs/${blog.slug}`
        }
    };

    // FAQPage Schema
    const faqSchema = faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;


    /* ---------------- RELATED BLOG LOGIC ---------------- */
    const relatedBlogs = getRelatedPosts(slug, 9);

    /* ---------------- PAGINATION ---------------- */
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
        Software: "bg-blue-50 text-blue-600",
        Website: "bg-purple-50 text-purple-600",
        Application: "bg-indigo-50 text-indigo-600",
        "QA & Testing": "bg-amber-50 text-amber-600",
        Microsoft: "bg-sky-50 text-sky-600",
        "DevOps & Cloud": "bg-cyan-50 text-cyan-600",
        Salesforce: "bg-orange-50 text-orange-600",
        Cybersecurity: "bg-red-50 text-red-600",
        AI: "bg-emerald-50 text-emerald-600",
        Blockchain: "bg-violet-50 text-violet-600",
    };

    return (
        <section className="bg-white pt-24 md:pt-32 pb-16 sm:pb-24 relative">
            {/* JSON-LD Structured Data Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <div className="container max-w-4xl mx-auto space-y-12">
                {/* BLOG HEADER */}
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-medium w-fit px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                        {blog.blogType}
                    </span>

                    <h1 className="text-3xl sm:text-5xl font-medium text-slate-900 leading-tight">
                        {blog.title}
                    </h1>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="text-sm text-slate-400">
                        {new Date(blog.date).toDateString()}
                    </div>

                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* BLOG CONTENT */}
                <div className="text-slate-700 leading-relaxed">
                    <MDXRemote source={blog.content} components={mdxComponents} />
                    <div className="pt-8">
                        <Button variant="black" to="/blogs">Back to Blogs</Button>
                    </div>
                </div>

                {/* RELATED BLOGS */}
                {currentBlogs.length > 0 && (
                    <div className="pt-10 border-t border-slate-200 space-y-10" id="related-blogs">
                        <h3 className="text-2xl font-semibold text-slate-900">
                            Related Articles
                        </h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentBlogs.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blogs/${related.slug}`}
                                    className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 bg-white"
                                >
                                    <div className="relative h-[220px] overflow-hidden">
                                        <Image
                                            src={related.coverImage}
                                            alt={related.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`text-xs font-medium px-3 py-1 rounded-full ${
                                                    BLOG_TYPE_COLORS[related.blogType] || "bg-blue-50 text-blue-600"
                                                }`}
                                            >
                                                {related.blogType}
                                            </span>

                                            <span className="text-xs text-slate-400">
                                                {new Date(related.date).toDateString()}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold leading-snug transition duration-300 text-slate-900 group-hover:text-blue-600">
                                            {related.title}
                                        </h3>

                                        <p className="text-sm text-slate-600 line-clamp-3">
                                            {related.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* PAGINATION */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-3 pt-10">
                                {/* PREV BUTTON */}
                                <Link
                                    scroll={false}
                                    href={`/blogs/${slug}?page=${currentPage - 1}#related-blogs`}
                                    className={`h-11 px-4 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-center
            ${
                currentPage === 1
                    ? "pointer-events-none opacity-40 border-slate-200 text-slate-400"
                    : "border-slate-200 text-slate-700 hover:bg-slate-100 hover:-translate-y-0.5"
            }`}
                                >
                                    Prev
                                </Link>

                                {/* PAGE NUMBERS */}
                                <div className="flex items-center gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => {
                                        const pageNumber = i + 1;

                                        return (
                                            <Link
                                                key={pageNumber}
                                                scroll={false}
                                                href={`/blogs/${slug}?page=${pageNumber}#related-blogs`}
                                                className={`w-11 h-11 rounded-xl text-sm font-medium flex items-center justify-center transition-all duration-300
                        ${
                            currentPage === pageNumber
                                ? "bg-gradient-to-r from-[#007BFF] to-[#00D4FF] text-white shadow-lg shadow-blue-100 scale-105"
                                : "border border-slate-200 text-slate-600 hover:bg-slate-100 hover:-translate-y-0.5"
                        }`}
                                            >
                                                {pageNumber}
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* NEXT BUTTON */}
                                <Link
                                    scroll={false}
                                    href={`/blogs/${slug}?page=${currentPage + 1}#related-blogs`}
                                    className={`h-11 px-4 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-center
            ${
                currentPage === totalPages
                    ? "pointer-events-none opacity-40 border-slate-200 text-slate-400"
                    : "border-slate-200 text-slate-700 hover:bg-slate-100 hover:-translate-y-0.5"
            }`}
                                >
                                    Next
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}