"use client";

import CountUp from "@/components/ui/CountUp";

interface TechnologiesHeroSectionProps {
    title: string;
    description: string;
    stats: {
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
        <section>
            <div
                className="
                    relative
                    bg-[url('/images/bg.webp')]
                    bg-cover bg-center bg-no-repeat
                    sm:h-screen h-auto py-[40px] sm:py-0 2xl:py-[250px] 2xl:h-auto
                    w-full
                    flex items-center justify-center
                    after:content-['']
                    after:absolute
                    after:inset-0
                    after:bg-[url('/images/layer6.webp')]
                    after:bg-cover
                    after:bg-center
                    after:bg-no-repeat
                    sm:after:blur-[1px]
                    after:opacity-50
                    after:pointer-events-none
                "
            >
                <div
                    className="
            absolute inset-0
            bg-black/50
        "
                />
                <div className="container relative z-10 mt-24 sm:mt-0">
                    <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-10">
                        {/* LEFT */}
                        <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto justify-center sm:text-start text-center">
                            <h2 className="heading-xl">
                                <span className="italic font-lora">{title}</span>
                            </h2>

                            <p className="subheading max-w-md">
                                {description}
                            </p>
                        </div>

                        {/* RIGHT PREMIUM ORBIT CARD */}
                        <div className="relative flex items-center justify-center">

                            {/* Outer glow */}
                            <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[150px]" />

                            {/* Outer ring */}
                            <div className="relative w-[460px] h-[460px] rounded-full border border-white/10 flex items-center justify-center">

                                {/* Middle ring */}
                                <div className="w-[360px] h-[360px] rounded-full border border-white/10 flex items-center justify-center">

                                    {/* Glass Card */}
                                    <div
                                        className="
                                            w-[380px]
                                            rounded-2xl
                                            bg-white/5
                                            backdrop-blur-lg
                                            border border-white/10
                                            px-8 py-9
                                            text-left
                                            shadow-[0_40px_120px_-20px_rgba(0,123,255,0.4)]
                                            transition-all duration-500
                                            hover:-translate-y-2
                                        "
                                    >
                                        {/* Section label */}
                                        <span className="inline-block mb-6 text-xs tracking-widest uppercase text-cyan-300">
                                            Delivery at Scale
                                        </span>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                                            {stats.map((stat, index) => (
                                                <div key={index}>
                                                    <p className="
                                                        text-4xl font-semibold
                                                        bg-[linear-gradient(131deg,#007BFF,#00D4FF)]
                                                        bg-clip-text text-transparent
                                                        leading-none
                                                    ">
                                                        <CountUp value={stat.value} />
                                                    </p>

                                                    <p className="mt-3 text-xs text-white/70 leading-snug max-w-[120px]">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SCROLL INDICATOR */}
                <button
                    onClick={handleScroll}
                    className="
                        absolute bottom-8
                        sm:flex flex-col items-center gap-2
                        text-white/80
                        text-sm font-normal
                        hover:text-white
                        transition z-50 hidden 
                    "
                    aria-label="Scroll to content"
                >
                    <span>Explore More</span>
                    <span className="w-6 h-10 rounded-full border border-white/50 flex items-start justify-center p-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                    </span>
                </button>
            </div>
        </section>
    );
}
