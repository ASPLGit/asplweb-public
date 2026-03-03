"use client";

import AIFAQ, { FAQItem } from "@/components/common/Ai-FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import ContactSection from "@/components/sections/contact/ContactSection";
import Testimonials from "@/components/sections/home/Testimonials";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AI_CHATBOT_FAQS: FAQItem[] = [
    {
        question: "What is an AI chatbot?",
        answer:
            "An AI chatbot is an intelligent conversational system powered by large language models (LLMs) that understands user intent, retrieves relevant information, and delivers human-like responses in real time."
    },
    {
        question: "How is an AI chatbot different from a traditional chatbot?",
        answer:
            "Traditional chatbots follow predefined scripts and decision trees, while AI chatbots use natural language understanding and contextual memory to generate dynamic, intelligent responses."
    },
    {
        question: "Can the chatbot integrate with our CRM or SaaS tools?",
        answer:
            "Yes. We integrate AI chatbots with CRMs, helpdesk platforms, payment systems, APIs, and internal business tools to enable automated actions and real-time data access."
    },
    {
        question: "How does the chatbot access our company knowledge?",
        answer:
            "We implement Retrieval-Augmented Generation (RAG) systems that securely connect the chatbot to your documents, databases, and knowledge base for accurate and contextual answers."
    },
    {
        question: "What is the development timeline?",
        answer:
            "Most AI chatbot solutions move from discovery to deployment within 4–8 weeks depending on complexity and system integrations."
    }
];

export default function AIChatBotDevelopment() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] bg-black overflow-hidden">
            {/* AI Agent Development Hero */}
            <section className="relative pt-24 sm:pt-28 lg:pt-36 sm:pb-20 pb-10 overflow-hidden">
                <div className="container">

                    {/* Ambient glow */}
                    <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
                    <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl animate-pulse" />

                    {/* Subtle grid */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.4) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div className="max-w-xl">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200 backdrop-blur">
                                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                                AI Chatbot Development
                            </div>

                            <h1 className="mt-6 heading-xl text-white">
                                Build{" "}
                                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    intelligent conversational AI
                                </span>{" "}
                                that engages, assists & converts.
                            </h1>

                            <p className="mt-6 text-slate-300 text-base leading-relaxed">
                                We design enterprise-grade AI chatbots powered by LLMs that understand
                                context, retrieve knowledge, integrate with your systems, and deliver
                                human-like interactions across web, mobile, and messaging platforms.
                            </p>

                            {/* Feature Chips */}
                            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
                                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1">
                                    LLM Powered Conversations
                                </span>
                                <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1">
                                    RAG Knowledge Retrieval
                                </span>
                                <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1">
                                    CRM & API Integrations
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                    Multi-Channel Deployment
                                </span>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-wrap items-center gap-4">
                                <a
                                    href="/case-studies"
                                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-white"
                                >
                                    Explore chatbot case studies
                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                        <Image
                                            src="/images/icons/arrow-up.svg"
                                            alt="icon"
                                            width={20}
                                            height={20}
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT – Chatbot Interface Preview */}
                        <div className="relative">

                            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/50 via-indigo-500/40 to-fuchsia-500/30">

                                <div className="relative rounded-2xl border border-white/10 bg-black/70 sm:p-8 p-4 backdrop-blur-2xl shadow-[0_0_60px_rgba(56,189,248,0.25)]">

                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                        Chatbot Intelligence Stack
                                    </p>

                                    {/* Chat Conversation UI */}
                                    <div className="mt-6 space-y-4">

                                        <div className="flex justify-start">
                                            <div className="sm:max-w-xs max-w-[70%] rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200">
                                                👋 Hi! I’d like to know your pricing plans.
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <div className="sm:max-w-xs max-w-[70%] rounded-2xl bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-400/30 px-4 py-3 text-sm text-white">
                                                Sure! We offer scalable plans based on usage. Would you like
                                                enterprise or startup pricing?
                                            </div>
                                        </div>

                                        <div className="flex justify-start">
                                            <div className="sm:max-w-xs max-w-[70%] rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200">
                                                Enterprise. We need CRM integration.
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <div className="sm:max-w-xs max-w-[70%] rounded-2xl bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 border border-indigo-400/30 px-4 py-3 text-sm text-white">
                                                Perfect. We integrate with Salesforce, HubSpot, and custom APIs.
                                                I’ll connect you with our solutions team.
                                            </div>
                                        </div>

                                    </div>

                                    {/* Metrics */}
                                    <div className="mt-8 grid grid-cols-3 gap-3 text-[11px] text-slate-300">
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Response Time
                                            </p>
                                            <p className="mt-1 font-medium text-white">&lt; 2s</p>
                                        </div>
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Accuracy
                                            </p>
                                            <p className="mt-1 font-medium text-white">Context-Aware</p>
                                        </div>
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Channels
                                            </p>
                                            <p className="mt-1 font-medium text-white">Web • WhatsApp • API</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* expertise */}
            <SectionHeading
                dark
                sectionLabel="Our expertise"
                heading="Decades of Engineering Excellence, Now Augmented by AI"
                subheading="We combine deep software engineering, cloud, and data experience with the latest AI tooling to design systems that are not just impressive demos, but stable, measurable value drivers."
            />


            {/* cards */}
            <section className="pb-24">
                <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-16">

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* LEFT CONTENT CARD (NOW IMAGE) */}
                        <div className="lg:col-span-1 group relative overflow-hidden sm:rounded-2xl rounded-xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/20 to-indigo-500/20 blur-2xl" />

                            <Image
                                src="/images/ai/ai-chatbot.webp"
                                alt="AI Chatbot Development"
                                fill
                                className="relative z-10 w-full h-full object-cover sm:rounded-2xl rounded-xl"
                            />
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-2 flex flex-col gap-8">

                            {/* TOP CARD */}
                            <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.25)]">

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl" />

                                <div className="relative z-10">
                                    <h3 className="text-white font-semibold text-lg">
                                        Enterprise AI Chatbot Architecture
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                        We design LLM-powered chatbot systems with contextual memory,
                                        retrieval-based knowledge (RAG), intent detection, and scalable
                                        backend infrastructure tailored to your business workflows.
                                    </p>
                                </div>
                            </div>

                            {/* BOTTOM GRID */}
                            <div className="grid sm:grid-cols-2 gap-8">

                                {/* CARD 1 */}
                                <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:shadow-[0_0_60px_rgba(236,72,153,0.25)]">

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-2xl" />

                                    <div className="relative z-10">
                                        <h3 className="text-white font-semibold">
                                            CRM & API Integrations
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-300">
                                            Connect chatbots with CRMs, helpdesk tools, SaaS platforms,
                                            payment systems, and internal databases to automate support,
                                            lead capture, and operational workflows.
                                        </p>
                                    </div>
                                </div>

                                {/* CARD 2 (NOW TEXT – HEADING + SUBHEADING) */}
                                <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_0_60px_rgba(56,189,248,0.25)]">

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/10 to-transparent rounded-2xl" />

                                    <div className="relative z-10">
                                        <h3 className="text-white font-semibold">
                                            Multi-Channel AI Conversations
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                            Deploy intelligent chat experiences across websites, mobile
                                            apps, WhatsApp, Slack, and internal enterprise tools delivering
                                            real-time, human-like conversations 24/7.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* process */}
            <section
                ref={ref}
                className="relative bg-black overflow-hidden pb-10"
            >
                <div className="relative mx-auto max-w-6xl px-6">

                    {/* DESKTOP */}
                    <div className="sm:grid grid-cols-3 sm:gap-12 gap-2 hidden">

                        {/* LEFT TEXT */}
                        <div className="col-span-1 space-y-40 text-white">
                            <h3 className="sm:text-2xl text-base font-semibold">
                                1. Use Case Discovery & Conversation Mapping
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                2. Chatbot Architecture & Knowledge Integration
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                3. Integration with CRM & Business Systems
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                4. Deployment, Training & Continuous Optimization
                            </h3>
                        </div>

                        {/* CENTER LINE */}
                        <div className="relative flex justify-center">

                            <div className="absolute w-[2px] h-full bg-white/20" />

                            <motion.div
                                style={{ scaleY }}
                                className="origin-top absolute w-[2px] h-full bg-blue-500"
                            />

                            <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full" />
                            <div className="absolute top-1/3 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute top-2/3 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute bottom-0 w-4 h-4 bg-white rounded-full" />
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="col-span-1 space-y-40 text-slate-300 text-sm leading-relaxed">
                            <p>
                                We identify where conversational AI can improve support,
                                lead generation, onboarding, or internal workflows.
                                User journeys and intent flows are clearly mapped.
                            </p>

                            <p>
                                Our team designs scalable LLM-based chatbot systems with
                                RAG knowledge layers, intent detection, and contextual
                                response handling.
                            </p>

                            <p>
                                Chatbots are connected to CRMs, helpdesk platforms,
                                payment systems, and APIs to enable real-time,
                                action-oriented conversations.
                            </p>

                            <p>
                                After launch, we monitor performance, refine prompts,
                                retrain knowledge sources, and continuously optimize
                                accuracy and user experience.
                            </p>
                        </div>

                    </div>

                    {/* MOBILE */}
                    <div className="grid grid-cols-4 sm:gap-12 gap-2 sm:hidden">

                        {/* CENTER LINE */}
                        <div className="relative col-span-1 flex justify-center">

                            <div className="absolute w-[2px] h-full bg-white/20" />

                            <motion.div
                                style={{ scaleY }}
                                className="origin-top absolute w-[2px] h-full bg-blue-500"
                            />

                            <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full" />
                            <div className="absolute top-1/3 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute top-2/3 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute bottom-0 w-4 h-4 bg-white rounded-full" />
                        </div>

                        {/* TEXT */}
                        <div className="col-span-3 space-y-28 text-white">

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    1. Use Case Discovery & Conversation Mapping
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    We define chatbot goals, map user intents,
                                    and design clear conversational flows.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    2. Chatbot Architecture & Knowledge Integration
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    LLM setup, knowledge retrieval systems,
                                    and structured response logic are implemented.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    3. Integration with CRM & Business Systems
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Chatbots are connected to APIs, CRMs,
                                    helpdesk tools, and internal databases.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    4. Deployment, Training & Continuous Optimization
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    We deploy, monitor performance,
                                    and continuously improve accuracy and engagement.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <WhoWeAre dark />
            <Testimonials dark />
            <ContactSection />
            <AIFAQ
                title="AI Chatbot Development FAQs"
                subtitle="Common questions about building intelligent conversational systems."
                items={AI_CHATBOT_FAQS}
            />
        </section>
    );
}

