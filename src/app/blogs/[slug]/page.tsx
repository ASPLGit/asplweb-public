import { BLOGS } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams?: Promise<{
        page?: string;
    }>;
}

export async function generateStaticParams() {
    return BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;

    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) return {};

    return {
        title: blog.title,
        description: blog.excerpt,
    };
}

export default async function BlogDetailsPage({
    params,
    searchParams,
}: PageProps) {
    const { slug } = await params;

    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) return notFound();

    /* ---------------- RELATED BLOG LOGIC ---------------- */

    let relatedBlogs = BLOGS.filter(
        (b) =>
            b.slug !== blog.slug &&
            b.blogType === blog.blogType
    );

    if (relatedBlogs.length < 3) {
        const additionalBlogs = BLOGS.filter(
            (b) =>
                b.slug !== blog.slug &&
                !relatedBlogs.some((r) => r.slug === b.slug)
        );

        relatedBlogs = [...relatedBlogs, ...additionalBlogs];
    }

    /* ---------------- PAGINATION ---------------- */

    const blogsPerPage = 3;
    const resolvedSearchParams = searchParams
        ? await searchParams
        : {};

    const currentPage =
        Number(resolvedSearchParams.page) || 1;
    const totalPages = Math.ceil(
        relatedBlogs.length / blogsPerPage
    );

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
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* BLOG CONTENT */}
                <div className="space-y-12 text-slate-700 leading-relaxed">
                    {blog.content.sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            {section.heading && (
                                <h2 className="text-2xl font-semibold text-slate-900">
                                    {section.heading}
                                </h2>
                            )}

                            {section.paragraphs?.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            {section.list && (
                                <ul className="list-disc pl-6 space-y-2">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    <Button variant="black" to="/blogs">Back to Blogs</Button>
                </div>

                {/* RELATED BLOGS */}
                {currentBlogs.length > 0 && (
                    <div className="pt-10 border-t border-slate-200 space-y-10">
                        <h3 className="text-2xl font-semibold text-slate-900">
                            Related Articles
                        </h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentBlogs.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/blogs/${related.slug}`}
                                    className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 bg-white"
                                >
                                    <div className="relative h-[220px] overflow-hidden">
                                        <Image
                                            src={related.image}
                                            alt={related.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`text-xs font-medium px-3 py-1 rounded-full ${BLOG_TYPE_COLORS[related.blogType]
                                                    }`}
                                            >
                                                {related.blogType}
                                            </span>

                                            <span className="text-xs text-slate-400">
                                                {new Date(related.date).toDateString()}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold leading-snug transition duration-300 text-slate-900 group-hover:text-blue-600">
                                            {related.content.mainHeading}
                                        </h3>

                                        <p className="text-sm text-slate-600 line-clamp-3">
                                            {related.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* PAGINATION */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 pt-10">
                                {Array.from({ length: totalPages }).map((_, i) => {
                                    const pageNumber = i + 1;
                                    return (
                                        <Link
                                            key={pageNumber}
                                            href={`/blogs/${slug}?page=${pageNumber}`}
                                            className={`px-4 min-w-10 min-h-10 py-2 rounded-lg text-sm border transition ${currentPage === pageNumber
                                                ? "bg-gradient-to-r from-[#007BFF] to-[#00D4FF] text-white border-transparent"
                                                : "border-slate-200 text-slate-600 hover:bg-slate-100"
                                                }`}
                                        >
                                            {pageNumber}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}