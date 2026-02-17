"use client";

export default function ContactHeroSection() {
    const handleScroll = () => {
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative">
            <div
                className="
    relative z-10
    bg-[url('/images/bg.webp')]
    bg-cover bg-center bg-no-repeat
    sm:h-screen h-[90vh] 2xl:py-[250px] 2xl:h-auto
    w-full
    flex flex-col items-center justify-center
    after:content-['']
    after:absolute
    after:inset-0
    after:bg-[url('/images/layer5.webp')]
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
            bg-black/70
        "
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                <div className="container relative z-10">
                    <div className="flex items-center justify-center flex-col 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto text-center">
                        <h2 className="heading-xl">
                            <span className="italic font-lora">Let’s Talk</span>
                            <br />
                            About Your Project.
                        </h2>

                        <p className="subheading max-w-xl">
                            Have an idea or a challenge in mind? Reach out to us
                            and let’s discuss how we can help bring it to life
                            with the right technology and expertise.
                        </p>
                    </div>
                </div>

                {/* SCROLL INDICATOR */}
                <button
                    onClick={handleScroll}
                    className="
                        absolute bottom-8 z-10
                        flex flex-col items-center gap-2
                        text-white/80
                        text-sm font-normal
                        hover:text-white
                        transition
                    "
                    aria-label="Scroll to contact form"
                >
                    <span>Contact</span>

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
