"use client";

import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import { INDUSTRIES } from "@/data/industries";


export default function IndustriesWeServe() {

    return (
        <section className="sm:space-y-20 space-y-10 relative overflow-hidden
  bg-[linear-gradient(180deg,#f0f9ff_0%,#ffffff_60%)]
  sm:pt-20 pt-10 sm:pb-10 pb-0">

            <div className="container relative sm:space-y-16 space-y-10">
                <SectionHeading
                    sectionLabel="Industries We Serve"
                    heading="Industry-Focused Digital Solutions"
                    subheading="We partner with businesses across industries to design, build, and scale secure digital systems that drive real outcomes."
                />

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-5">
                    {INDUSTRIES.map((item, index) => (
                        <div
                            key={index}
                            className="
                                group relative
                                sm:rounded-2xl rounded-xl
                                bg-white
                                border border-slate-200/70
                                overflow-hidden
                                transition-all duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_20px_40px_rgba(2,132,199,0.12)]
                            "
                        >
                            {/* Image */}
                            <div className="relative sm:h-[230px] h-[160px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="
                                        object-cover
                                        transition-all duration-500
                                        group-hover:scale-110
                                        group-hover:brightness-110
                                    "
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/30" />

                                {/* Hover gradient */}
                                <div
                                    className="
                                        absolute inset-0
                                        bg-gradient-to-t
                                        from-black/80 via-black/50 to-transparent
                                        opacity-0
                                        transition-opacity duration-300
                                        group-hover:opacity-100
                                    "
                                />

                                {/* Content */}
                                <div
                                    className="
        absolute inset-x-0 bottom-0
        p-4
        text-white
        bg-black/50

        /* Mobile: visible by default */
        opacity-100 translate-y-0

        /* Desktop: hover interaction */
        sm:opacity-0 sm:translate-y-6
        sm:bg-transparent
        sm:transition-all sm:duration-300
        sm:group-hover:opacity-100
        sm:group-hover:translate-y-0
    "
                                >
                                    <p className="text-xs leading-relaxed text-slate-100">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="flex items-center justify-center gap-2 sm:p-4 p-3">
                                <span className="min-h-2 min-w-2 h-2 w-2 rounded-full bg-sky-500" />
                                <p className="sm:text-sm text-xs font-semibold text-slate-900 text-center">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
