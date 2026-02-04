import { notFound } from "next/navigation";
import { technologies } from "@/data/singleTechnologyPage";
import TechnologiesHeroSection from "@/components/sections/technologies/technologiesHeroSection";
import SectionHeading from "@/components/common/SectionHeading";
import TechnologyExpertiseSection from "@/components/sections/technologies/TechnologyExpertiseSection";
import FAQSection from "@/components/common/FAQ";
import { REACT_SERVICE } from "@/data/reactExpertise";

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
    nodejs: {
        title: "Node.js Development",
        description:
            "Scalable backend solutions using Node.js for APIs, microservices, and real-time applications.",
    },
    dotnet: {
        title: ".NET & ASP.NET Development",
        description:
            "Enterprise-grade applications built with .NET and ASP.NET Core for security, performance, and scalability.",
    },
    angular: {
        title: "Angular Development",
        description:
            "Robust frontend applications using Angular for complex enterprise and business systems.",
    },
    python: {
        title: "Python Development",
        description:
            "Python-powered applications for data-driven systems, automation, and backend services.",
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



export default async function TechnologyPage({ params }: TechnologyPageProps) {
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
            <TechnologiesHeroSection {...REACT_SERVICE.hero} />
            <div id="explore-more">
                <SectionHeading
                    sectionLabel={REACT_SERVICE.sectionHeading.sectionLabel}
                    heading={REACT_SERVICE.sectionHeading.heading}
                    subheading={REACT_SERVICE.sectionHeading.subheading}
                />
            </div>

            {/* EXPERTISE CARDS */}
            <div className="overflow-hidden">
                <TechnologyExpertiseSection items={REACT_SERVICE.expertise} />
                <FAQSection data={REACT_SERVICE.faq} href="/contact" />
            </div>
        </div>
    );
}
