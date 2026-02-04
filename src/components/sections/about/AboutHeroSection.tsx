'use client';

import Button from "@/components/ui/Button";



const ABOUT_CARDS = [
    {
        title: "Product & Business Focused",
        description:
            "We align technology decisions with real business goals, not just features or trends.",
    },
    {
        title: "Global Team",
        description:
            "Distributed teams working across time zones with shared standards and accountability.",
    },
    {
        title: "Salesforce & Enterprise Platforms",
        description:
            "Experience building, customizing, and integrating Salesforce and other enterprise systems.",
    },
    {
        title: "Cloud & Modern Tech Stack",
        description:
            "Proven expertise across cloud platforms, APIs, and modern frontend frameworks.",
    },
];



export default function AboutHeroSection() {
    const handleScroll = () => {
        const el = document.getElementById("about");
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
    after:bg-[url('/images/layer3.webp')]
    after:bg-cover
    after:bg-bottom
    after:bg-no-repeat
    sm:after:blur-[1px]
    after:opacity-50
    after:pointer-events-none
  "
            >
                <div className="container relative z-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto sm:items-start sm:text-start text-center">
                            <h2 className="heading-xl">
                                <span className="italic font-lora">Who We Are <br /></span>
                            </h2>

                            <p className="subheading max-w-xl">
                                A global software development partner helping businesses design, build, and scale reliable digital products through cost-effective and innovative technology solutions.
                            </p>

                            <div className="flex justify-center sm:justify-start gap-4">
                                <Button variant="blue" to='/Services'>
                                    Services
                                </Button>
                                <Button variant="white" to='/Contact'>
                                    Contact
                                </Button>
                            </div>
                        </div>

                        <div className="max-w-5xl z-20 sm:block hidden">
                            <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-4 gap-2">
                                {ABOUT_CARDS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                rounded-lg
                bg-white/5 backdrop-blur
                border border-white/15
                sm:px-4 px-2 sm:py-4 py-3
                text-center
                transition
                hover:bg-white/0
            "
                                    >
                                        <p className="sm:text-sm text-xs font-semibold text-white">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-xs text-slate-300">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
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
                    aria-label="Scroll to contact form"
                >
                    <span>Explore Leadership</span>

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