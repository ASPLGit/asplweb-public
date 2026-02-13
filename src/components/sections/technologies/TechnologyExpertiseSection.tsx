"use client";

import Image from "next/image";

interface ExpertiseItem {
    title: string;
    description: string;
    chip: string;
}

interface TechnologyExpertiseSectionProps {
    image?: {
        src: string;
        alt: string;
    };
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
    items, image
}: TechnologyExpertiseSectionProps) {
    return (
        <section className="relative py-10" id="explore-more">
            <div className="container mx-auto">
                <div className="relative z-20">
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
    sm:rounded-2xl rounded-xl
    border border-slate-200
    bg-white
    px-6 pt-12 pb-10
    transition-all duration-500
    sm:hover:-translate-y-2
    sm:hover:shadow-[0_40px_90px_-25px_rgba(0,123,255,0.25)]
  "
                                >

                                    {/* Floating Chip */}
                                    <span
                                        className={`
      absolute -top-3 left-6
      px-3 py-1
      text-[11px] font-semibold
      rounded-full
      ${chipStyle}
      z-20
    `}
                                    >
                                        {item.chip}
                                    </span>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* React Glow Background */}
                                    {image && (
                                        <>
                                            <div
                                                className=" sm:block hidden
          absolute -bottom-10 -right-10
          w-40 h-40
          bg-blue-500/10
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition duration-500
        "
                                            />

                                            {/* React Logo */}
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={120}
                                                height={120}
                                                className="
          absolute
          bottom-4 right-4
          w-16 h-16
          opacity-0
          group-hover:opacity-20
          pointer-events-none
          transition-all duration-700
          rotate-[20deg]
          group-hover:rotate-[0deg]
          group-hover:scale-110
        "
                                            />
                                        </>
                                    )}
                                </div>

                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
