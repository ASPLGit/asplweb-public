interface SectionHeadingProps {
    sectionLabel: string;
    heading: string;
    subheading: string;
    dark?: boolean;
}

export default function SectionHeading({
    sectionLabel,
    heading,
    subheading,
    dark = false,
}: SectionHeadingProps) {
    return (
        <div className="container relative z-10">
            <div
                className="
                    grid grid-cols-1
                    lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-20
                    items-center
                "
            >
                {/* LEFT */}
                <div className="lg:col-span-5 2xl:col-span-6">
                    <span
                        className={`section-label ${dark ? "text-slate-300" : ""
                            }`}
                    >
                        {sectionLabel}
                    </span>

                    <h2
                        className={`heading-lg mt-3 lg:max-w-md 2xl:max-w-lg ${dark ? "text-white" : ""
                            }`}
                    >
                        {heading}
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-7 2xl:col-span-6">
                    <p
                        className={`text-body ${dark ? "text-slate-300" : ""
                            }`}
                    >
                        {subheading}
                    </p>
                </div>
            </div>
        </div>
    );
}
