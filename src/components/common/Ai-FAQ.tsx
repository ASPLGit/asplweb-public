"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "How do you approach custom AI development?",
    answer:
      "We begin with business discovery, data assessment, and feasibility analysis before designing any model. Our focus is measurable outcomes, not experimentation."
  },
  {
    question: "Do you work with LLMs and AI agents?",
    answer:
      "Yes. We design and deploy LLM-powered systems, retrieval pipelines, and intelligent agents tailored to enterprise use cases."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "We implement strict data governance, encryption standards, access control, and audit mechanisms aligned with enterprise compliance requirements."
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer:
      "Absolutely. We specialize in seamless integration into existing architectures including cloud, SaaS platforms, and legacy enterprise systems."
  },
  {
    question: "What is the typical timeline?",
    answer:
      "Most AI initiatives move from discovery to production within 6–10 weeks depending on complexity and data readiness."
  }
];

export default function AIFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-16">

          {/* LEFT */}
          <div className="lg:col-span-4">
            <h2 className="text-white text-3xl sm:text-4xl font-semibold leading-tight">
              Frequently Asked <br /> Questions
            </h2>
            <p className="mt-6 text-slate-400 text-sm">
              Clear answers about how we design, build, and deploy enterprise AI systems.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 space-y-4">

            {FAQS.map((item, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className={`border-b border-white/10 p-4 ${isOpen ? "" : "bg-transparent"} rounded-lg transition-colors`}
                >
                  <button
                    onClick={() =>
                      setActive(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="text-white font-medium text-lg">
                      {item.question}
                    </span>

                    <span className="text-white text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-slate-400 text-sm leading-relaxed pr-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}