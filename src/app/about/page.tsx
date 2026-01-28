import SectionHeading from "@/components/common/SectionHeading";
import TrustedBy from "@/components/common/TrustedBy";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import BusinessPhilosophySection from "@/components/sections/about/BusinessPhilosophySection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import WhoWeAre from "@/components/sections/home/WhoWeAre";

export const metadata = {
    title: "About Us",
    description:
        "Learn more about Aplomb Soft, our mission, expertise, and how we help businesses build scalable digital solutions.",
};


export default function About() {
    return (
        <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px]">
            <AboutHeroSection />
            <SectionHeading
                sectionLabel="Our Mission"
                heading="Working as a True Technology Partner"
                subheading="We strive to be a dependable technology partner that helps organizations succeed by building flexible solutions that are both technology-agnostic and aligned with their strategic goals. Our approach emphasizes collaboration, deep technical insight, and a commitment to quality."
            />
            <CoreValuesSection />
            <TrustedBy />
            <WhoWeAre />
            <BusinessPhilosophySection />
        </section>
    );
}