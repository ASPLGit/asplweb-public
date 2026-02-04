"use client";

import Image from "next/image";

interface ExpertiseItem {
    title: string;
    description: string;
    chip: string;
}

interface TechnologyExpertiseSectionProps {
    items: ExpertiseItem[];
}

const CHIP_STYLES = [
    "bg-blue-500 text-white",
    "bg-cyan-500 text-white",
    "bg-indigo-500 text-white",
    "bg-emerald-500 text-white",
    "bg-violet-500 text-white",
    "bg-rose-500 text-white",
];

export default function TechnologyExpertiseSection({
    items,
}: TechnologyExpertiseSectionProps) {
    return (
        <section className="relative bg-white pt-10 pb-32" id="explore-more">
            <Image src='/images/tech/react.svg' alt="react img" width={400} height={400} className="absolute -bottom-20 -right-10 sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] z-10 opacity-50"/>
            <div className="container mx-auto">
                <div className="relative z-20">
                    {/* Background glow */}
                    <div className="absolute inset-0 flex justify-center pointer-events-none">
                        <div className="w-[520px] h-[520px] rounded-full bg-blue-400/10 blur-[140px]" />
                    </div>

                    {/* Grid */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, index) => {
                            const chipStyle =
                                CHIP_STYLES[index % CHIP_STYLES.length];

                            return (
                                <div
                                    key={index}
                                    className="
                                        group
                                        relative
                                        rounded-2xl
                                        bg-white/80 backdrop-blur-xl
                                        border border-slate-200
                                        px-6 pt-12 pb-8
                                        transition-all duration-300
                                        hover:-translate-y-2
                                        hover:shadow-[0_35px_85px_-30px_rgba(0,0,0,0.25)]
                                    "
                                >
                                    {/* Floating chip */}
                                    <span
                                        className={`
                                            absolute -top-3 left-6
                                            px-3 py-1
                                            text-[11px] font-semibold
                                            rounded-full
                                            ${chipStyle}
                                        `}
                                    >
                                        {item.chip}
                                    </span>

                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
