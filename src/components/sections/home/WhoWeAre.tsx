import SectionHeading from "@/components/common/SectionHeading";
import StatsStrip from "@/components/common/StatsStrip";

export default function WhoWeAre() {
    return (
        <section className="sm:space-y-20 space-y-10">
            <SectionHeading
                sectionLabel="Who we are"
                heading="A Technology Partner You Can Rely On."
                subheading="We focus on building reliable, scalable solutions through clear communication, proven processes, and experienced teams."
            />
            <StatsStrip
                items={[
                    { value: "98%", label: "Happy Client" },
                    { value: "200+", label: "Project Delivered" },
                    { value: "30+", label: "Technology Experts" },
                    { value: "10+", label: "Years Average Experience" },
                ]}
            />

        </section>
    );
}