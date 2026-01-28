interface SectionHeadingProps {
    sectionLabel: string;
    heading: string;
    subheading: string;
}

export default function SectionHeading({
    sectionLabel,
    heading,
    subheading,
}: SectionHeadingProps) {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-4 sm:gap-20 items-center">
                {/* LEFT */}
                <div className="md:col-span-5 2xl:col-span-6 col-span-12">
                    <span className="section-label">
                        {sectionLabel}
                    </span>

                    <h2 className="heading-lg mt-3 lg:max-w-md 2xl:max-w-lg">
                        {heading}
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="md:col-span-7 2xl:col-span-6 col-span-12">
                    <p className="text-body">
                        {subheading}
                    </p>
                </div>
            </div>
        </div>
    );
}
