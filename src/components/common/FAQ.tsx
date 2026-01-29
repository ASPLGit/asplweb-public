"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQSectionData } from "@/types/app";

interface FAQSectionProps {
    data: FAQSectionData;
    href?: string;
}

export default function FAQSection({ data, href }: FAQSectionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const canHover =
        typeof window !== "undefined" &&
        window.matchMedia("(hover: hover)").matches;

    const openItem = (index: number) => setActiveIndex(index);
    const toggleItem = (index: number) =>
        setActiveIndex(activeIndex === index ? null : index);

    return (
        <section
            className="
                relative
                bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
                sm:pt-24 pt-10 sm:pb-10 pb-0
            "
        >
            <div className="container">
                <div
                    className="
                        mx-auto max-w-6xl
                        grid grid-cols-1 lg:grid-cols-2
                        sm:gap-10 gap-6
                        items-center
                    "
                >
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center gap-10 h-full space-y-8">
                        <div className="space-y-5">
                            <p className="section-label">FAQ</p>

                            <h2 className="heading-lg">
                                Frequently Asked <br /> Questions
                            </h2>

                            <p className="text-body max-w-md">
                                Find clear answers to common questions about our
                                services, process, and how we work with clients.
                            </p>
                        </div>

                        {/* CTA CARD */}
                        <div
                            className=" sm:block hidden
                                bg-[#F4F6FF]
                                border border-blue-100
                                rounded-2xl
                                p-6
                                max-w-sm
                            "
                        >
                            <h4 className="font-medium text-slate-900 mb-2">
                                Still have questions?
                            </h4>

                            <p className="text-sm text-slate-600 mb-4">
                                Can’t find the answer you’re looking for?
                                Reach out and we’ll be happy to help.
                            </p>
                            {href && (
                                <Link
                                    href={href}
                                    onClick={(e) => {
                                        if (!data.href?.startsWith("#")) return;

                                        e.preventDefault();
                                        const el = document.getElementById("contact");
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="
      bg-[linear-gradient(131.31deg,#007BFF_50.33%,#00D4FF_100.33%)]
      text-white
      shadow-md
      hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.08)]
      px-10 py-3
      text-sm
      inline-flex items-center justify-center
      rounded-lg
      font-medium
      transition-all duration-300 ease-out
    "
                                >
                                    Contact Us
                                </Link>
                            )}

                        </div>
                    </div>

                    {/* RIGHT FAQ LIST (UNCHANGED DESIGN) */}
                    <div className="space-y-4">
                        {data.items.map((item, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={
                                        canHover
                                            ? () => openItem(index)
                                            : undefined
                                    }
                                    className="border border-[#E6F2FF] rounded-xl p-2"
                                >
                                    <div
                                        className={`
                                            rounded-xl cursor-pointer
                                            border transition-all duration-300
                                            hover:-translate-y-0.5
                                            ${isOpen
                                                ? "bg-white border-[#E9E9E9] shadow-[0_12px_30px_rgba(59,130,246,0.18)]"
                                                : "border-blue-100"
                                            }
                                        `}
                                    >
                                        {/* HEADER */}
                                        <button
                                            onClick={
                                                !canHover
                                                    ? () => toggleItem(index)
                                                    : undefined
                                            }
                                            className="
                                                flex w-full items-center justify-between
                                                p-6 text-left
                                                text-sm sm:text-base font-medium
                                            "
                                        >
                                            <span
                                                className={
                                                    isOpen
                                                        ? "text-gradient"
                                                        : "text-slate-900"
                                                }
                                            >
                                                {item.title}
                                            </span>

                                            <span
                                                className={`
                                                    ml-4 text-lg transition-transform duration-300
                                                    ${isOpen
                                                        ? "text-blue-600 rotate-180"
                                                        : "text-slate-400"
                                                    }
                                                `}
                                            >
                                                {isOpen ? "−" : "+"}
                                            </span>
                                        </button>

                                        {/* CONTENT */}
                                        <div
                                            className={`
                                                grid transition-[grid-template-rows]
                                                duration-300 ease-in-out
                                                ${isOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                                }
                                            `}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className=" sm:hidden block mt-4
                                bg-[#F4F6FF]
                                border border-blue-100
                                rounded-2xl
                                p-6
                                max-w-sm
                            "
                >
                    <h4 className="font-medium text-slate-900 mb-2">
                        Still have questions?
                    </h4>

                    <p className="text-sm text-slate-600 mb-4">
                        Can’t find the answer you’re looking for?
                        Reach out and we’ll be happy to help.
                    </p>
                    {href && (
                        <Link
                            href={href}
                            onClick={(e) => {
                                if (!data.href?.startsWith("#")) return;

                                e.preventDefault();
                                const el = document.getElementById("contact");
                                if (el) {
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="
      bg-[linear-gradient(131.31deg,#007BFF_50.33%,#00D4FF_100.33%)]
      text-white
      shadow-md
      hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.08)]
      px-10 py-3
      text-sm
      inline-flex items-center justify-center
      rounded-lg
      font-medium
      transition-all duration-300 ease-out
    "
                        >
                            Contact Us
                        </Link>
                    )}

                </div>
            </div>
        </section>
    );
}
