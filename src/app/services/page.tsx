import SectionHeading from "@/components/common/SectionHeading";
import IndustriesWeServe from "@/components/sections/home/IndustriesWeServe";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServiceSection from "@/components/sections/services/ServicesSection";
import ServicesTicker from "@/components/sections/services/ServicesTicker";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore our technology services including AI development, AI automation, chatbot development, generative AI solutions, and custom software development for modern businesses.",
    alternates: {
        canonical: "/services",
    },
};

export default function Service() {
    return (
        <>
            <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] pb-10 sm:pb-20">
                <ServicesHeroSection />
                <div id="services">
                    <SectionHeading
                        sectionLabel="Our Services"
                        heading="What We Bring to the Table"
                        subheading="These are the core services we offer to help businesses build reliable digital products, scale efficiently, and adapt to evolving technology needs."
                    />
                </div>
                <ServiceSection />
                <IndustriesWeServe />
            </section>
            <ServicesTicker />
        </>
    );
}