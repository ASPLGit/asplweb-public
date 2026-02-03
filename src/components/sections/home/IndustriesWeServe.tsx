"use client";

import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import { INDUSTRIES } from "@/data/industries";

export default function IndustriesWeServe() {
    return (
        <section className="relative overflow-hidden pb-10">
            {/* CONTENT */}
            <div className="container relative z-10 sm:space-y-16 space-y-8">
                <SectionHeading
                    sectionLabel="Industries We Serve"
                    heading="Industry-Focused Digital Solutions"
                    subheading="We collaborate with businesses across industries to build secure, scalable, and future-ready digital systems."
                />

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {INDUSTRIES.map((item, index) => (
                        <div
                            key={index}
                            className=" group
                rounded-2xl
                bg-white
                border border-slate-200
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] p-5
            "
                        >
                            <h3 className="text-base font-semibold text-slate-900">
                                {item.name}
                            </h3>
                            {/* IMAGE */}
                            <div className="relative mt-4 h-[190px] overflow-hidden rounded-xl">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="
        object-cover
        sm:brightness-75 sm:contrast-90
        transition-all duration-500
        group-hover:brightness-100
        group-hover:contrast-100
    "
                                />
                            </div>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 py-5">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="
                            rounded-full
                            bg-slate-100
                            px-3 py-1
                            text-xs
                            font-medium
                            text-slate-600
                        "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* CONTENT */}
                            <div>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}

