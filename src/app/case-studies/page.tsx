import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | ASPL",
  description:
    "Explore real-world implementations and measurable outcomes across AI, cloud, and product engineering.",
};

type CaseStudy = {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: Array<{ value: string; label: string; variant?: "light" | "dark" }>;
  tags: string[];
  layerImage: string;
  visual: { src: string; alt: string };
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "agentic-ops",
    category: "Agentic AI Operations",
    title: "Automated Support Triage with Tool‑Using Agents",
    description:
      "Built an agentic workflow that classifies tickets, drafts responses, and routes escalation—reducing manual work while maintaining safe guardrails.",
    metrics: [
      { value: "48%", label: "Faster resolution" },
      { value: "30%", label: "Less manual triage", variant: "dark" },
    ],
    tags: ["LLM Agents", "RAG", "Guardrails", "Observability"],
    layerImage: "/images/ellipse.svg",
    visual: { src: "/images/tech/openai.svg", alt: "OpenAI" },
  },
  {
    id: "cloud-modernization",
    category: "Cloud Modernization",
    title: "Reliable Azure Migration for a Multi‑Tenant Platform",
    description:
      "Modernized infrastructure and delivery pipelines to improve deployment reliability and cost controls across environments.",
    metrics: [
      { value: "3×", label: "Release cadence" },
      { value: "22%", label: "Lower infra cost", variant: "dark" },
    ],
    tags: ["Azure", "CI/CD", "IaC", "Monitoring"],
    layerImage: "/images/ellipse.svg",
    visual: { src: "/images/tech/azure.svg", alt: "Azure" },
  },
  {
    id: "data-ml",
    category: "ML & Analytics",
    title: "Predictive Models for Demand Forecasting",
    description:
      "Delivered production-grade ML pipelines with monitoring and drift checks—improving forecast accuracy and planning confidence.",
    metrics: [
      { value: "17%", label: "Better accuracy" },
      { value: "99.9%", label: "Pipeline uptime", variant: "dark" },
    ],
    tags: ["Python", "Pandas", "TensorFlow", "MLOps"],
    layerImage: "/images/ellipse.svg",
    visual: { src: "/images/tech/tensorflow.svg", alt: "TensorFlow" },
  },
  {
    id: "web3-security",
    category: "Web3 Engineering",
    title: "Smart Contract Delivery with Security‑First Reviews",
    description:
      "Implemented a contract system with test automation and review gates—reducing risk while accelerating iteration cycles.",
    metrics: [
      { value: "65%", label: "Faster iteration" },
      { value: "0", label: "Critical issues shipped", variant: "dark" },
    ],
    tags: ["Solidity", "Testing", "Audits", "Integration"],
    layerImage: "/images/ellipse.svg",
    visual: { src: "/images/tech/ethereum.svg", alt: "Ethereum" },
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
        </div>

        <div className="container relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-gradient">
              Case Studies
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Our work in action built for outcomes
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Explore selected engagements where design, engineering, and AI come
              together to ship measurable results.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
              {["AI & Agents", "Cloud", "Product Engineering", "Web3"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="container pb-14 sm:pb-20">
        <SectionHeading
          sectionLabel="Selected projects"
          heading="Modern builds. Real metrics."
          subheading="A few highlights across AI, cloud, analytics, and Web3 delivery."
        />

        <div className="sm:mt-16 mt-10 space-y-16">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="
        group relative overflow-hidden
        rounded-3xl border border-slate-200
        bg-white
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_-30px_rgba(2,132,199,0.35)]
      "
            >
              {/* Subtle Background Glow */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-100/60 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative grid lg:grid-cols-2 gap-10 p-8 lg:p-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                  {/* Category */}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600">
                    {cs.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl lg:text-3xl font-semibold text-slate-900 leading-snug">
                    {cs.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-relaxed text-slate-600 max-w-xl">
                    {cs.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="
                  min-w-[150px]
                  rounded-xl
                  border border-slate-200
                  bg-slate-50
                  px-5 py-4
                "
                      >
                        <p className="text-xl font-semibold text-slate-900">
                          {m.value}
                        </p>
                        <p className="text-xs text-slate-500">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="
                  rounded-full
                  border border-slate-200
                  bg-white
                  px-3 py-1
                  text-[11px]
                  text-slate-600
                "
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-8 text-xs text-slate-400">
                    NDA-safe summary • anonymized metrics
                  </div>
                </div>

                {/* RIGHT VISUAL PANEL */}
                <div className="relative">
                  <div className="
            relative overflow-hidden rounded-2xl
            border border-slate-200
            bg-gradient-to-br from-sky-50 via-white to-blue-50
            p-10
            flex items-center justify-center
            transition-all duration-500
            group-hover:scale-[1.02]
          ">
                    <Image
                      src={cs.visual.src}
                      alt={cs.visual.alt}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

