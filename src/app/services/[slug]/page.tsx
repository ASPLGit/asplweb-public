import { notFound } from "next/navigation";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureGrid from "@/components/sections/singleServicePage/FeatureGrid";
import StatsStrip from "@/components/common/StatsStrip";
import TechnologyGrid from "@/components/sections/singleServicePage/TechnologyGrid";
import FAQSection from "@/components/common/FAQ";
import OtherServicesNav from "@/components/sections/singleServicePage/OtherServicesNav";
import HeroSection from "@/components/common/HeroSection";
import { services } from "@/data/singleServicePage";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}




export const SERVICE_META: Record<
    string,
    { title: string; description: string }
> = {
    "software-development": {
        title: "Software Development",
        description:
            "Custom software development services including enterprise applications, SaaS platforms, API integrations, and system modernization built for performance and scalability.",
    },

    "web-development": {
        title: "Website Development",
        description:
            "Professional website development services focused on responsive design, frontend and backend development, UI/UX, and CMS solutions for modern businesses.",
    },

    "mobile-development": {
        title: "Mobile App Development",
        description:
            "End-to-end mobile app development services for iOS, Android, and cross-platform applications with intuitive UI/UX and long-term maintenance support.",
    },

    "blockchain": {
        title: "Blockchain & Web3",
        description:
            "Secure blockchain and Web3 development services including smart contracts, decentralized applications (DApps), NFT platforms, token development, and Web3 integrations.",
    },

    "cloud-solutions": {
        title: "Microsoft & Cloud Solutions",
        description:
            "Scalable Microsoft and cloud solutions covering cloud migration, Azure services, infrastructure setup, cloud security, and managed cloud operations.",
    },

    "devops": {
        title: "DevOps & Cloud Automation",
        description:
            "DevOps and cloud automation services enabling CI/CD pipelines, infrastructure as code, monitoring, release management, and reliable cloud operations.",
    },

    "ai-ml": {
        title: "AI & Machine Learning",
        description:
            "AI and machine learning solutions including predictive analytics, data modeling, intelligent automation, business intelligence, and ML-driven decision systems.",
    },

    "cybersecurity": {
        title: "Cybersecurity Solutions",
        description:
            "Comprehensive cybersecurity services covering application security, network security, vulnerability assessments, risk management, and compliance.",
    },
};


export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const meta = SERVICE_META[slug];

    return {
        title: meta?.title ?? "Services",
        description:
            meta?.description ??
            "Professional IT and software services by Aplomb Soft.",
    };
}





export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;

    const service = services.find(
        (item) => item.slug === slug
    );

    if (!service) {
        notFound();
    }

    return (
        <div className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] sm:pb-20 pb-10">
            {/* HERO */}
            <div>
                <HeroSection
                    title={service.title}
                    description={service.description}
                    primaryCta={service.cta?.primary}
                    secondaryCta={service.cta?.secondary}
                />
                <div className="bg-[#F4F9FF] sm:py-20 py-10 flex flex-col sm:gap-20 gap-10">
                    {/* SECTION HEADING */}
                    <SectionHeading
                        sectionLabel={service.section.label}
                        heading={service.section.heading}
                        subheading={service.section.subheading}
                    />
                    {/* FEATURE GRID */}
                    <FeatureGrid data={service.featureSection} />
                </div>
            </div>
            {service.stats && (
                <StatsStrip items={service.stats} />
            )}

            <SectionHeading
                sectionLabel='Tools & Technologies'
                heading='Technologies We Work With'
                subheading='A modern, reliable technology stack chosen to build secure, scalable, and high-performance software solutions.'
            />
            <TechnologyGrid data={service.TechnologySection} />
                <FAQSection data={service.faq} href="/contact" />
            <OtherServicesNav />
        </div>
    );
}
