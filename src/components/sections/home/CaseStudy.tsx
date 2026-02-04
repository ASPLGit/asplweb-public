import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";

export default function CaseStudy() {
    return (
        <section className="bg-white">
            <div className="container">
                {/* Heading */}
                <SectionHeading
                    sectionLabel="Recent Case Studies"
                    heading="Our Work in Action"
                    subheading="Real-world projects where design, technology, and performance come together."
                />
                {/* Featured Case Study */}
                <div

                    className="
                        group sm:mt-16 mt-10 grid gap-10 lg:grid-cols-2 grid-cols-1
                        rounded-3xl
                        bg-[url('/images/bg.webp')] relative
            bg-cover bg-center bg-no-repeat
                        p-6 lg:p-12
                        border border-sky-100
                        transition-all duration-300
                        hover:-translate-y-1
                    "
                >
                    <div
                        className="
            absolute inset-0
            bg-[url('/images/layer6.webp')]
            bg-cover bg-center bg-no-repeat
            sm:blur-[5px]
            opacity-50
            rounded-3xl
        "
                    />
                    {/* Left Content */}
                    <div className="flex flex-col justify-center relative z-10">
                        <span className="text-xs uppercase tracking-widest text-gradient">
                            FinTech Platform
                        </span>

                        <h3 className="mt-3 text-2xl lg:text-3xl font-medium text-white">
                            Scalable KYC & Identity Verification
                        </h3>

                        <p className="mt-4 subheading max-w-xl !text-sm">
                            Built a reusable, privacy-first identity verification system that
                            eliminated repeated KYC, reduced onboarding friction, and improved
                            regulatory compliance.
                        </p>

                        {/* Metrics */}
                        <div className="mt-6 flex gap-4">
                            <div
                                className="
                                    rounded-xl
                                    bg-gradient
                                    backdrop-blur-sm
                                    sm:px-5 px-3 py-3
                                    sm:min-w-[150px]
                                "
                            >
                                <p className="text-xl font-semibold text-white">65%</p>
                                <p className="text-xs text-slate-200">
                                    Faster onboarding
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    bg-white
                                    backdrop-blur-sm
                                    sm:px-5 px-3 py-3
                                    sm:min-w-[150px]
                                "
                            >
                                <p className="text-xl font-semibold text-slate-900">40%</p>
                                <p className="text-xs text-slate-600">
                                    Cost reduction
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        {/* <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gradient transition">
                            View case study
                            <span className="transition-transform group-hover:translate-x-1">
                                <Image src="/images/icons/arrow-right-blue.svg" alt="Arrow right" width={16} height={16} />
                            </span>
                        </span> */}
                    </div>

                    {/* Right Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                            src="/images/caseStudy/case1.jpg"
                            alt="KYC Case Study"
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