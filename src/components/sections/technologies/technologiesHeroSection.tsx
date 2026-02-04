"use client";

import Button from "@/components/ui/Button";


interface HeroCard {
    chip: string;
    heading: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
}

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
                    h-screen 2xl:py-[250px] 2xl:h-auto
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
                <div className="container relative z-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        {/* LEFT */}
                        <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto justify-center sm:text-start text-center">
                            <h2 className="heading-xl">
                                <span className="italic font-lora">{title}</span>
                            </h2>

                            <p className="subheading max-w-xl">
                                {description}
                            </p>
                        </div>

                        {/* RIGHT — GLASS CARD */}
                        <div className="relative hidden sm:flex items-center justify-center">
                            {/* Glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[520px] h-[520px] rounded-full bg-cyan-400/10 blur-[140px]" />
                            </div> {/* Rings */}
                            <div className="relative w-[420px] h-[420px] rounded-full border border-white/10 flex items-center justify-center">
                                <div className="w-[320px] h-[320px] rounded-full border border-white/15 flex items-center justify-center">
                                    {/* Card */}
                                    <div className="w-[340px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 px-6 py-7 text-center shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:bg-white/15">
                                        <span className="inline-block mb-4 text-[11px] tracking-wide uppercase px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80">
                                            Delivery at Scale
                                        </span>

                                        <div className="grid grid-cols-2 gap-5">
                                            {stats.map((stat, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-xl bg-white/10 border border-white/15 px-4 py-3"
                                                >
                                                    <p className="text-2xl font-semibold text-white leading-none">
                                                        {stat.value}
                                                    </p>
                                                    <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-300">
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
                        flex flex-col items-center gap-2
                        text-white/80
                        text-sm font-normal
                        hover:text-white
                        transition z-50
                    "
                    aria-label="Scroll to content"
                >
                    <span>Explore</span>
                    <span className="w-6 h-10 rounded-full border border-white/50 flex items-start justify-center p-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                    </span>
                </button>
            </div>
        </section>
    );
}
