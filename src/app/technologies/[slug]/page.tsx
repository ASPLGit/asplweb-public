import { notFound } from "next/navigation";
import { technologies } from "@/data/singleTechnologyPage";
import SectionHeading from "@/components/common/SectionHeading";
import FAQSection from "@/components/common/FAQ";
import FeaturedCaseStudy from "@/components/common/FeaturedCaseStudy";
import TechnologyExpertiseSection from "@/components/sections/technologies/TechnologyExpertiseSection";
import TechnologiesHeroSection from "@/components/sections/technologies/TechnologyHeroSection";
import DatabaseComparisonSection from "@/components/sections/technologies/DatabaseComparisonSection";

interface TechnologyPageProps {
    params: {
        slug: string;
    };
}

export const TECHNOLOGY_META: Record<
    string,
    { title: string; description: string }
> = {
    react: {
        title: "React Development",
        description:
            "Build fast, scalable, and interactive user interfaces using React for modern web applications.",
    },
    nextjs: {
        title: "Next.js Development",
        description:
            "Production-grade Next.js solutions with server rendering, SEO optimization, and high performance.",
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const meta = TECHNOLOGY_META[slug];

    return {
        title: meta?.title ?? "Technologies",
        description:
            meta?.description ??
            "Technologies and frameworks we use to build scalable, secure digital solutions.",
    };
}

export default async function TechnologyPage({
    params,
}: TechnologyPageProps) {
    const { slug } = await params;

    const technology = technologies.find(
        (item) => item.slug === slug
    );

    if (!technology) {
        notFound();
    }

    return (
        <div className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] sm:pb-20 pb-10">
            {/* HERO */}
            <TechnologiesHeroSection {...technology.hero} />

            <div id="explore-more">
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
                {/* CASE STUDY (OPTIONAL) */}
                {technology.caseStudy && (
                    <FeaturedCaseStudy {...technology.caseStudy} />
                )}
                {technology.comparison && (
                    <DatabaseComparisonSection data={technology.comparison} />
                )}

                <FAQSection data={technology.faq} href="/contact" />
        </div>
    );
}
