import { notFound } from "next/navigation";
import { technologies } from "@/data/singleTechnologyPage";
import SectionHeading from "@/components/common/SectionHeading";
import FAQSection from "@/components/common/FAQ";
import TechnologyExpertiseSection from "@/components/sections/technologies/TechnologyExpertiseSection";
import TechnologiesHeroSection from "@/components/sections/technologies/TechnologyHeroSection";
import DatabaseComparisonSection from "@/components/sections/technologies/DatabaseComparisonSection";
import FeaturedCaseStudy from "@/components/common/FeaturedCaseStudy";
import Link from "next/link";
import { BLOGS } from "@/data/blogs";
import type { Metadata } from "next";

type Params = { slug: string } | Promise<{ slug: string }>;

interface TechnologyPageProps {
    params: Params;
}

export async function generateMetadata(
    { params }: { params: Params }
): Promise<Metadata> {
    const { slug } = await Promise.resolve(params);
    const technology = technologies.find((item) => item.slug === slug);

    return {
        title: technology?.hero?.title ?? "Technologies",
        description:
            technology?.hero?.description ??
            "Technologies and frameworks we use to build scalable, secure digital solutions.",
        alternates: {
            canonical: `/technologies/${slug}`,
        },
    };
}

export default async function TechnologyPage({
    params,
}: TechnologyPageProps) {
    const { slug } = await Promise.resolve(params);

    const technology = technologies.find(
        (item) => item.slug === slug
    );

    if (!technology) {
        notFound();
    }

    const isDotNet = slug === "dotnet";
    const dotnetFeaturedBlogs = isDotNet
        ? BLOGS.filter((b) =>
            [
                "dotnet-migration-case-study-lessons",
                "migrate-legacy-to-modern-dotnet",
            ].includes(b.slug)
        )
        : [];

    return (
        <div className="bg-white">
            <div className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] sm:pb-20 pb-10">
                {/* HERO */}
                <TechnologiesHeroSection {...technology.hero} />

                {/* Intro + anchor */}
                <div id="explore-more" className="container">
                    <SectionHeading
                        sectionLabel={technology.sectionHeading.sectionLabel}
                        heading={technology.sectionHeading.heading}
                        subheading={technology.sectionHeading.subheading}
                    />
                </div>

                {/* EXPERTISE */}
                <TechnologyExpertiseSection
                    items={technology.expertise}
                    image={technology.expertiseImage}
                />

                {/* Optional comparison (e.g. SQL vs Mongo) */}
                {technology.comparison && (
                    <DatabaseComparisonSection data={technology.comparison} />
                )}

                {/* Optional Case Study (only when present in data) */}
                {"caseStudy" in technology && (technology as any).caseStudy && (
                    <FeaturedCaseStudy {...(technology as any).caseStudy} />
                )}

                {/* .NET-only expansion sections */}
                {isDotNet && (
                    <>

                        <section className="relative w-full overflow-hidden  bg-[url('/images/bg.webp')]
                        bg-cover bg-bottom bg-no-repeat after:content-['']
                        after:absolute
                        after:inset-0
                        after:bg-[url('/images/layer3.webp')]
                        after:bg-cover
                        after:blur-[1px]
                        after:bg-top
                        after:bg-no-repeat
                        after:opacity-50
                        after:pointer-events-none">
                            {/* Background */}
                            <div
                                className="
                                absolute inset-0
                                bg-black/70
                            "
                            />


                            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-14 sm:py-16 text-center">
                                {/* Heading */}
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                                    Scalable & Secure <span className="text-blue-100">.NET Development</span>
                                </h2>

                                {/* Subheading */}
                                <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-blue-100 leading-relaxed">
                                    Build high-performance, enterprise-grade applications with modern .NET technologies,
                                    designed for scalability, security, and long-term growth.
                                </p>

                            </div>
                        </section>
                        {/* Modernization Playbook */}
                        <section className="container">

                            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">

                                {/* subtle background */}
                                <div
                                    className="absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)",
                                        backgroundSize: "26px 26px",
                                    }}
                                />

                                <div className="relative grid lg:grid-cols-2 gap-12 items-start">

                                    {/* LEFT SIDE */}
                                    <div className="max-w-xl">

                                        <p className="section-label">
                                            .NET Modernization Playbook
                                        </p>

                                        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                                            Enterprise-grade migration strategy
                                        </h2>

                                        <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                            Legacy .NET migrations involve more than upgrading frameworks.
                                            We carefully plan around hidden dependencies, authentication changes,
                                            platform constraints, and performance bottlenecks ensuring your system
                                            becomes scalable, secure, and production-ready.
                                        </p>

                                        {/* Divider */}
                                        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                                        {/* Tags */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {[".NET 6/7/8", "Microservices", "OAuth/JWT", "Linux Ready"].map((chip) => (
                                                <span
                                                    key={chip}
                                                    className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                                                >
                                                    {chip}
                                                </span>
                                            ))}
                                        </div>

                                    </div>

                                    {/* RIGHT SIDE */}
                                    <div className="space-y-8">

                                        {/* BLOCK 1 */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                Migration approaches
                                            </h3>

                                            <div className="mt-4 space-y-4">
                                                {[
                                                    "Lift & shift (quick but limited)",
                                                    "Strangler pattern (recommended)",
                                                    "Hybrid modernization approach",
                                                    "Selective rewrite for critical modules",
                                                ].map((item) => (
                                                    <div key={item} className="flex items-center gap-3">
                                                        <div className="mt-1 h-2 w-2 rounded-full bg-gradient" />
                                                        <p className="text-sm text-slate-700 leading-relaxed">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-slate-200" />

                                        {/* BLOCK 2 */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                Risks we proactively solve
                                            </h3>

                                            <div className="mt-4 space-y-4">
                                                {[
                                                    "Unsupported legacy libraries",
                                                    "Auth migration (Forms → OAuth/JWT)",
                                                    "Windows to Linux compatibility",
                                                    "Stateful → stateless architecture redesign",
                                                    "Database & ORM performance bottlenecks",
                                                ].map((item) => (
                                                    <div key={item} className="flex items-center gap-3">
                                                        <div className="mt-1 h-2 w-2 rounded-full bg-gradient" />
                                                        <p className="text-sm text-slate-700 leading-relaxed">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>
                    </>
                )}

                {/* CTA */}
                <section className="container">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_18px_55px_-40px_rgba(15,23,42,0.25)]">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gradient">
                                    Next step
                                </p>
                                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">
                                    Talk to an architect
                                </h2>
                                <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                                    Get a clear plan, scope, and delivery approach aligned to your systems, timeline, and risk profile.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(131.31deg,#007BFF_50.33%,#00D4FF_100.33%)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <FAQSection data={technology.faq} href="/contact" />
            </div>
        </div>
    );
}
