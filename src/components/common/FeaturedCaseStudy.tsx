"use client";

import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";

interface Metric {
    value: string;
    label: string;
    variant?: "light" | "dark";
}

interface FeaturedCaseStudyProps {
    sectionHeading: {
        sectionLabel: string;
        heading: string;
        subheading: string;
    };

    category: string;
    title: string;
    description: string;
    metrics: Metric[];
    backgroundLayerImage: string;
    caseImage: {
        src: string;
        alt: string;
    };
}

export default function FeaturedCaseStudy({
    sectionHeading,
    category,
    title,
    description,
    metrics,
    backgroundLayerImage,
    caseImage,
}: FeaturedCaseStudyProps) {
    return (
        <section className="bg-white">
            <div className="container">
                {/* Heading */}
                <SectionHeading
                    sectionLabel={sectionHeading.sectionLabel}
                    heading={sectionHeading.heading}
                    subheading={sectionHeading.subheading}
                />

                {/* Featured Case Study */}
                <div
                    className="
                        group sm:mt-16 mt-10 grid gap-10 lg:grid-cols-2 grid-cols-1
                        rounded-3xl
                        relative
                        bg-cover bg-center bg-no-repeat
                        p-6 lg:p-12
                        border border-sky-100
                        transition-all duration-300
                        hover:-translate-y-1 bg-[url('/images/bg.webp')]
                    "
                >
                    {/* Background layer */}
                    <div
                        className="absolute inset-0 rounded-3xl opacity-50 sm:blur-[5px]"
                        style={{
                            backgroundImage: `url(${backgroundLayerImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    {/* Left Content */}
                    <div className="flex flex-col justify-center relative z-10">
                        <span className="text-xs uppercase tracking-widest text-gradient">
                            {category}
                        </span>

                        <h3 className="mt-3 text-2xl lg:text-3xl font-medium text-white">
                            {title}
                        </h3>

                        <p className="mt-4 subheading max-w-xl !text-sm">
                            {description}
                        </p>

                        {/* Metrics */}
                        <div className="mt-6 flex gap-4">
                            {metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className={`
                                        rounded-xl
                                        backdrop-blur-sm
                                        sm:px-5 px-3 py-3
                                        sm:min-w-[150px]
                                        ${metric.variant === "dark"
                                            ? "bg-white"
                                            : "bg-gradient"
                                        }
                                    `}
                                >
                                    <p
                                        className={`
                                            text-xl font-semibold
                                            ${metric.variant === "dark"
                                                ? "text-slate-900"
                                                : "text-white"
                                            }
                                        `}
                                    >
                                        {metric.value}
                                    </p>
                                    <p
                                        className={`
                                            text-xs
                                            ${metric.variant === "dark"
                                                ? "text-slate-600"
                                                : "text-slate-200"
                                            }
                                        `}
                                    >
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative overflow-hidden rounded-2xl z-10">
                        <Image
                            src={caseImage.src}
                            alt={caseImage.alt}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
