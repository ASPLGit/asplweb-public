"use client";

import CountUp from "@/components/ui/CountUp";

interface TechnologiesHeroSectionProps {
    title: string;
    description: string;
    stats?: {
        value: string;
        label: string;
    }[];
    scrollToId?: string;
}

export default function TechnologiesHeroSection({
    title,
    description,
    stats,
    scrollToId = "explore-more",
}: TechnologiesHeroSectionProps) {
    const handleScroll = () => {
        const el = document.getElementById(scrollToId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative overflow-hidden z-10">

            {/* Background */}
            <div
                className="
          relative
    bg-[url('/images/bg.webp')]
    bg-cover bg-center bg-no-repeat
    sm:h-screen h-auto py-32 2xl:py-[250px] 2xl:h-auto  w-full
    flex flex-col items-center justify-center
    after:content-['']
    after:absolute
    after:inset-0
    after:bg-[url('/images/layer1.webp')]
    after:bg-cover
    after:bg-center
    after:bg-no-repeat
    sm:after:blur-[1px]
    after:opacity-50
    after:pointer-events-none
        "
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Subtle Gradient Glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px]" />

                <div className="container relative z-10">

                    {/* Center Content */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                        {/* TITLE */}
                        <h1 className="heading-xl text-white !font-normal">
                            <span>{title}</span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="subheading 2xl:mt-6 mt-4 max-w-2xl text-white/80">
                            {description}
                        </p>
                        {/* STATS BAR */}
                        {stats &&
                            <div
                                className="
                relative
                sm:mt-20 mt-10
                w-full
                rounded-2xl
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                p-8
                shadow-[0_40px_120px_-20px_rgba(0,123,255,0.4)]
              "
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                                    {stats.map((stat, index) => (
                                        <div key={index} className="flex flex-col items-center">

                                            <p
                                                className="
                        text-4xl font-semibold
                        text-gradient
                        leading-none
                      "
                                            >
                                                <CountUp value={stat.value} />
                                            </p>

                                            <p className="mt-4 text-sm text-white/70 max-w-[140px] font-normal">
                                                {stat.label}
                                            </p>

                                        </div>
                                    ))}

                                </div>
                            </div>
                        }



                    </div>
                </div>

                <button
                    onClick={handleScroll}
                    className="
                        absolute bottom-8 flex
                         flex-col items-center gap-2
                        text-white/80
                        text-sm font-normal
                        hover:text-white
                        transition z-50
                    "
                    aria-label="Scroll to contact form"
                >
                    <span>Explore More</span>

                    {/* Mouse Icon */}
                    <span
                        className="
                            w-6 h-10
                            rounded-full
                            border border-white/50
                            flex items-start justify-center
                            p-1
                        "
                    >
                        <span
                            className="
                                w-1.5 h-1.5
                                rounded-full
                                bg-white
                                animate-bounce
                            "
                        />
                    </span>
                </button>

            </div>
        </section>
    );
}
