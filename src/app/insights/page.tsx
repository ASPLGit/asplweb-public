"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "@/data/insights";
import SectionHeading from "@/components/common/SectionHeading";
import { useEffect, useMemo, useRef, useState } from "react";
import { Blog } from "@/types/app";
import { Funnel, Search } from "lucide-react";



const ITEMS_PER_PAGE = 6;
export default function BlogPage() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("newest");
    const [typeFilter, setTypeFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
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
    const topRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        topRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [currentPage]);
    const filteredBlogs = useMemo(() => {
        let blogs: Blog[] = [...BLOGS];

        // Filter by blog type
        if (typeFilter !== "all") {
            blogs = blogs.filter((b) => b.blogType === typeFilter);
        }

        // Search
        if (search.trim()) {
            const tokens = search.toLowerCase().split(" ").filter(Boolean);

            blogs = blogs
                .map((blog) => {
                    let score = 0;

                    tokens.forEach((token) => {
                        // TITLE (Highest weight)
                        if (blog.title.toLowerCase().includes(token)) {
                            score += 6;
                        }

                        // BLOG TYPE
                        if (blog.blogType.toLowerCase().includes(token)) {
                            score += 5;
                        }

                        // CONTENT
                        if (blog.content.mainHeading.toLowerCase().includes(token)) {
                            score += 3;
                        }

                        // DATE (formatted search)
                        const formattedDate = new Date(blog.date)
                            .toDateString()
                            .toLowerCase();

                        if (formattedDate.includes(token)) {
                            score += 2;
                        }
                    });

                    return { ...blog, score };
                })
                .filter((blog) => blog.score > 0)
                .sort((a, b) => b.score - a.score);
        }

        // Sort
        blogs.sort((a, b) => {
            if (sortBy === "newest") {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        return blogs;
    }, [search, sortBy, typeFilter]);

    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    return (
        <section ref={topRef} className="bg-white pt-24 md:pt-32 pb-16 sm:pb-24">
            <div className="container sm:space-y-20 space-y-10">

                <SectionHeading
                    sectionLabel="Our Blog"
                    heading="Insights That Shape Modern Digital Products"
                    subheading="Thoughtful perspectives on software engineering, AI, cloud,
                        blockchain, and scalable product development."
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* FILTERS */}
                    <div className="flex items-center gap-4">

                        {/* Blog Type */}
                        <div className="relative">
                            {/* Funnel Icon */}
                            <Funnel
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                            />
                            <Image src='/images/icons/chev-down-black.svg' className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" alt="icon" width={16} height={16} />

                            <select
                                value={typeFilter}
                                onChange={(e) => {
                                    setTypeFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="
      appearance-none
      pl-9 pr-10
      py-2
      border border-slate-300
      rounded-md
      text-sm
      bg-white
      focus:outline-none
      focus:ring-2 focus:ring-blue-100
      focus:border-blue-400
      transition
    "
                            >
                                <option value="all">All Types</option>
                                <option value="Software">Software</option>
                                <option value="Website">Website</option>
                                <option value="Application">Application</option>
                                <option value="QA & Testing">QA & Testing</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="DevOps & Cloud">DevOps & Cloud</option>
                                <option value="Salesforce">Salesforce</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                                <option value="AI">AI</option>
                                <option value="Blockchain">Blockchain</option>
                            </select>
                        </div>

                        {/* Sort */}
                        <div className="relative">
                            <Image src='/images/icons/chev-down-black.svg' className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" alt="icon" width={16} height={16} />

                            <select
                                value={sortBy}
                                onChange={(e) => {
                                    setSortBy(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="
      appearance-none
      pl-9 pr-10
      py-2
       border border-slate-300
      rounded-md
      text-sm
      bg-white
      focus:outline-none
      focus:ring-2 focus:ring-blue-100
      focus:border-blue-400
      transition
    "
                            >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                    </div>

                    {/* SEARCH */}
                    <div className="relative w-full sm:w-64">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search blog..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-9 pr-4 py-2  border border-slate-300 rounded-md text-sm focus:outline-none
      focus:ring-2 focus:ring-blue-100
      focus:border-blue-400"
                        />
                    </div>
                </div>

                {/* BLOG GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedBlogs.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/insights/${blog.slug}`}
                            className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 bg-white"
                        >
                            {/* IMAGE */}
                            <div className="relative h-[220px] overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 space-y-4">

                                {/* BLOG TYPE BADGE */}
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${BLOG_TYPE_COLORS[blog.blogType]
                                            }`}
                                    >
                                        {blog.blogType}
                                    </span>

                                    <span className="text-xs text-slate-400">
                                        {new Date(blog.date).toDateString()}
                                    </span>
                                </div>

                                {/* COLORFUL TITLE */}
                                <h3 className="text-lg font-semibold leading-snug transition duration-300
      text-slate-900 group-hover:text-blue-600"
                                >
                                    {blog.content.mainHeading}
                                </h3>

                                {/* EXCERPT */}
                                <p className="text-sm text-slate-600 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 pt-10">

                        {/* FIRST PAGE */}
                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className="px-3 py-2 min-w-10 min-h-10 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                        >
                            «
                        </button>

                        {/* PREVIOUS */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-2 min-w-10 min-h-10 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                        >
                            ‹
                        </button>

                        {/* PAGE NUMBERS (Max 4 Visible) */}
                        {(() => {
                            const maxVisible = 4;
                            let start = Math.max(currentPage - 2, 1);
                            let end = start + maxVisible - 1;

                            if (end > totalPages) {
                                end = totalPages;
                                start = Math.max(end - maxVisible + 1, 1);
                            }

                            return Array.from({ length: end - start + 1 }).map((_, i) => {
                                const pageNumber = start + i;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`px-4 min-w-10 min-h-10 py-2 rounded-lg text-sm border transition ${currentPage === pageNumber
                                            ? "bg-gradient-to-r from-[#007BFF] to-[#00D4FF] text-white border-transparent"
                                            : "border-slate-200 text-slate-600 hover:bg-slate-100"
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            });
                        })()}

                        {/* NEXT */}
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 min-w-10 min-h-10 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                        >
                            ›
                        </button>

                        {/* LAST PAGE */}
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 min-w-10 min-h-10 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                        >
                            »
                        </button>

                    </div>
                )}

            </div>
        </section>
    );
}