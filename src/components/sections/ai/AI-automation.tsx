"use client";

import AIFAQ, { FAQItem } from "@/components/common/Ai-FAQ";
import SectionHeading from "@/components/common/SectionHeading";
import ContactSection from "@/components/sections/contact/ContactSection";
import Testimonials from "@/components/sections/home/Testimonials";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AI_AUTOMATION_FAQS: FAQItem[] = [
    {
        question: "What is AI automation?",
        answer:
            "AI automation combines artificial intelligence with system integrations to automate complex business workflows, synchronize data across platforms, and execute real-time decisions without manual intervention."
    },
    {
        question: "How is AI automation different from traditional automation?",
        answer:
            "Traditional automation follows predefined rules, while AI automation adapts based on data patterns, context, and predictive logic enabling smarter, dynamic execution across systems."
    },
    {
        question: "Can AI automation integrate with our existing SaaS tools?",
        answer:
            "Yes. We connect CRMs, HRMS platforms, ERP systems, payment gateways, cloud services, and custom APIs into a unified automation layer tailored to your infrastructure."
    },
    {
        question: "Is AI automation secure for enterprise environments?",
        answer:
            "Absolutely. We implement encrypted data flows, secure API authentication, role-based access control, and compliance-aligned architecture to ensure enterprise-grade security."
    },
    {
        question: "What business impact can we expect?",
        answer:
            "AI automation reduces operational costs, eliminates manual errors, improves process efficiency, and enables faster decision-making across departments."
    },
    {
        question: "What is the typical implementation timeline?",
        answer:
            "Most automation and integration projects move from assessment to deployment within 6–10 weeks depending on system complexity and integration scope."
    }
];
export default function AIAutomationPage() {
    const ref = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] bg-black overflow-hidden">
            {/* AI Agent Development Hero */}
            <section className="relative pt-28 sm:pt-32 pb-24 overflow-hidden bg-black">

                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
                <div className="pointer-events-none absolute -right-32 bottom-20 h-[30rem] w-[30rem] rounded-full bg-sky-500/15 blur-3xl animate-pulse" />

                <div className="container relative">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT – Heading Content */}
                        <div className="max-w-xl">

                            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-200 backdrop-blur">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.9)]" />
                                AI Automation & SaaS Integration
                            </div>

                            <h2 className="mt-6 heading-xl text-white">
                                Unified{" "}
                                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    automation layer
                                </span>{" "}
                                for your entire software stack.
                            </h2>

                            <p className="mt-6 text-slate-300 text-base leading-relaxed">
                                We build AI-powered automation systems that connect your SaaS tools,
                                CRMs, cloud platforms, and internal software into one intelligent
                                ecosystem. Eliminate manual workflows, synchronize data in real time,
                                and enable AI-driven execution across business operations.
                            </p>

                            <div className="mt-8 text-sm text-slate-400 space-y-3">
                                <p>• Cross-platform API orchestration</p>
                                <p>• Real-time workflow automation</p>
                                <p>• Intelligent decision execution</p>
                                <p>• Secure & scalable architecture</p>
                            </div>

                        </div>

                        {/* RIGHT – Integrated SaaS Ecosystem Panel */}
                        <div className="relative">

                            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/50 via-sky-500/40 to-fuchsia-500/30">

                                <div className="relative rounded-2xl border border-white/10 bg-black/70 p-10 backdrop-blur-2xl shadow-[0_0_80px_rgba(99,102,241,0.25)]">

                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                        Integrated SaaS Ecosystem
                                    </p>

                                    <div className="mt-10 space-y-6">

                                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                                            <span className="text-sm text-slate-300">CRM Systems</span>
                                            <span className="text-xs text-indigo-300">Connected</span>
                                        </div>

                                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                                            <span className="text-sm text-slate-300">Payment Gateways</span>
                                            <span className="text-xs text-sky-300">Automated</span>
                                        </div>

                                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                                            <span className="text-sm text-slate-300">Cloud & Databases</span>
                                            <span className="text-xs text-fuchsia-300">Synchronized</span>
                                        </div>

                                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                                            <span className="text-sm text-slate-300">Internal SaaS Tools</span>
                                            <span className="text-xs text-emerald-300">Optimized</span>
                                        </div>

                                    </div>

                                    {/* Bottom Metrics */}
                                    <div className="mt-12 grid grid-cols-3 gap-4 text-[11px] text-slate-300">
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Efficiency
                                            </p>
                                            <p className="mt-1 font-medium text-white">+40%</p>
                                        </div>
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Errors Reduced
                                            </p>
                                            <p className="mt-1 font-medium text-white">-60%</p>
                                        </div>
                                        <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                Automation
                                            </p>
                                            <p className="mt-1 font-medium text-white">24/7 Active</p>
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

                    {/* ROW 1 */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-8">

                        {/* CARD 1 */}
                        <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-[0_0_60px_rgba(99,102,241,0.25)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl" />

                            <div className="relative z-10">
                                <h3 className="text-white font-semibold text-lg">
                                    Intelligent Workflow Automation
                                </h3>
                                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                    Automate repetitive business processes across SaaS tools,
                                    trigger actions instantly, and eliminate manual bottlenecks
                                    through AI-driven orchestration.
                                </p>
                            </div>
                        </div>

                        {/* CARD 2 – CENTER IMAGE */}
                        <div className="group relative overflow-hidden sm:rounded-2xl rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_70px_rgba(99,102,241,0.35)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 blur-2xl" />

                            <Image
                                src="/images/ai/ai-automation.webp" // replace with automation visual
                                alt="AI Automation Integration"
                                fill
                                className="relative z-10 w-full h-full object-cover sm:rounded-2xl rounded-xl"
                            />
                        </div>

                        {/* CARD 3 */}
                        <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_0_60px_rgba(56,189,248,0.25)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/10 to-transparent rounded-2xl" />

                            <div className="relative z-10">
                                <h3 className="text-white font-semibold text-lg">
                                    Cross-Platform SaaS Integration
                                </h3>
                                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                    Seamlessly connect CRMs, HRMS, payment gateways,
                                    cloud infrastructure, and internal systems into
                                    one synchronized automation layer.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* ROW 2 */}
                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* CARD 4 */}
                        <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:shadow-[0_0_60px_rgba(236,72,153,0.25)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-2xl" />

                            <div className="relative z-10">
                                <h3 className="text-white font-semibold text-lg">
                                    Real-Time Data Synchronization
                                </h3>
                                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                    Ensure consistent, real-time data flow across systems
                                    reducing errors, improving reporting accuracy,
                                    and enabling instant decision execution.
                                </p>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className="group relative sm:rounded-2xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.25)]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl" />

                            <div className="relative z-10">
                                <h3 className="text-white font-semibold text-lg">
                                    Scalable & Secure Automation Infrastructure
                                </h3>
                                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                    Built with secure APIs, encrypted data handling,
                                    and enterprise-grade architecture to support
                                    high-volume, mission-critical operations.
                                </p>
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
                                1. Automation Opportunity Assessment
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                2. Integration Architecture Design
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                3. Cross-Platform System Orchestration
                            </h3>

                            <h3 className="text-2xl font-semibold">
                                4. Deployment, Monitoring & Optimization
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
                                We analyze your SaaS ecosystem, internal workflows, and data
                                pipelines to identify high-impact automation opportunities
                                that reduce manual effort and improve efficiency.
                            </p>

                            <p>
                                Our engineers design secure integration architecture,
                                mapping APIs, authentication layers, data flows,
                                and automation logic for scalable execution.
                            </p>

                            <p>
                                Systems are connected across CRMs, HRMS platforms,
                                payment gateways, cloud services, and internal tools —
                                enabling real-time synchronized operations.
                            </p>

                            <p>
                                After deployment, we continuously monitor performance,
                                optimize automation rules, improve system reliability,
                                and ensure long-term scalability.
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
                                    1. Automation Opportunity Assessment
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    We identify repetitive processes and integration gaps
                                    across your software ecosystem.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    2. Integration Architecture Design
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    Secure API connections and automation logic
                                    are structured for scalable performance.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    3. Cross-Platform System Orchestration
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    CRMs, cloud tools, databases, and SaaS platforms
                                    are synchronized into one intelligent automation layer.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    4. Deployment, Monitoring & Optimization
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    We deploy, monitor system health, and continuously
                                    refine automation performance.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <WhoWeAre dark />
            <Testimonials dark />
            <AIFAQ
                title="AI Automation & Integration FAQs"
                subtitle="Everything you need to know about building intelligent automation systems."
                items={AI_AUTOMATION_FAQS}
            />
            <div className="pb-24">
                <ContactSection />
            </div>
        </section>
    );
}

