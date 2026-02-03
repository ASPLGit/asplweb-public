"use client";

import Button from "@/components/ui/Button";

export default function ServicesHeroSection() {
    const handleScroll = () => {
        const el = document.getElementById("services");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section className="relative">
                <div className="bg-[url('/images/bg.webp')] relative bg-cover bg-center bg-no-repeat 2xl:py-[250px] h-screen 2xl:h-auto w-full flex flex-col items-center justify-center">
                    <div
                        className="
            absolute inset-0
            bg-[url('/images/layer6.webp')]
            bg-cover bg-center bg-no-repeat
            sm:blur-[7px]
            opacity-50
        "
                    />

                    {/* Dark Overlay */}
                    <div
                        className="
            absolute inset-0
            bg-black/10
        "
                    />
                    <div className="container relative z-10">
                        <div className="flex items-center justify-center flex-col  2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto text-center">

                            <h2 className="heading-xl">
                                <span className="font-lora italic">What We Do Best</span>
                            </h2>

                            <p className="text-body-white max-w-xl">
                                We offer a comprehensive range of technology services designed to help businesses build reliable digital products, scale efficiently, and adapt to evolving technology needs.
                            </p>

                            <div className="flex gap-4">
                                <Button variant="blue" to="/about">
                                    About
                                </Button>

                                <Button variant="white" to="/contact">
                                    Contact
                                </Button>
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
                        text-sm font-medium
                        hover:text-white
                        transition
                    "
                        aria-label="Scroll to contact form"
                    >
                        <span>Services</span>

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
        </>
    );
}
