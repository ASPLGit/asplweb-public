import SectionHeading from "@/components/common/SectionHeading";
import StatsStrip from "@/components/common/StatsStrip";

export default function WhoWeAre() {
    return (
        <section className="sm:space-y-20 space-y-10">
            <SectionHeading
                sectionLabel="Who we are"
                heading="A Technology Partner You Can Rely On."
                subheading="We work closely with businesses to design and build dependable, scalable digital solutions. Our approach is simple clear communication, practical processes, and experienced teams focused on delivering real results."
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