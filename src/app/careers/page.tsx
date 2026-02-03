import SectionHeading from "@/components/common/SectionHeading";
import CareersHeroSection from "@/components/sections/careers/CareersHeroSection";
import OpenPositions from "@/components/sections/careers/OpenPositions";

export default function About() {
    return (
        <section className="space-y-[40px] sm:space-y-[80px] 2xl:space-y-[120px] pb-10 sm:pb-20">
            <CareersHeroSection />
            <div id="career">
                <SectionHeading
                    sectionLabel="Join Us"
                    heading="Be a Part of Our Innovative Team"
                    subheading="At Aplombsoft, we are always on the lookout for talented individuals who are passionate about technology and eager to make a difference. Join our dynamic team and help us build cutting-edge solutions that drive success for our clients worldwide."
                />
            </div>
            <OpenPositions />
        </section>
    );
}