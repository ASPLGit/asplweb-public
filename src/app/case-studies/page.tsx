import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CASE_STUDIES } from "@/data/caseStudy";

export const metadata: Metadata = {
  title: "Case Studies | ASPL",
  description:
    "Explore real-world implementations and measurable outcomes across AI, cloud, and product engineering.",
};


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
                <div className="w-full">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600">
                    {cs.category}
                  </p>

                  <h3 className="mt-4 text-2xl lg:text-3xl font-semibold text-slate-900 leading-snug">
                    {cs.title}
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-slate-600 max-w-xl">
                    {cs.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className={` ${m.variant === "dark" ? "bg-slate-50 text-slate-900 border-slate-200" : "bg-gradient text-white"}
              min-w-[150px]
              rounded-xl
              border
              px-5 py-4
            `}
                      >
                        <p className="text-xl font-semibold">
                          {m.value}
                        </p>
                        <p className={`text-xs ${m.variant === "dark" ? "text-slate-500" : "text-white"}`}>
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

                  <div className="mt-8 text-xs text-slate-400">
                    NDA-safe summary • anonymized metrics
                  </div>
                </div>

                {/* RIGHT IMAGE PANEL */}
                <div className="
        relative
        w-full
        h-[320px] lg:h-[420px]
        rounded-2xl
        border border-slate-200
        overflow-hidden
        group-hover:scale-[1.02]
        transition-all duration-500
      ">
                  <Image
                    src={cs.visual.src}
                    alt={cs.visual.alt}
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

    </section>
  );
}

