"use client";

import { useState } from "react";
import { FAQSectionData } from "@/types/faq";

interface FAQSectionProps {
    data: FAQSectionData;
}

export default function FAQSection({ data }: FAQSectionProps) {
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
                relative overflow-hidden
                bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
                sm:pt-24 pt-10 pb-6
            "
        >
            <div className="container">
                {/* Heading (optional) */}
                {(data.label || data.heading) && (
                    <div className="mx-auto max-w-3xl text-center mb-14">
                        {data.label && (
                            <p className="section-label mb-2">
                                {data.label}
                            </p>
                        )}
                        {data.heading && (
                            <h2 className="heading-lg">
                                {data.heading}
                            </h2>
                        )}
                    </div>
                )}

                {/* FAQ List */}
                <div className="mx-auto max-w-3xl space-y-4">
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
                                        ${
                                            isOpen
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
                                            p-6 text-left text-sm sm:text-base font-medium
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
                                                ${
                                                    isOpen
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
                                            grid transition-[grid-template-rows] duration-300 ease-in-out
                                            ${
                                                isOpen
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
        </section>
    );
}
