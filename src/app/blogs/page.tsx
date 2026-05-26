import BlogsPage from "@/components/sections/blogs/BlogsPage";
import { getAllBlogPosts } from "@/lib/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Insights",
    description:
        "Explore our latest insights, articles, and guides on AI development, software engineering, automation, and emerging technologies.",
    alternates: {
        canonical: "/blogs",
    },
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <section>
            <BlogsPage initialBlogs={posts} />
        </section>
    );
}