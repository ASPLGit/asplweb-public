"use client";

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
            <div className="w-full rounded-3xl overflow-hidden bg-gradient">
                <div
                    className="
                        grid grid-cols-2 sm:grid-cols-4 gap-6
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
                                ${
                                    index === 0
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
                                {item.value}
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