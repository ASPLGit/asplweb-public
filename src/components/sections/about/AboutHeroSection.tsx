'use client';

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
    relative z-10
    bg-[url('/images/bg.webp')]
    bg-cover bg-center bg-no-repeat
    sm:h-screen h-[90vh] 2xl:py-[250px] 2xl:h-auto
    w-full
    flex items-center justify-center
    after:content-['']
    after:absolute
    after:inset-0
    after:bg-[url('/images/layer1.webp')]
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
            bg-black/70
        "
                />
                <div className="container relative z-10">
                    <div className="flex flex-col 2xl:gap-8 sm:gap-6 gap-4 max-w-5xl mx-auto items-center justify-center text-center">
                        <h2 className="heading-xl">
                            We Are a <br />
                            <span className="italic font-lora ">Full Service</span> <br /> 
                            Technology Partner
                        </h2>

                        <p className="subheading max-w-xl">
                            A global software development partner helping businesses design, build, and scale reliable digital products through cost-effective and innovative technology solutions.
                        </p>

                        {/* <div className="flex justify-center sm:justify-start gap-4">
                            <Button variant="blue" to='/services'>
                                Services
                            </Button>
                            <Button variant="white" to='/careers'>
                                Careers
                            </Button>
                        </div> */}
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