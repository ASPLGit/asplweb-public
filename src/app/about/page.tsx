import SectionHeading from "@/components/common/SectionHeading";
import TrustedBy from "@/components/common/TrustedBy";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import BusinessPhilosophySection from "@/components/sections/about/BusinessPhilosophySection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import FounderCard from "@/components/sections/about/FounderCard";
import FounderSection from "@/components/sections/about/FounderCard";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import { FOUNDERS } from "@/data/founders";

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
                sectionLabel="Leadership"
                heading="Meet the Founders"
                subheading="Our founders bring decades of hands-on experience in building secure, scalable, and high-performing technology solutions. Their leadership is grounded in technical excellence, strategic thinking, and long-term partnerships."
            />

            {FOUNDERS.map((founder) => (
                <FounderCard key={founder.id} data={founder} />
            ))}
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