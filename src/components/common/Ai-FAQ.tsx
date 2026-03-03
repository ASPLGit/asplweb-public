"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
  dark?: boolean;
}

export default function AIFAQ({
  title,
  subtitle,
  items,
  dark = true,
}: FAQSectionProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* LEFT */}
          <div className="lg:col-span-4">
            <h2
              className={`heading-lg !text-white ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h2>

            {subtitle && (
              <p
                className={`mt-6 text-sm ${
                  dark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className={`border-b ${isOpen ? "border-white/10 bg-white/5" : "border-transparent"} p-4 rounded-lg transition-colors`}
                >
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span
                      className={`font-medium text-lg ${
                        dark ? "text-white" : "text-black"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`text-xl ${
                        dark ? "text-white" : "text-black"
                      }`}
                    >
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
                        <p
                          className={`mt-4 text-sm leading-relaxed pr-6 ${
                            dark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
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