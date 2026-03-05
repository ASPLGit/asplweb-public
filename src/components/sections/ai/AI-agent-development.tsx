"use client";

import AIFAQ, { FAQItem } from "@/components/common/Ai-FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import ContactSection from "@/components/sections/contact/ContactSection";
import Testimonials from "@/components/sections/home/Testimonials";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AI_AGENT_FAQS: FAQItem[] = [
    {
        question: "What is an AI Agent?",
        answer:
            "An AI agent is an autonomous system capable of reasoning, using tools, accessing memory, and executing multi-step workflows without constant human input."
    },
    {
        question: "How is an AI agent different from a chatbot?",
        answer:
            "Unlike chatbots that respond to prompts, AI agents can plan tasks, call APIs, retrieve data, and take actions across systems."
    },
    {
        question: "Can AI agents integrate with our CRM or SaaS tools?",
        answer:
            "Yes. We connect agents to APIs, databases, CRMs, cloud platforms, and internal enterprise systems."
    },
    {
        question: "How secure are AI agent systems?",
        answer:
            "We implement role-based access control, encrypted data flows, secure API handling, and compliance-aligned architecture."
    },
    {
        question: "What is the development timeline?",
        answer:
            "Most AI agent systems move from strategy to production in 6–12 weeks depending on integration complexity."
    }
];

export default function AIAgentDevelopmentPage() {
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
                    {/* Ambient agent glow */}
                    <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
                    <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl animate-pulse" />

                    {/* Neural grid overlay */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.4) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative">

                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* LEFT CONTENT */}
                            <div className="max-w-xl">

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-200 backdrop-blur">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.9)]" />
                                    Autonomous AI Agents
                                </div>

                                <h1 className="mt-6 heading-xl text-white">
                                    Deploy{" "}
                                    <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                                        intelligent agents
                                    </span>{" "}
                                    that think, plan & execute.
                                </h1>

                                <p className="mt-6 text-slate-300 text-base leading-relaxed">
                                    We design production ready AI agents capable of reasoning,
                                    orchestrating workflows, integrating with APIs, and autonomously
                                    completing complex tasks across enterprise systems.
                                </p>

                                {/* Capabilities chips */}
                                <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
                                    <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1">
                                        Multi Step Reasoning
                                    </span>
                                    <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1">
                                        Tool Use & APIs
                                    </span>
                                    <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1">
                                        Workflow Orchestration
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                        Guardrails & Monitoring
                                    </span>
                                </div>

                                {/* CTA */}
                                <div className="mt-10 flex flex-wrap items-center gap-4">

                                    <a href="/case-studies" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-white">
                                        View case studies
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

                            {/* RIGHT – Agent System Panel */}
                            <div className="relative">

                                {/* Gradient border wrapper */}
                                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/50 via-sky-500/40 to-fuchsia-500/30 animate-[aiShimmer_8s_ease-in-out_infinite]">

                                    <div className="relative rounded-2xl border border-white/10 bg-black/70 p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(99,102,241,0.25)]">

                                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                            Agent Capabilities
                                        </p>

                                        <ul className="mt-6 space-y-5 text-sm text-slate-200">

                                            <li className="flex gap-3">
                                                <span className="h-2.5 w-2.5 mt-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.9)]" />
                                                <div>
                                                    <p className="font-medium text-white">
                                                        Context-Aware Decision Making
                                                    </p>
                                                    <p className="text-xs text-slate-400">
                                                        Agents dynamically adapt based on real time data inputs.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex gap-3">
                                                <span className="h-2.5 w-2.5 mt-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                                                <div>
                                                    <p className="font-medium text-white">
                                                        Multi-Tool Execution
                                                    </p>
                                                    <p className="text-xs text-slate-400">
                                                        Seamlessly connect APIs, CRMs, SaaS tools & databases.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex gap-3">
                                                <span className="h-2.5 w-2.5 mt-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(236,72,153,0.9)]" />
                                                <div>
                                                    <p className="font-medium text-white">
                                                        Autonomous Workflow Automation
                                                    </p>
                                                    <p className="text-xs text-slate-400">
                                                        Plan, execute and optimize tasks independently.
                                                    </p>
                                                </div>
                                            </li>

                                        </ul>

                                        <div className="mt-8 grid grid-cols-3 gap-3 text-[11px] text-slate-300">
                                            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                    Execution
                                                </p>
                                                <p className="mt-1 font-medium text-white">Autonomous</p>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                    Integration
                                                </p>
                                                <p className="mt-1 font-medium text-white">API Native</p>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                    Intelligence
                                                </p>
                                                <p className="mt-1 font-medium text-white">Adaptive</p>
                                            </div>
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

                        {/* LEFT CONTENT CARD (BIG) */}
                        <div className="lg:col-span-1 group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_0_60px_rgba(56,189,248,0.25)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/10 to-transparent lg:rounded-2xl rounded-xl" />

                            <div className="relative z-10">
                                <h3 className="text-white text-xl font-semibold mb-4">
                                    Intelligent AI Agents That Work Like Digital Teammates
                                </h3>

                                <p className="text-sm text-slate-300 leading-relaxed">
                                    We design and build autonomous AI agents that can think, decide,
                                    and act inside your business workflows. From task automation to
                                    decision intelligence, our AI agents operate across tools, APIs,
                                    and data systems reducing manual effort and increasing speed.
                                </p>

                                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                                    Whether you need customer support agents, internal automation bots,
                                    research assistants, or multi step workflow agents we build
                                    secure, scalable, production ready systems.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-2 flex flex-col gap-8">

                            {/* TOP CARD */}
                            <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.25)]">

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl" />

                                <div className="relative z-10">
                                    <h3 className="text-white font-semibold text-lg">
                                        AI Agent Architecture & Planning
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                        We design agent frameworks with memory, reasoning loops,
                                        tool usage, and multi step execution flows tailored
                                        to your specific business use-case.
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
                                            Multi Tool & API Integration
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-300">
                                            Connect agents with CRMs, databases, SaaS tools, and
                                            internal systems for real world automation.
                                        </p>
                                    </div>
                                </div>

                                {/* CARD 2 (IMAGE MOVED HERE – SMALL BOTTOM) */}
                                <div className="group relative overflow-hidden sm:rounded-2xl rounded-xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]">

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 blur-2xl" />

                                    <Image
                                        src="/images/ai/agent.jpg"
                                        alt="AI Agent Development"
                                        width={600}
                                        height={400}
                                        className="relative z-10 w-full h-full object-cover rounded-2xl"
                                    />
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
                                1. Use Case Discovery & Agent Strategy
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                2. Agent Architecture & Workflow Design
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                3. Memory, Reasoning & Tool Integration
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                4. Testing in Real Business Environments
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                5. Deployment, Monitoring & Optimization
                            </h3>
                        </div>

                        {/* CENTER LINE */}
                        <div className="relative flex justify-center">

                            {/* Static Line */}
                            <div className="absolute w-[2px] h-full bg-white/20" />

                            {/* Animated Fill Line */}
                            <motion.div
                                style={{ scaleY }}
                                className="origin-top absolute w-[2px] h-full bg-blue-500"
                            />

                            {/* Dots */}
                            <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full" />
                            <div className="absolute top-1/4 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute top-2/4 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute top-3/4 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute bottom-0 w-4 h-4 bg-white rounded-full" />
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="col-span-1 space-y-40 text-slate-300 text-sm leading-relaxed">
                            <p>
                                We analyze your workflows to identify where autonomous AI agents
                                can create measurable impact from support automation to internal
                                task execution.
                            </p>

                            <p>
                                Engineers design agent frameworks including decision loops,
                                multi step task flows, fallback logic, and secure system boundaries.
                            </p>

                            <p>
                                We implement memory layers, vector databases, API integrations,
                                and tool usage so your agent can act intelligently not just respond.
                            </p>

                            <p>
                                Before launch, agents are stress tested across real scenarios,
                                edge cases, and business constraints to ensure reliability.
                            </p>

                            <p>
                                Once deployed, we continuously monitor performance, refine prompts,
                                improve reasoning chains, and optimize system efficiency.
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
                            <div className="absolute top-1/4 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute top-2/4 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute top-3/4 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute bottom-0 w-4 h-4 bg-white rounded-full" />
                        </div>

                        {/* TEXT */}
                        <div className="col-span-3 space-y-28 text-white">

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    1. Use Case Discovery & Agent Strategy
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    We evaluate your business workflows to determine where AI agents
                                    can automate decisions, tasks, and operations.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    2. Agent Architecture & Workflow Design
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Structured reasoning flows, fallback handling, and execution
                                    chains are engineered for reliability.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    3. Memory, Reasoning & Tool Integration
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Agents are connected to databases, APIs, and SaaS tools,
                                    enabling autonomous multi step actions.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    4. Testing in Real Business Environments
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    We validate agent behavior across edge cases and real workflows
                                    before production deployment.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    5. Deployment, Monitoring & Optimization
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Continuous monitoring, prompt refinement, and performance
                                    optimization ensure long term reliability.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <WhoWeAre dark />
            <Testimonials dark />
            <AIFAQ
                title="AI Agent Development FAQs"
                subtitle="Everything you need to know about autonomous AI systems."
                items={AI_AGENT_FAQS}
            />
            <div className="pb-24">
                <ContactSection />
            </div>
        </section>
    );
}

