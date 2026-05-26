"use client";

import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

interface Metric {
    value: string;
    label: string;
}

interface CaseStudy {
    category: string;
    title: string;
    description: string;
    metrics: Metric[];
    image: string;
    cta?: {
        label: string;
        href: string;
    };
}

interface Props {
    sectionHeading: {
        sectionLabel: string;
        heading: string;
        subheading: string;
    };
    caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({
    sectionHeading,
    caseStudies,
}: Props) {
    return (
        <section className="bg-white"> <div className="">

            {/* ✅ SINGLE HEADING */}
            <SectionHeading
                sectionLabel={sectionHeading.sectionLabel}
                heading={sectionHeading.heading}
                subheading={sectionHeading.subheading}
            />

            {/* CASE STUDIES */}
            <div className="mt-16 space-y-20 container">
                {caseStudies.map((study, index) => {
                    const isReverse = index % 2 !== 0;

                    return (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* TEXT */}
                            <div className={isReverse ? "lg:order-2" : ""}>
                                <p className="section-label">
                                    {study.category}
                                </p>

                                <h3 className="mt-3 text-2xl lg:text-3xl font-semibold text-slate-900">
                                    {study.title}
                                </h3>

                                <p className="mt-4 text-slate-600 text-sm max-w-xl">
                                    {study.description}
                                </p>

                                {/* Metrics */}
                                <div className="mt-6 flex gap-6 flex-wrap">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <p className="text-xl font-semibold text-slate-900">
                                                {metric.value}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {metric.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA (IMPORTANT FOR SEO) */}
                                {study.cta && (<Button variant="blue" to={study.cta.href} className="mt-6" > {study.cta.label} </Button>)}
                            </div>

                            {/* IMAGE */}
                            <div className={isReverse ? "lg:order-1" : ""}>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />
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
