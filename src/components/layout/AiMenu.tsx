"use client";

import { ArrowRight, Bot, Brain, Eye, LineChart, MessageSquare, Workflow } from "lucide-react";
import Link from "next/link";

interface AiMenuProps {
    onNavigate?: () => void;
}

const AI_SERVICES = [
    {
        title: "AI Development",
        href: "/ai-development",
        description: "Custom AI solutions, model design & integration.",
        icon: "ai-core",
        tag: null,
    },
    {
        title: "AI Agent Development",
        href: "/ai",
        description: "Autonomous agents that reason, plan & act.",
        icon: "agent",
        tag: "Popular",
    },
    {
        title: "AI Chatbot Development",
        href: "/ai",
        description: "Conversational AI & intelligent virtual assistants.",
        icon: "chatbot",
        tag: null,
    },
    {
        title: "AI Automation & Integration",
        href: "/ai",
        description: "Workflow automation and system integrations with AI.",
        icon: "automation",
        tag: "New",
    },
    {
        title: "ML Development",
        href: "/services/ai-ml",
        description: "Machine learning models, training & deployment.",
        icon: "ml",
        tag: null,
    },
    {
        title: "Computer Vision & NLP",
        href: "/services/ai-ml",
        description: "Image recognition, language models & text analytics.",
        icon: "vision",
        tag: null,
    },
];

const iconClass =
    "w-6 h-6 text-violet-600 transition-colors duration-300";

const icons: Record<string, React.ReactNode> = {
    "ai-core": <Brain className={iconClass} strokeWidth={1.5} />,
    agent: <Bot className={iconClass} strokeWidth={1.5} />,
    chatbot: <MessageSquare className={iconClass} strokeWidth={1.5} />,
    automation: <Workflow className={iconClass} strokeWidth={1.5} />,
    ml: <LineChart className={iconClass} strokeWidth={1.5} />,
    vision: <Eye className={iconClass} strokeWidth={1.5} />,
};

export default function AiMenu({ onNavigate }: AiMenuProps) {
    return (
        <div className="relative overflow-hidden p-10">
            {/* Background effects */}
            <div className="pointer-events-none absolute -right-32 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative flex flex-col gap-8 lg:flex-row">
                {/* Left: Hero strip */}
                <div className="flex shrink-0 flex-col justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-xl lg:w-56">
                    <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            AI & Automation
                        </span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-white">
                        Intelligent systems that scale
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        From agents to ML pipelines build what’s next with expert AI development.
                    </p>
                    <Link
                        href="/ai"
                        onClick={onNavigate}
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                        View all AI
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </Link>
                </div>

                {/* Right: Service cards grid */}
                <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {AI_SERVICES.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            onClick={onNavigate}
                            className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200/80 hover:bg-white hover:shadow-[0_20px_50px_-18px_rgba(139,92,246,0.25)]"
                        >
                            {/* Top gradient line on hover */}
                            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {item.tag && (
                                <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm">
                                    {item.tag}
                                </span>
                            )}

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-50 text-violet-600 ring-1 ring-violet-100/80 transition-all duration-300 group-hover:scale-105 group-hover:from-violet-200 group-hover:to-fuchsia-100 group-hover:ring-violet-200">
                                {icons[item.icon]}
                            </div>

                            <div className="min-w-0 flex-1 pt-0.5">
                                <p className="font-semibold text-slate-900 max-w-[70%] group-hover:text-violet-700">
                                    {item.title}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                                    {item.description}
                                </p>
                                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Explore
                                    <ArrowRight className="h-3 w-3" strokeWidth={2} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
