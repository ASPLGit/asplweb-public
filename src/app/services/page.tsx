import SectionHeading from "@/components/common/SectionHeading";
import IndustriesWeServe from "@/components/sections/home/IndustriesWeServe";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServiceSection from "@/components/sections/services/ServicesSection";
import ServicesTicker from "@/components/sections/services/ServicesTicker";

export default function Service() {
    return (
        <>
            <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] pb-10 sm:pb-20">
                <ServicesHeroSection />
                <SectionHeading
                    sectionLabel="Our Services"
                    heading="What We Bring to the Table"
                    subheading="These are the core services we offer to help businesses build reliable digital products, scale efficiently, and adapt to evolving technology needs."
                />
                <ServiceSection />
                <IndustriesWeServe />
            </section>
            <ServicesTicker />
        </>
    );
}