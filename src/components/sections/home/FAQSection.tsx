"use client";

import { useEffect, useState } from "react";

interface FAQItem {
    title: string;
    content: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        title: "What services do you offer?",
        content:
            "We provide end-to-end IT solutions including web and mobile development, cloud & SaaS platforms, blockchain & Web3 development, AI & automation, cybersecurity, and enterprise system integration.",
    },
    {
        title: "Do you work with startups as well as enterprises?",
        content:
            "Yes. We work with startups, scale-ups, and enterprises. Our solutions are designed to grow with your business while maintaining performance, security, and scalability.",
    },
    {
        title: "How do you ensure quality and reliability?",
        content:
            "We follow structured development processes, regular code reviews, testing, performance optimization, and continuous client collaboration throughout the project lifecycle.",
    },
    {
        title: "Can you modernize existing or legacy systems?",
        content:
            "Absolutely. We modernize legacy systems by improving performance, migrating to cloud infrastructure, enhancing security, and upgrading user experience with minimal disruption.",
    },
    {
        title: "How is project communication handled?",
        content:
            "We maintain transparent communication through regular updates, milestone-based reviews, dedicated points of contact, and collaborative tools to ensure clarity at every stage.",
    },
];

export default function FAQSectionOld() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [canHover] = useState(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(hover: hover)").matches;
    });


    const openItem = (index: number) => setActiveIndex(index);
    const toggleItem = (index: number) =>
        setActiveIndex(activeIndex === index ? null : index);

    return (
        <section className="relative overflow-hidden
  bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
  sm:pt-20 pt-10">
            <div className="container">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center mb-14">
                    <p className="section-label mb-2">
                        FAQ
                    </p>
                    <h2 className="heading-lg">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="mx-auto max-w-3xl space-y-4">
                    {FAQ_DATA.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={
                                    canHover ? () => openItem(index) : undefined
                                }
                                className="border border-[#E6F2FF] rounded-xl p-2"
                            >
                                <div className={`
                                    rounded-xl cursor-pointer
                                    border transition-all duration-300
                                    hover:-translate-y-0.5
                                    ${isOpen
                                        ? "bg-white border-[#E9E9E9] shadow-[0_12px_30px_rgba(59,130,246,0.18)]"
                                        : "border-blue-100"
                                    }
                                `}>
                                    {/* HEADER */}
                                    <button
                                        onClick={
                                            !canHover
                                                ? () => toggleItem(index)
                                                : undefined
                                        }
                                        className="
                                        flex w-full items-center justify-between
                                        p-6 text-left text-sm sm:text-base font-medium border-[#E9E9E9]
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
                                        grid transition-[grid-template-rows] duration-300 ease-in-out
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
        </section>
    );
}
