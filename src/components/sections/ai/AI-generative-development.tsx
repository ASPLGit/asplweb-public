"use client";

import AIFAQ, { FAQItem } from "@/components/common/Ai-FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import ContactSection from "@/components/sections/contact/ContactSection";
import Testimonials from "@/components/sections/home/Testimonials";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const GENERATIVE_AI_FAQS: FAQItem[] = [
    {
        question: "What is Generative AI?",
        answer:
            "Generative AI refers to AI systems powered by large language models (LLMs) and foundation models that can create text, images, summaries, code, reports, and intelligent responses based on context and user input."
    },
    {
        question: "How is Generative AI different from traditional AI systems?",
        answer:
            "Traditional AI focuses on prediction and classification, while generative AI produces new content and dynamic outputs. It can generate insights, automate writing, assist decision-making, and act as an intelligent copilot within applications."
    },
    {
        question: "Can Generative AI be customized for our industry?",
        answer:
            "Yes. We tailor generative AI systems using domain-specific prompts, retrieval-augmented generation (RAG), and structured knowledge layers to align outputs with your industry, compliance, and internal data."
    },
    {
        question: "How do you ensure accuracy and reduce hallucinations?",
        answer:
            "We implement structured prompt engineering, retrieval pipelines, evaluation frameworks, and guardrails to ground responses in verified data and continuously monitor output quality."
    },
    {
        question: "Can Generative AI integrate into our existing SaaS platform?",
        answer:
            "Absolutely. We integrate LLMs into SaaS applications, internal tools, customer portals, and enterprise systems via secure APIs and scalable backend architecture."
    },
    {
        question: "Is Generative AI secure for enterprise use?",
        answer:
            "Yes. We deploy models with encrypted data handling, private knowledge bases, access controls, and compliance-aligned infrastructure to protect sensitive business information."
    },
    {
        question: "What is the typical development timeline?",
        answer:
            "Most generative AI solutions move from discovery to production within 6–12 weeks depending on integration complexity, model requirements, and knowledge system design."
    }
];


export default function AIGenerativeDevelopmentPage() {
    const ref = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] bg-black overflow-hidden">
            {/* AI Agent Development Hero */}
            <section className="relative pt-28 sm:pt-32 sm:pb-14 overflow-hidden bg-black">

                {/* Ambient Glow */}
                <div className="pointer-events-none absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl animate-pulse opacity-50" />
                <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

                <div className="container relative">

                    {/* CENTERED HEADER */}
                    <div className="mx-auto max-w-3xl text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium text-fuchsia-200 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(236,72,153,0.9)]" />
                            Generative AI Development
                        </div>

                        <h2 className="mt-6 heading-xl text-white">
                            Build{" "}
                            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                                intelligent generative systems
                            </span>{" "}
                            that create, assist & accelerate.
                        </h2>

                        <p className="mt-6 text-slate-300 text-base leading-relaxed">
                            We design and deploy production-ready generative AI systems powered by LLMs.
                            From AI copilots to content engines and enterprise assistants, we build
                            scalable AI solutions tailored to your workflows.
                        </p>

                    </div>
                    {/* PROMPT → OUTPUT PREVIEW PANEL */}
                    <div className="sm:mt-24 mt-16 relative">

                        <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-sky-500/20">

                            <div className="relative rounded-2xl border border-white/10 bg-black/70 sm:p-10 p-6 backdrop-blur-2xl shadow-[0_0_80px_rgba(236,72,153,0.15)]">

                                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                    Generative Output Preview
                                </p>

                                <div className="mt-8 space-y-6">

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide">
                                            Prompt
                                        </p>
                                        <p className="mt-2 text-sm text-slate-200">
                                            “Generate a strategic growth plan for a SaaS startup targeting enterprise clients.”
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 p-6">
                                        <p className="text-xs text-slate-400 uppercase tracking-wide">
                                            AI Output
                                        </p>
                                        <p className="mt-2 text-sm text-white leading-relaxed">
                                            The AI generates a structured growth strategy including ICP
                                            definition, outbound sales workflows, content positioning,
                                            pricing optimization, and automation roadmap aligned with enterprise buyers.
                                        </p>
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
            <section className="pb-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">

                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 items-stretch">

                        {/* LEFT CARD */}
                        <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:shadow-[0_0_60px_rgba(236,72,153,0.25)]">

                            <div className="relative z-10 space-y-6">

                                {/* INNER CARD 1 */}
                                <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                                    <h3 className="text-white font-semibold">
                                        LLM Integration
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                                        Integrate OpenAI, Claude, Gemini or custom LLMs
                                        into your SaaS platform with scalable infrastructure.
                                    </p>
                                </div>

                                {/* INNER CARD 2 */}
                                <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                                    <h3 className="text-white font-semibold">
                                        Prompt Engineering
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                                        Structured prompts and response optimization
                                        for reliable, domain-specific AI performance.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* CENTER IMAGE CARD */}
                        <div className="group relative overflow-hidden sm:rounded-2xl rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-sky-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(99,102,241,0.35)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 blur-2xl" />

                            <Image
                                src="/images/ai/robot.jpg"
                                alt="Generative AI Development"
                                fill
                                className="relative z-10 w-full h-full object-cover sm:rounded-2xl rounded-xl"
                            />
                        </div>

                        {/* RIGHT CARD */}
                        <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-[0_0_60px_rgba(99,102,241,0.25)]">

                            <div className="relative z-10 space-y-6">

                                {/* INNER CARD 1 */}
                                <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                                    <h3 className="text-white font-semibold">
                                        AI Copilots
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                                        Build intelligent assistants for sales, support,
                                        HR, engineering and enterprise workflows.
                                    </p>
                                </div>

                                {/* INNER CARD 2 */}
                                <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                                    <h3 className="text-white font-semibold">
                                        RAG Knowledge Systems
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                                        Vector databases and retrieval pipelines
                                        for contextual, accurate AI responses.
                                    </p>
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
                                1. Use Case & Model Strategy
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                2. Prompt Design & Knowledge Architecture
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                3. Model Integration & Application Layer
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                4. Evaluation, Guardrails & Optimization
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
                                We identify high-impact generative AI opportunities —
                                from AI copilots and assistants to content engines and
                                enterprise knowledge systems — aligned with your business goals.
                            </p>

                            <p>
                                Our team designs structured prompt frameworks, retrieval
                                pipelines (RAG), and secure knowledge architecture to ensure
                                accurate, contextual, and domain-aware AI outputs.
                            </p>

                            <p>
                                Foundation models are integrated into your SaaS or enterprise
                                applications with scalable backend infrastructure and API orchestration.
                            </p>

                            <p>
                                We implement evaluation benchmarks, safety guardrails,
                                monitoring systems, and continuous optimization to maintain
                                performance, reliability, and compliance.
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
                                    1. Use Case & Model Strategy
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Define generative AI objectives and select the right
                                    foundation models for your application.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    2. Prompt Design & Knowledge Architecture
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Implement structured prompts, RAG pipelines,
                                    and secure contextual data layers.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    3. Model Integration & Application Layer
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Integrate LLMs into SaaS platforms, internal tools,
                                    and enterprise workflows.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    4. Evaluation, Guardrails & Optimization
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Monitor outputs, enforce safety controls,
                                    and continuously refine model performance.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <WhoWeAre dark />
            <Testimonials dark />
            <AIFAQ
                title="AI Generative Development FAQs"
                subtitle="Everything you need to know about building generative AI applications."
                items={GENERATIVE_AI_FAQS}
            />
            <div className="pb-24">
                <ContactSection />
            </div>
        </section>
    );
}

