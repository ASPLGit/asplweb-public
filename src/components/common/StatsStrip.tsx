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
            <div className="bg-[url('/images/bg.webp')] relative w-full rounded-3xl overflow-hidden
            bg-cover bg-center bg-no-repeat">
                <div
                    className="
            absolute inset-0
            bg-[url('/images/layer2.webp')]
            bg-cover bg-right-bottom bg-no-repeat
            sm:blur-[0px]
            opacity-50
        "
                />
                <div
                    className="
                        grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10
                        px-6 py-10
                    "
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                flex flex-col items-center justify-center
                                rounded-2xl
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