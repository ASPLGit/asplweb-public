'use client';

import Button from "@/components/ui/Button";


interface CTA {
    label: string;
    href: string;
}
interface HeroSectionProps {
    title: React.ReactNode;
    description: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
}

export default function SingleServiceHeroSection({
    title,
    description,
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {

    const handleScroll = () => {
        const el = document.getElementById("service");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="flex flex-col items-center justify-center relative z-10">
            <div
                className="
    relative
    bg-[url('/images/bg.webp')]
    bg-cover bg-center bg-no-repeat
    sm:h-screen h-[90vh] 2xl:py-[250px] 2xl:h-auto
    w-full
    flex flex-col items-center justify-center
    after:content-['']
    after:absolute
    after:inset-0
    after:bg-[url('/images/layer4.webp')]
    sm:after:bg-[url('/images/layer3.webp')]
    after:bg-cover
    after:bg-bottom
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
                <div className="container relative z-10">
                    <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4 mx-auto text-center items-center justify-center">

                        <h2 className="heading-xl !font-normal max-w-4xl">
                            {title}
                        </h2>

                        <p className="subheading max-w-xl">
                            {description}
                        </p>

                        <div className="flex gap-4">
                            {primaryCta && (
                                <Button variant="blue" to={primaryCta.href}>
                                    {primaryCta.label}
                                </Button>
                            )}

                            {secondaryCta && (
                                <Button variant="white" to={secondaryCta.href}>
                                    {secondaryCta.label}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* SCROLL INDICATOR */}
            <button
                onClick={handleScroll}
                className="
                        absolute bottom-8 z-50
                        flex flex-col items-center gap-2
                        text-white/80
                        text-sm font-normal
                        hover:text-white
                        transition
                    "
                aria-label="Scroll to contact form"
            >
                <span>Explore Service</span>

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
        </section>
    );
}