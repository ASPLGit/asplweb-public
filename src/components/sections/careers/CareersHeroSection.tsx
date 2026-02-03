'use client';

export default function CareersHeroSection() {
    const handleScroll = () => {
        const el = document.getElementById("career");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section className="relative flex flex-col items-center">
                <div className="bg-[url('/images/bg.webp')] relative bg-cover bg-center bg-no-repeat 2xl:py-[250px] h-screen 2xl:h-auto w-full flex flex-col items-center justify-center">
                    <div
                        className="
            absolute inset-0
            bg-[url('/images/layer2.webp')]
            bg-cover bg-bottom bg-no-repeat
            sm:blur-[1px]
            opacity-50
        "
                    />
                    {/* <div
                        className="
            absolute inset-0
            bg-black/0
        "
                    /> */}
                    <div className="container text-center relative z-10">
                        <div className="flex flex-col items-center 2xl:gap-8 sm:gap-6 gap-4 max-w-3xl mx-auto">

                            <h2 className="heading-xl">
                                <>Build Your Career With<br />  <span className="italic font-lora">Aplombsoft</span>.</>

                            </h2>

                            <p className="text-body-white max-w-xl mx-auto">
                                Join a team of designers, developers, and problem-solvers building scalable, real-world software products for global clients.
                            </p>
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
            </section>
        </>
    );
}
