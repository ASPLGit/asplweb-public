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

    return (
        <section>
            <div className="bg-[url('/images/bg.webp')] relative bg-cover bg-center bg-no-repeat 2xl:py-[250px] h-screen 2xl:h-auto w-full flex items-center justify-center">
                <div
                    className="
            absolute inset-0
            sm:bg-[url('/images/layer3.webp')] bg-[url('/images/layer4.webp')]
            bg-cover bg-bottom bg-no-repeat
            sm:blur-[1px]
            opacity-50
        "
                />
                <div className="container relative z-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto">
                            <h2 className="heading-xl">
                                <span className="italic font-lora">Who We Are <br /></span>
                            </h2>

                            <p className="text-body-white max-w-xl">
                                A global software development partner helping businesses design, build, and scale reliable digital products through cost-effective and innovative technology solutions.
                            </p>

                            <div className="flex gap-4">
                                <Button variant="blue" to='/Services'>
                                    Services
                                </Button>
                                <Button variant="white" to='/Contact'>
                                    Contact
                                </Button>
                            </div>
                        </div>

                        <div className="max-w-5xl z-20">
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
            </div>
        </section>
    );
}