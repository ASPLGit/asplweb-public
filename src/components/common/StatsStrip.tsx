"use client";

import CountUp from "../ui/CountUp";

interface StatItem {
    value: string;
    label: string;
}

interface StatsStripProps {
    items: StatItem[];
}

export default function StatsStrip({ items }: StatsStripProps) {
    return (
        <section className="container">
            <div className="bg-[url('/images/bg.webp')] relative w-full sm:rounded-3xl rounded-xl overflow-hidden
            bg-cover bg-center bg-no-repeat">
                <div
                    className="
            absolute inset-0 sm:rounded-3xl rounded-xl
            bg-[url('/images/layer2.webp')]
            bg-cover bg-right-bottom bg-no-repeat
            sm:blur-[0px]
            opacity-50
        "
                />
                <div
                    className="
            absolute inset-0
            bg-black/20
        "
                />
                <div
                    className="
                            flex flex-wrap
    justify-between
    gap-6 relative z-10
                        px-6 py-10
                    "
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                flex-1
                                min-w-[220px]
                                flex flex-col items-center justify-center
                                sm:rounded-2xl rounded-xl
                                px-6 py-8
                                text-center
                                transition-all duration-300
                                ${index === 0
                                    ? `
                                            bg-white/15
                                            backdrop-blur-lg
                                            border border-white/20
                                            shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]
                                          `
                                    : "bg-white/5"
                                }
                            `}
                        >
                            <span className="heading-lg !text-white">
                                <CountUp value={item.value} />
                            </span>

                            <span className="mt-2 text-sm text-white/85">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}