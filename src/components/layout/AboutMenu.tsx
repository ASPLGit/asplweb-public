"use client";

import Link from "next/link";
import {
    Users,
    Briefcase,
    BookOpen,
    BarChart3,
    ArrowRight,
} from "lucide-react";

interface AboutMenuProps {
    onNavigate?: () => void;
}

const ABOUT_ITEMS = [
    {
        name: "About Us",
        href: "/about",
        accent: "Who we are",
        description: "Our story, mission, values, and leadership.",
        icon: "about",
        tag: null,
    },
    {
        name: "Careers",
        href: "/careers",
        accent: "Work with us",
        description: "Open roles and growth opportunities.",
        icon: "careers",
        tag: "Join us",
    },
    {
        name: "Blogs",
        href: "/blogs",
        accent: "Latest thinking",
        description: "Insights on AI, Web3, SaaS and industry trends.",
        icon: "blogs",
        tag: "Read",
    },
    {
        name: "Case Studies",
        href: "/case-studies",
        accent: "Proven impact",
        description: "Real-world implementations and outcomes.",
        icon: "casestudy",
        tag: null,
    },
];

const iconClass = "w-6 h-6 text-slate-700";

const icons: Record<string, React.ReactNode> = {
    about: <Users className={iconClass} strokeWidth={1.5} />,
    careers: <Briefcase className={iconClass} strokeWidth={1.5} />,
    blogs: <BookOpen className={iconClass} strokeWidth={1.5} />,
    casestudy: <BarChart3 className={iconClass} strokeWidth={1.5} />,
};

export default function AboutMenu({ onNavigate }: AboutMenuProps) {
    return (
        <div className="relative overflow-hidden p-10">
            {/* Background effects */}
            <div className="pointer-events-none absolute -right-32 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/20 to-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-teal-400/15 blur-3xl" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative flex flex-col gap-8 lg:flex-row">
                {/* Left: Hero strip */}
                <div className="flex shrink-0 flex-col justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950/90 to-slate-900 p-6 text-white shadow-xl lg:w-56">
                    <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Company & Insights
                        </span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-white">
                        Know how we think and work
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        Our story, culture, open roles, and the ideas we share with the world.
                    </p>
                    <Link
                        href="/about"
                        onClick={onNavigate}
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                        Explore about
                        <ArrowRight
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>

                {/* Right: Cards grid */}
                <div className="grid flex-1 gap-3 sm:grid-cols-2">
                    {ABOUT_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={onNavigate}
                            className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200/80 hover:bg-white hover:shadow-[0_20px_50px_-18px_rgba(14,165,233,0.25)]"
                        >
                            {/* Top gradient line on hover */}
                            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {item.tag && (
                                <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-sky-500/90 to-cyan-500/90 px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm">
                                    {item.tag}
                                </span>
                            )}

                            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100/80 transition-all duration-300 group-hover:scale-105 group-hover:ring-sky-200">

                                {/* Gradient glow on hover */}
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/0 via-cyan-400/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

                                {icons[item.icon]}
                            </div>

                            <div className="min-w-0 flex-1 pt-0.5">
                                {item.accent && (
                                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-sky-500">
                                        {item.accent}
                                    </span>
                                )}
                                <p className="font-semibold text-slate-900 group-hover:text-sky-700">
                                    {item.name}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                                    {item.description}
                                </p>
                                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Explore
                                    <ArrowRight
                                        className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                                        strokeWidth={1.8}
                                    />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
