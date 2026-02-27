"use client";

import AIFAQ from "@/components/common/Ai-FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import ContactSection from "@/components/sections/contact/ContactSection";
import Testimonials from "@/components/sections/home/Testimonials";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AIDevelopment() {
    const ref = useRef(null);

    const deliverables = [
        {
            title: "AI strategy & roadmap design",
            desc: "Use-cases, feasibility, success metrics and a delivery plan.",
        },
        {
            title: "LLM agents & automation systems",
            desc: "Tool-using agents integrated with your stack and workflows.",
        },
        {
            title: "Production-grade ML pipelines",
            desc: "Training, evaluation, monitoring and continuous improvement.",
        }
    ];

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] bg-black overflow-hidden">
            {/* Hero */}
            <section className="relative pt-24 sm:pt-28 lg:pt-32">
                {/* Ambient gradients */}
                <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl ai-float" />
                <div
                    className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl ai-float"
                    style={{ animationDelay: "0.7s", animationDuration: "9.5s" }}
                />
                <div
                    className="pointer-events-none absolute left-1/2 top-44 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl ai-float"
                    style={{ animationDelay: "1.2s", animationDuration: "11s" }}
                />

                {/* Soft scan beam */}
                <div className="pointer-events-none absolute inset-x-0 top-[30%] h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-60 ai-scan" />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.4) 1px, transparent 0)",
                        backgroundSize: "26px 26px",
                    }}
                />

                <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}
                        <div className="max-w-xl">

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                                Enterprise AI Engineering
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                                className="mt-6 heading-xl text-white"
                            >
                                Build{" "}
                                <span className="text-gradient-animate">
                                    intelligent systems
                                </span>{" "}
                                that drive measurable outcomes.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
                                className="mt-6 text-slate-300 text-base leading-relaxed"
                            >
                                We architect and deploy AI solutions from LLM-powered agents to
                                predictive models—integrated seamlessly into your products and
                                operations.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
                                className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200"
                            >
                                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1">
                                    LLMs & Agents
                                </span>
                                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1">
                                    ML Pipelines
                                </span>
                                <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1">
                                    Guardrails
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                    Monitoring
                                </span>
                            </motion.div>

                            {/* Clean CTA Row */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                                className="mt-10 flex flex-wrap items-center gap-4"
                            >
                                <button className="button-wrapper">
                                    <span className="button-bg" />
                                    <span className="button px-6 py-3">
                                        Talk to an AI architect
                                    </span>
                                </button>

                                <button className="group inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-white">
                                    View case studies
                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                        →
                                    </span>
                                </button>

                                <p className="w-full text-xs text-slate-400 sm:w-auto">
                                    Typical delivery: 6–10 weeks to production.
                                </p>
                            </motion.div>
                        </div>

                        {/* RIGHT – Clean Visual Panel */}
                        <div className="relative">

                            <div className="pointer-events-none absolute -inset-8 bg-[conic-gradient(from_140deg_at_50%_50%,rgba(56,189,248,0.3),rgba(129,140,248,0.3),rgba(236,72,153,0.2),transparent_70%)] opacity-40 blur-3xl" />

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                                className="relative lg:rounded-2xl rounded-xl p-[1px] bg-[linear-gradient(120deg,rgba(56,189,248,0.55),rgba(129,140,248,0.45),rgba(236,72,153,0.35),rgba(56,189,248,0.25))] bg-[length:220%_220%] animate-[aiShimmer_10s_ease-in-out_infinite]"
                            >
                                <div className="relative lg:rounded-2xl rounded-xl border border-white/10 bg-black/70 p-8 shadow-[0_0_60px_rgba(56,189,248,0.25)] backdrop-blur-2xl overflow-hidden">
                                    {/* inner scan */}
                                    <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-[200%] bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.10),transparent)] ai-panel-scan opacity-40" />

                                    <div className="flex items-center justify-between">
                                        <p className="text-xs uppercase tracking-[0.18em] text-gradient">
                                            What we deliver
                                        </p>
                                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-200">
                                            AI Delivery Framework
                                        </span>
                                    </div>

                                    <ul className="mt-6 space-y-4 text-sm text-slate-200">
                                        {deliverables.map((item, idx) => (
                                            <motion.li
                                                key={item.title}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 + idx * 0.08 }}
                                                className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 hover:bg-white/[0.06] transition"
                                            >
                                                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.85)]" />
                                                <div className="min-w-0">
                                                    <p className="font-medium text-white">
                                                        {item.title}
                                                    </p>
                                                    <p className="mt-0.5 text-xs text-slate-400">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] text-slate-300">
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Time to value
                                            </p>
                                            <p className="mt-1 font-medium text-white">Weeks</p>
                                        </div>
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Reliability
                                            </p>
                                            <p className="mt-1 font-medium text-white">Observable</p>
                                        </div>
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Security
                                            </p>
                                            <p className="mt-1 font-medium text-white">Aligned</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
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

                        {/* LEFT LARGE IMAGE CARD */}
                        <div className="group relative overflow-hidden sm:rounded-2xl rounded-xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 blur-2xl" />

                            <Image
                                src="/images/ai/robot-hand.png"
                                alt="AI Robotics"
                                width={100}
                                height={400}
                                className="relative z-10 !w-full !h-auto object-contain"
                            />

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-2 flex flex-col gap-8">

                            {/* TOP WIDE CARD */}
                            <div className="group relative h-full sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_0_60px_rgba(56,189,248,0.25)]">

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/10 to-transparent lg:rounded-2xl rounded-xl" />

                                <div className="relative z-10">
                                    <Image
                                        src="/images/icons/custom-ai.svg"
                                        alt="AI Robotics"
                                        width={50}
                                        height={50}
                                        className="relative z-10 object-contain mb-4"
                                    />

                                    <h3 className="text-white text-lg font-semibold">
                                        Custom AI Strategy & Solution Design
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                        We start with your business challenge not the algorithm.
                                        From use-case discovery to technical architecture, we design AI solutions
                                        that align with your goals, data, and long-term growth plans.
                                    </p>
                                </div>
                            </div>

                            {/* BOTTOM TWO CARDS */}
                            <div className="grid sm:grid-cols-2 gap-8 h-full">

                                <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.25)]">

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-500/10 to-transparent lg:rounded-2xl rounded-xl" />

                                    <div className="relative z-10">
                                        <Image
                                            src="/images/icons/modal-development.svg"
                                            alt="AI Robotics"
                                            width={50}
                                            height={50}
                                            className="relative z-10 object-contain mb-4"
                                        />
                                        <h3 className="text-white font-semibold">
                                            Model Development & Training
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-300">
                                            Every model is optimized for accuracy, performance, and scalability.
                                        </p>
                                    </div>
                                </div>

                                <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:shadow-[0_0_60px_rgba(236,72,153,0.25)]">

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-500/10 to-transparent lg:rounded-2xl rounded-xl" />

                                    <div className="relative z-10">
                                        <Image
                                            src="/images/icons/deployment.svg"
                                            alt="AI Robotics"
                                            width={50}
                                            height={50}
                                            className="relative z-10 object-contain mb-4"
                                        />
                                        <h3 className="text-white font-semibold">
                                            Seamless Integration & Deployment
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-300">
                                            AI only creates value when it works inside your systems.
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

                    <div className="sm:grid grid-cols-3 sm:gap-12 gap-2 hidden">

                        {/* LEFT TEXT */}
                        <div className="col-span-1 space-y-40 text-white">
                            <h3 className="sm:text-2xl text-base font-semibold">
                                1. Discovery & Problem Definition
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                2. Data Strategy & Preparation
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                3. Model Design & Development
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
                            <div className="absolute top-1/2 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute bottom-0 w-4 h-4 bg-white rounded-full" />
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="col-span-1 space-y-40 text-slate-300 text-sm leading-relaxed">
                            <p>
                                We begin by understanding your business objectives, systems,
                                and measurable outcomes before any model is built.
                            </p>

                            <p>
                                We audit, clean, and structure datasets to ensure
                                accuracy, compliance, and scalability.
                            </p>

                            <p>
                                Engineers design and train models optimized
                                for real-world reliability and performance.
                            </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-4 sm:gap-12 gap-2 sm:hidden">

                        {/* CENTER LINE */}
                        <div className="relative col-span-1 flex justify-center">

                            {/* Static Line */}
                            <div className="absolute w-[2px] h-full bg-white/20" />

                            {/* Animated Fill Line */}
                            <motion.div
                                style={{ scaleY }}
                                className="origin-top absolute w-[2px] h-full bg-blue-500"
                            />

                            {/* Dots */}
                            <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full" />
                            <div className="absolute top-1/2 w-4 h-4 bg-white rounded-full -translate-y-1/2" />
                            <div className="absolute bottom-0 w-4 h-4 bg-white rounded-full" />
                        </div>
                        {/* LEFT TEXT */}
                        <div className="col-span-3 sm:space-y-40 space-y-28 text-white">
                            <div className="space-y-10">
                                <h3 className="text-2xl font-semibold">
                                    1. Discovery & Problem Definition
                                </h3>
                                <p>
                                    We begin by understanding your business objectives, systems,
                                    and measurable outcomes before any model is built.
                                </p>
                            </div>
                            <div className="space-y-10">
                                <h3 className="text-2xl font-semibold">
                                    2. Data Strategy & Preparation
                                </h3>
                                <p>
                                    We audit, clean, and structure datasets to ensure
                                    accuracy, compliance, and scalability.
                                </p>
                            </div>
                            <div className="space-y-10">
                                <h3 className="text-2xl font-semibold">
                                    3. Model Design & Development
                                </h3>
                                <p>
                                    Engineers design and train models optimized
                                    for real-world reliability and performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhoWeAre dark />
            <Testimonials dark />
            <ContactSection />
            <AIFAQ />
        </section>
    );
}

